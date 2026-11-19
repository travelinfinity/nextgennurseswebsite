/* NextGen Nurses · OET Nursing practice app: sign-in, access check and progress sync.
   Accounts live in the OSCE Supabase project (same sign-in as the OSCE app), but OET access
   is separate: oet_profiles.has_access is set by the Stripe webhook after an OET purchase.
   Only a small JSON of scores is synced (table oet_progress). No files. */
(function () {
  "use strict";
  var CFG = {
    SUPABASE_URL: "https://crhttpufydskghtstisg.supabase.co",
    // Public anon key: safe in the browser. Access is enforced by Row Level Security.
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyaHR0cHVmeWRza2dodHN0aXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMDQxMTksImV4cCI6MjEwODU4MDExOX0.Pawg0fIYgRFT6EzYq0-g5NUz-LM0BsBirILy-Nogv3Y",
    BUY_URL: "https://buy.stripe.com/00w6oAcSugWbc576s40000m",
    PRICE: "A$44.00",
    WHATSAPP: "https://wa.me/61458567621",
    APP_JS: "/g/Oq7mWv2KxR9cTpLd4sNe/app.js"
  };
  var KEY = "ngn-oet-progress-v1", OWNER = "ngn-oet-owner";
  var RETURN_URL = location.origin + location.pathname;
  var app = document.getElementById("app");
  var sb = null, user = null, mode = "in", started = false, saveTimer = null, saving = false, dirty = null;

  try {
    if (window.supabase) sb = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, { auth: { storageKey: "ngn-oet-auth" } });
  } catch (e) { sb = null; }

  /* ---------- tiny DOM helper ---------- */
  function el(tag, attrs) {
    var n = document.createElement(tag), i, k;
    if (attrs) for (k in attrs) {
      if (k === "on") for (var ev in attrs.on) n.addEventListener(ev, attrs.on[ev]);
      else if (k === "class") n.className = attrs[k];
      else if (attrs[k] === true) n.setAttribute(k, "");
      else if (attrs[k] != null && attrs[k] !== false) n.setAttribute(k, attrs[k]);
    }
    for (i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) n.appendChild(typeof x === "string" ? document.createTextNode(x) : x); });
      else n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return n;
  }
  function screen(content) {
    app.textContent = "";
    app.appendChild(el("div", { class: "wrap gate" }, el("div", { class: "gate-box" }, content)));
    window.scrollTo(0, 0);
  }
  function friendly(err) {
    var m = (err && err.message) || String(err || "");
    if (/invalid login credentials/i.test(m)) return "Email or password is incorrect.";
    if (/email not confirmed/i.test(m)) return "Please confirm your email first. Check your inbox (and spam folder) for the link we sent.";
    if (/already registered|already been registered|already exists/i.test(m)) return "An account with this email already exists. Sign in instead. If you made an account for our OSCE course, use the same password.";
    if (/rate limit|too many/i.test(m)) return "Too many attempts. Please wait a minute and try again.";
    if (/password/i.test(m) && /(characters|weak|short)/i.test(m)) return "Choose a stronger password (at least 8 characters).";
    if (/failed to fetch|network/i.test(m)) return "Can't reach the server. Check your internet connection and try again.";
    return m || "Something went wrong. Please try again.";
  }

  /* ---------- sign-in / create account / reset ---------- */
  function viewAuth(m, note, noteKind) {
    mode = m || "in";
    var titles = { "in": "Sign in to OET practice", up: "Create your account", forgot: "Reset your password", reset: "Choose a new password" };
    var labels = { "in": "Sign in", up: "Create account", forgot: "Email me a reset link", reset: "Save new password" };
    var msg = el("p", { class: "gate-msg" + (noteKind ? " " + noteKind : ""), role: "status" }, note || "");
    var name = el("input", { id: "gName", autocomplete: "name" });
    var email = el("input", { id: "gEmail", type: "email", autocomplete: "email", inputmode: "email" });
    var pass = el("input", { id: "gPass", type: "password", autocomplete: mode === "in" ? "current-password" : "new-password", placeholder: mode === "up" || mode === "reset" ? "At least 8 characters" : null });
    var pass2 = el("input", { id: "gPass2", type: "password", autocomplete: "new-password" });
    var btn = el("button", { class: "btn btn-amber gate-submit", type: "submit" }, labels[mode]);
    function field(id, label, input, show) { return show ? el("div", { class: "gate-field" }, el("label", { for: id }, label), input) : null; }
    function setMsg(t, kind) { msg.textContent = t; msg.className = "gate-msg" + (kind ? " " + kind : ""); }

    var form = el("form", { novalidate: true, on: { submit: async function (e) {
      e.preventDefault();
      if (!sb) return setMsg("The account service didn't load. Check your connection and reload the page.", "bad");
      var em = (email.value || "").trim().toLowerCase(), p = pass.value;
      if (mode !== "reset" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return setMsg("Enter a valid email address.", "bad");
      if (mode === "up" || mode === "reset") {
        if (p.length < 8) return setMsg("Password needs at least 8 characters.", "bad");
        if (p !== pass2.value) return setMsg("The passwords don't match.", "bad");
      }
      if (mode === "in" && !p) return setMsg("Enter your password.", "bad");
      btn.disabled = true; setMsg("Please wait…");
      try {
        if (mode === "up") {
          var r = await sb.auth.signUp({ email: em, password: p, options: { data: { full_name: name.value.trim() }, emailRedirectTo: RETURN_URL } });
          if (r.error) throw r.error;
          if (r.data && r.data.user && Array.isArray(r.data.user.identities) && r.data.user.identities.length === 0)
            throw new Error("already registered");
          if (r.data.session) { await afterSignIn(r.data.session.user); return; }
          viewAuth("in", "Account created. Check your email and tap the confirmation link, then come back here and sign in.", "ok");
          document.getElementById("gEmail").value = em;
        } else if (mode === "in") {
          var s = await sb.auth.signInWithPassword({ email: em, password: p });
          if (s.error) throw s.error;
          await afterSignIn(s.data.user);
        } else if (mode === "forgot") {
          var f = await sb.auth.resetPasswordForEmail(em, { redirectTo: RETURN_URL });
          if (f.error) throw f.error;
          setMsg("If an account exists for that email, a reset link is on its way. Open it on this device.", "ok");
        } else if (mode === "reset") {
          var u = await sb.auth.updateUser({ password: p });
          if (u.error) throw u.error;
          if (location.hash) history.replaceState(null, "", RETURN_URL);
          await afterSignIn(u.data.user);
        }
      } catch (err) { setMsg(friendly(err), "bad"); }
      finally { btn.disabled = false; }
    } } },
      field("gName", "Full name", name, mode === "up"),
      field("gEmail", "Email", email, mode !== "reset"),
      field("gPass", mode === "reset" ? "New password" : "Password", pass, mode !== "forgot"),
      field("gPass2", "Confirm password", pass2, mode === "up" || mode === "reset"),
      msg, btn);

    var tabs = (mode === "in" || mode === "up") ? el("div", { class: "gate-tabs", role: "tablist" },
      el("button", { type: "button", role: "tab", class: mode === "in" ? "on" : "", "aria-selected": String(mode === "in"), on: { click: function () { viewAuth("in"); } } }, "Sign in"),
      el("button", { type: "button", role: "tab", class: mode === "up" ? "on" : "", "aria-selected": String(mode === "up"), on: { click: function () { viewAuth("up"); } } }, "Create account")) : null;

    var links = el("p", { class: "gate-links" },
      mode === "in" ? el("button", { type: "button", class: "linkbtn", on: { click: function () { viewAuth("forgot"); } } }, "Forgot password?") : null,
      mode === "forgot" || mode === "reset" ? el("button", { type: "button", class: "linkbtn", on: { click: function () { viewAuth("in"); } } }, "← Back to sign in") : null);

    screen([
      el("div", { class: "eyebrow" }, "OET Nursing · member practice"),
      el("h1", null, titles[mode]),
      mode === "in" ? el("p", { class: "muted" }, "Your scores are saved to your account, so you can continue on any phone or computer.") : null,
      mode === "up" ? el("p", { class: "muted" }, "Use the same email you paid with (or will pay with) at checkout. That's how we match your purchase to your account.") : null,
      tabs, form, links,
      el("p", { class: "gate-foot muted small" }, "Haven't bought the app yet? ", el("a", { href: "/oet" }, "See what's included (" + CFG.PRICE + ")"), ". Need help? ", el("a", { href: CFG.WHATSAPP, target: "_blank", rel: "noopener" }, "WhatsApp support"), ".")
    ]);
    var first = document.getElementById(mode === "up" ? "gName" : mode === "reset" ? "gPass" : "gEmail");
    if (first && !note) try { first.focus({ preventScroll: true }); } catch (e) {}
  }

  /* ---------- signed in but not unlocked ---------- */
  function viewPending(u) {
    var buy = CFG.BUY_URL;
    try { var b = new URL(CFG.BUY_URL); b.searchParams.set("prefilled_email", u.email); b.searchParams.set("client_reference_id", u.id); buy = b.toString(); } catch (e) {}
    var msg = el("p", { class: "gate-msg", role: "status" });
    var again = el("button", { class: "btn btn-line", type: "button", on: { click: async function () {
      again.disabled = true; msg.textContent = "Checking…"; msg.className = "gate-msg";
      try { await afterSignIn(u, true); } finally { again.disabled = false; }
    } } }, "Check again");
    screen([
      el("div", { class: "eyebrow" }, "Almost there"),
      el("h1", null, "Your account is ready"),
      el("p", null, "The OET practice app isn't unlocked for ", el("b", null, u.email), " yet. Buy access below using this same email. Your account unlocks automatically within a minute of payment, then tap Check again."),
      el("p", { class: "gate-actions" },
        el("a", { class: "btn btn-amber", href: buy }, "Buy access · " + CFG.PRICE + " incl. tax"), again),
      msg,
      el("p", { class: "muted small" }, "Already paid with a different email, or still locked after 10 minutes? ",
        el("a", { href: CFG.WHATSAPP, target: "_blank", rel: "noopener" }, "Message us on WhatsApp"), " with your Stripe receipt and we'll unlock it."),
      el("p", { class: "gate-links" }, el("button", { type: "button", class: "linkbtn", on: { click: signOut } }, "Sign out and use a different email"))
    ]);
  }

  /* ---------- progress sync ---------- */
  function readLocal() { try { var r = JSON.parse(localStorage.getItem(KEY) || "null"); return r && r.p ? r : null; } catch (e) { return null; } }
  function merge(a, b) {   // combine two progress stores without losing anything
    var out = { p: {}, sets: {} };
    [a, b].forEach(function (src) {
      if (!src) return;
      Object.keys(src.p || {}).forEach(function (t) {
        out.p[t] = out.p[t] || {};
        Object.keys(src.p[t] || {}).forEach(function (i) {
          var v = src.p[t][i];
          if (typeof v === "number" && (out.p[t][i] == null || v > out.p[t][i])) out.p[t][i] = v;
        });
      });
      Object.keys(src.sets || {}).forEach(function (k) {
        var s = src.sets[k];
        if (s && (!out.sets[k] || (s.pos || 0) > (out.sets[k].pos || 0))) out.sets[k] = s;
      });
    });
    return out;
  }
  async function pushNow() {
    if (!sb || !user || !dirty || saving) return;
    var data = dirty; dirty = null; saving = true;
    try {
      var r = await sb.from("oet_progress").upsert({ user_id: user.id, data: data, updated_at: new Date().toISOString() });
      if (r.error) throw r.error;
    } catch (e) {
      console.warn("OET progress not saved yet, will retry", e);
      if (!dirty) dirty = data;   // keep it for the next try (it is also safe in this browser)
    } finally {
      saving = false;
      if (dirty && !saveTimer) saveTimer = setTimeout(function () { saveTimer = null; pushNow(); }, 5000);
    }
  }
  function schedule(store) {
    try { dirty = JSON.parse(JSON.stringify(store)); } catch (e) { return; }
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () { saveTimer = null; pushNow(); }, 1500);
  }
  function flush() { if (dirty) { clearTimeout(saveTimer); saveTimer = null; pushNow(); } }
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });
  addEventListener("pagehide", flush);
  addEventListener("online", flush);

  async function signOut() {
    try { flush(); if (saving || dirty) await new Promise(function (r) { setTimeout(r, 1200); }); } catch (e) {}
    try { localStorage.removeItem(KEY); localStorage.removeItem(OWNER); } catch (e) {}
    try { if (sb) await sb.auth.signOut(); } catch (e) {}
    location.href = RETURN_URL;
  }
  window.OET_SIGNOUT = signOut;

  /* ---------- after sign-in: check access, load progress, start the app ---------- */
  async function afterSignIn(u, fromPending) {
    if (!u || started) return;
    if (!fromPending) screen([el("p", { class: "muted" }, "Signing you in…")]);
    var access = false;
    try {
      var a = await sb.rpc("oet_my_access");
      if (a.error) throw a.error;
      access = a.data === true;
    } catch (e) {
      screen([el("h1", null, "We couldn't check your access"), el("p", { class: "muted" }, friendly(e)),
        el("p", { class: "gate-actions" }, el("button", { class: "btn btn-amber", type: "button", on: { click: function () { afterSignIn(u); } } }, "Try again"),
          el("button", { class: "btn btn-line", type: "button", on: { click: signOut } }, "Sign out"))]);
      return;
    }
    if (!access) { viewPending(u); return; }

    var remote = null;
    try {
      var r = await sb.from("oet_progress").select("data").eq("user_id", u.id).maybeSingle();
      if (r.error) throw r.error;
      remote = r.data && r.data.data && r.data.data.p ? r.data.data : null;
    } catch (e) { console.warn("Could not load saved progress; using this device's copy", e); }

    var local = readLocal(), owner = null;
    try { owner = localStorage.getItem(OWNER); } catch (e) {}
    // Progress already in this browser counts only if it was made before sign-in existed (no owner) or by this same student.
    var merged = merge(remote, local && (!owner || owner === u.id) ? local : null);
    try { localStorage.setItem(KEY, JSON.stringify(merged)); localStorage.setItem(OWNER, u.id); } catch (e) {}

    user = u;
    window.OET_USER = { id: u.id, email: u.email };
    window.OET_SYNC = schedule;
    if (JSON.stringify(merged) !== JSON.stringify(remote || { p: {}, sets: {} })) { dirty = merged; pushNow(); }
    // Remove sign-in tokens from the address (the app uses the # part for its own pages)
    if (/access_token|refresh_token|type=/.test(location.hash)) history.replaceState(null, "", RETURN_URL);
    startApp();
  }

  function startApp() {
    if (started) return;
    started = true;
    document.body.classList.add("signed-in");
    app.innerHTML = '<div class="wrap" style="padding-block:60px"><p>Loading practice…</p></div>';
    var s = document.createElement("script");
    s.src = CFG.APP_JS;
    s.onerror = function () { app.innerHTML = '<div class="wrap" style="padding-block:60px"><p>The practice app didn\'t load. Check your connection and reload the page.</p></div>'; };
    document.body.appendChild(s);
  }

  /* ---------- boot ---------- */
  if (!sb) { viewAuth("in", "The account service didn't load. Check your connection and reload the page.", "bad"); return; }
  var recovering = /type=recovery/.test(location.hash);
  sb.auth.onAuthStateChange(function (event) {
    if (event === "PASSWORD_RECOVERY") { recovering = true; viewAuth("reset"); }
  });
  if (recovering) { viewAuth("reset"); return; }
  sb.auth.getSession().then(function (res) {
    var session = res && res.data && res.data.session;
    if (recovering) return;
    if (session) afterSignIn(session.user);
    else viewAuth("in",
      /error_description=/.test(location.hash) ? decodeURIComponent((location.hash.match(/error_description=([^&]+)/) || [])[1] || "").replace(/\+/g, " ") : "",
      /error_description=/.test(location.hash) ? "bad" : "");
  }).catch(function () { viewAuth("in"); });
})();
