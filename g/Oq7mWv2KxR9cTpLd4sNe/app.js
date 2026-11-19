/* NextGen Nurses · OET Nursing practice app (members). Progress is kept in this browser and synced to the
   student's account by gate.js (window.OET_SYNC). Only scores are synced, never recordings or letters. */
(function () {
  "use strict";
  var app = document.getElementById("app");
  var TESTS = (window.OET_TESTS || []).slice().sort(function (a, b) { return a.n - b.n; });
  var CLIPS = window.OET_CLIPS || {}, CLIP_BASE = "/oet-audio/";
  var KEY = "ngn-oet-progress-v1";
  var TARGET = { L: 350, R: 360, W: 350, S: 360 };
  var SUB = {
    L: { name: "Listening", time: "about 40 minutes", blurb: "Part A consultations, Part B workplace extracts, Part C talks and interviews. 42 questions." },
    R: { name: "Reading", time: "60 minutes", blurb: "Part A (15 minutes, 20 questions), then Parts B and C (45 minutes, 22 questions)." },
    W: { name: "Writing", time: "45 minutes", blurb: "5 minutes to read the case notes, then 40 minutes to write the letter." },
    S: { name: "Speaking", time: "about 20 minutes", blurb: "Two role-plays: 3 minutes to prepare and 5 minutes to speak for each." }
  };
  var PARTS = [
    { id: "LA", sub: "L", name: "Listening Part A", desc: "Consultations between a health professional and a patient. Complete the notes.", per: 12 },
    { id: "LB", sub: "L", name: "Listening Part B", desc: "Short workplace extracts: handovers, briefings and phone calls. One question each.", per: 1 },
    { id: "LC", sub: "L", name: "Listening Part C", desc: "Presentations and interviews on healthcare topics. Six questions each.", per: 6 },
    { id: "RA", sub: "R", name: "Reading Part A", desc: "Four short texts on one topic. 20 questions in 15 minutes.", per: 20 },
    { id: "RB", sub: "R", name: "Reading Part B", desc: "Short workplace texts: policies, emails, notices. One question each.", per: 1 },
    { id: "RC", sub: "R", name: "Reading Part C", desc: "Longer articles on healthcare topics. Eight questions each.", per: 8 },
    { id: "W", sub: "W", name: "Writing", desc: "Referral and discharge letters written from case notes.", per: 1 },
    { id: "S", sub: "S", name: "Speaking", desc: "Nurse role-plays with a patient or carer, with the patient's lines read aloud.", per: 1 }
  ];
  var LET = "ABCD";

  /* ---------- helpers ---------- */
  function h(tag, attrs) {
    var e = document.createElement(tag), k, v, i;
    for (k in attrs || {}) {
      v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { add(e, x); }); return; }
    e.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function mmss(s) { s = Math.max(0, Math.ceil(s)); return pad(Math.floor(s / 60)) + ":" + pad(s % 60); }
  function countWords(s) { return (s.trim().match(/\S+/g) || []).length; }
  function paras(text, cls) { return h("div", { class: cls || "" }, text.trim().split(/\n\s*\n/).map(function (p) { return h("p", { style: "margin:0 0 10px;white-space:pre-line" }, p.trim()); })); }
  function lines(text) { return text.trim().split(/\n/); }
  function track(name, data) { try { window.va && window.va("event", { name: name, data: data || {} }); } catch (e) {} }
  function tid(t) { return "t" + pad(t.n); }
  function norm(s) {
    return String(s || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9%/.' -]/g, " ").replace(/\.(?!\d)/g, " ")
      .replace(/\s+/g, " ").trim().replace(/^(a|an|the|his|her|their) /, "");
  }
  function match(given, ans) {
    var g = norm(given); if (!g) return false;
    return ans.split("|").some(function (a) { return norm(a) === g || norm(a).replace(/ /g, "") === g.replace(/ /g, ""); });
  }
  function scaled(raw, max) { // practice estimate on the 0–500 scale (about 30/42 = 350, grade B)
    var r = raw / max * 42, s = r <= 30 ? r / 30 * 350 : 350 + (r - 30) / 12 * 150;
    return Math.round(s / 10) * 10;
  }
  function grade(s) { return s >= 450 ? "A" : s >= 350 ? "B" : s >= 300 ? "C+" : s >= 200 ? "C" : s >= 100 ? "D" : "E"; }

  /* ---------- progress ---------- */
  var store = (function () { try { var r = JSON.parse(localStorage.getItem(KEY) || "null"); if (r && r.p) return r; } catch (e) {} return { p: {}, sets: {} }; })();
  store.sets = store.sets || {};
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} try { if (window.OET_SYNC) window.OET_SYNC(store); } catch (e) {} }
  function save(part, id, frac) {
    store.p[part] = store.p[part] || {};
    var f = Math.round(frac * 1000) / 1000;
    if (store.p[part][id] == null || f > store.p[part][id]) store.p[part][id] = f;
  }
  function saveSub(n, sub, s) { var k = "sub" + sub; store.p[k] = store.p[k] || {}; if (store.p[k][n] == null || s > store.p[k][n]) store.p[k][n] = s; }

  /* ---------- the item bank ---------- */
  var ITEMS = {}; PARTS.forEach(function (p) { ITEMS[p.id] = []; });
  TESTS.forEach(function (t) {
    var p = tid(t);
    (t.LA || []).forEach(function (x, i) { ITEMS.LA.push({ id: p + "a" + (i + 1), t: t, x: x, label: x.title.split("·")[0].replace("Patient:", "").trim() }); });
    (t.LB || []).forEach(function (x, i) { ITEMS.LB.push({ id: p + "b" + (i + 1), t: t, x: x, label: x.who.charAt(0).toUpperCase() + x.who.slice(1) }); });
    (t.LC || []).forEach(function (x, i) { ITEMS.LC.push({ id: p + "c" + (i + 1), t: t, x: x, label: x.who.charAt(0).toUpperCase() + x.who.slice(1) }); });
    if (t.RA) ITEMS.RA.push({ id: p + "ra", t: t, x: t.RA, label: t.RA.topic });
    (t.RB || []).forEach(function (x, i) { ITEMS.RB.push({ id: p + "rb" + (i + 1), t: t, x: x, label: x.src }); });
    (t.RC || []).forEach(function (x, i) { ITEMS.RC.push({ id: p + "rc" + (i + 1), t: t, x: x, label: x.t }); });
    [].concat(t.W || []).forEach(function (x, i) { ITEMS.W.push({ id: p + "w" + (i ? i + 1 : ""), t: t, x: x, label: x.title }); });
    (t.S || []).forEach(function (x, i) { ITEMS.S.push({ id: p + "s" + (i + 1), t: t, x: x, label: x.card[0].split(".")[0] }); });
  });
  function find(part, id) { return ITEMS[part].filter(function (i) { return i.id === id; })[0]; }
  function partStat(part) {
    var p = store.p[part] || {}, done = 0, sum = 0;
    ITEMS[part].forEach(function (it) { if (p[it.id] != null) { done++; sum += p[it.id]; } });
    return { done: done, total: ITEMS[part].length, avg: done ? sum / done : 0 };
  }
  var TOTALQ = PARTS.reduce(function (a, p) { return a + ITEMS[p.id].reduce(function (b, it) { return b + qCount(p.id, it.x); }, 0); }, 0);
  function qCount(part, x) { return part === "LA" ? x.ans.length : part === "LC" || part === "RC" ? x.qs.length : part === "RA" ? x.qs.length : 1; }

  /* ---------- page lifecycle ---------- */
  var cleanups = [];
  function onLeave(fn) { cleanups.push(fn); }
  function leave() { cleanups.splice(0).forEach(function (fn) { try { fn(); } catch (e) {} }); stopSound(); }
  function every(ms, fn) { var iv = setInterval(fn, ms); onLeave(function () { clearInterval(iv); }); return function () { clearInterval(iv); }; }

  /* ---------- sound: recorded clip, or the device's voice as a fallback ---------- */
  var aud = new Audio(); aud.preload = "auto";
  var synth = window.speechSynthesis, token = 0, voices = [];
  function loadVoices() { if (!synth) return; voices = synth.getVoices().filter(function (v) { return /^en[-_]/i.test(v.lang); }); }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
  function voiceFor(g, n) {
    if (!voices.length) return null;
    var f = voices.filter(function (v) { return /female|woman|samantha|karen|serena|moira|tessa|fiona|victoria|zira|libby|sonia|natasha|catherine/i.test(v.name); });
    var m = voices.filter(function (v) { return /male|daniel|alex|fred|oliver|george|ryan|william|lee|thomas|guy|david|mark/i.test(v.name) && !/female/i.test(v.name); });
    var pool = (g === "f" ? f : m).length ? (g === "f" ? f : m) : voices;
    return pool[n % pool.length];
  }
  function stopSound() { token++; try { aud.pause(); } catch (e) {} try { synth && synth.cancel(); } catch (e) {} }
  var unlocked = false;
  function unlock() { if (unlocked) return; unlocked = true; try { aud.muted = true; aud.src = CLIP_BASE + "silence.mp3"; var p = aud.play(); if (p && p.then) p.then(function () { aud.pause(); aud.muted = false; }).catch(function () { aud.muted = false; }); } catch (e) { aud.muted = false; } }
  ["pointerdown", "keydown"].forEach(function (ev) { addEventListener(ev, unlock, { capture: true, passive: true }); });
  function segs(x) { return lines(x.s).map(function (l) { var k = l.charAt(0); return { k: k, g: (x.cast[k] || ["f"])[0], t: l.slice(2).trim() }; }); }
  function clip(id) { var c = CLIPS[id]; return c ? { url: CLIP_BASE + c[0] + ".mp3", secs: c[1] } : null; }
  function play(id, x, done, onTick) {
    stopSound(); var my = ++token, c = clip(id), finished = false;
    function end(ok) { if (finished || my !== token) return; finished = true; done && done(ok); }
    if (c) {
      aud.src = c.url; aud.currentTime = 0; aud.muted = false;
      aud.onended = function () { end(true); };
      aud.onerror = function () { if (my === token) tts(); };
      aud.ontimeupdate = function () { if (my === token && onTick && aud.duration) onTick(aud.currentTime / aud.duration); };
      var p = aud.play(); if (p && p.catch) p.catch(function () { if (my === token) tts(); });
      return;
    }
    tts();
    function tts() {
      if (!synth) { end(false); return; }
      var q = [], order = {}, n = 0, i = 0, total;
      segs(x).forEach(function (s) { if (order[s.k] == null) order[s.k] = n++; (s.t.match(/[^.!?]+[.!?]*/g) || [s.t]).forEach(function (pt) { if (pt.trim()) q.push({ s: s, t: pt.trim() }); }); });
      total = q.length;
      (function next() {
        if (my !== token) return;
        if (i >= q.length) { end(true); return; }
        var it = q[i++], u = new SpeechSynthesisUtterance(it.t), v = voiceFor(it.s.g, order[it.s.k]);
        if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
        u.rate = 0.98; u.onend = function () { onTick && onTick(i / total); setTimeout(next, 120); }; u.onerror = function () { setTimeout(next, 50); };
        synth.speak(u);
      })();
    }
  }
  function say(text, g, done) { // patient lines in Speaking
    stopSound(); if (!synth) { done && done(); return; }
    var u = new SpeechSynthesisUtterance(text), v = voiceFor(g || "f", 0); if (v) { u.voice = v; u.lang = v.lang; } u.rate = 0.97;
    u.onend = function () { done && done(); }; synth.speak(u);
  }

  /* ---------- exam frame ---------- */
  function frame(title, sub) {
    leave(); document.body.classList.add("exam"); window.scrollTo(0, 0);
    var tl = h("span"), tq = h("span"), body = h("div", { class: "xbody" }), next = h("button", { class: "xbtn", type: "button" }, "Next"),
      quit = h("button", { class: "xbtn alt", type: "button", onclick: function () { if (confirm("Leave this test? Your answers on this attempt will not be saved.")) { leave(); location.hash = back; } } }, "Exit");
    var back = location.hash.replace(/^#\/(run|do)\/.*$/, "") ;
    app.textContent = "";
    app.appendChild(h("div", { class: "x" },
      h("div", { class: "xtop" }, h("div", { class: "xt1" }, h("span", { class: "xbrand" }, "OET "), title, h("small", null, sub || "")), h("div", { class: "xt2" }, tl, tq)),
      body, h("div", { class: "xbot" }, quit, next)));
    var stopT = null;
    return {
      body: body, next: next, quit: quit,
      setQ: function (t) { tq.textContent = t; },
      timer: function (sec, label, onEnd) {
        if (stopT) stopT(); var t0 = Date.now();
        function tick() { var left = sec - (Date.now() - t0) / 1000; tl.textContent = (label || "Time remaining") + " " + mmss(left); if (left <= 0) { stopT(); stopT = null; onEnd && onEnd(); } }
        stopT = every(250, tick); tick();
      },
      clearTimer: function () { if (stopT) stopT(); stopT = null; tl.textContent = ""; },
      setBack: function (b) { back = b; }
    };
  }
  function countdown(sec, tick, done) {
    var t0 = Date.now(), stop = every(200, function () { var left = sec - (Date.now() - t0) / 1000; tick(left, 1 - left / sec); if (left <= 0) { stop(); done(); } });
    tick(sec, 0); return stop;
  }

  /* ---------- listening screens ---------- */
  function intro(part, x) {
    return part === "LA" ? "You hear " + x.who + ". For questions in this extract, complete the notes with a word or short phrase."
      : part === "LB" ? "You hear " + x.who + ". Choose the answer which fits best according to what you hear."
      : "You hear " + x.who + ". For each question, choose the answer which fits best according to what you hear.";
  }
  function audioBox(id, x, readSec, opts) {
    opts = opts || {};
    var st = h("span", null, ""), bar = h("i", { style: "width:0%" });
    var box = h("div", { class: "xbox wide" }, h("div", { class: "xhead" }, "Audio"), h("div", { class: "xrow" }, st), h("div", { class: "xbar" }, bar));
    var started = false, ended = false, stopWait = null;
    function go() {
      if (started) return; started = true; if (stopWait) stopWait();
      st.textContent = "Playing… The recording is played once."; box.classList.add("rec");
      play(id, x, function () { ended = true; bar.style.width = "100%"; box.classList.remove("rec"); st.textContent = "Recording finished. Check your answers, then select Next."; opts.onEnd && opts.onEnd(); }, function (f) { bar.style.width = Math.min(100, f * 100) + "%"; });
    }
    var skip = h("button", { class: "xbtn2", type: "button", onclick: go }, "Start now");
    box.querySelector(".xrow").appendChild(skip);
    stopWait = countdown(readSec, function (left) { st.textContent = "Reading time: the recording starts in " + Math.ceil(left) + " s."; }, function () { skip.remove(); go(); });
    onLeave(function () { if (stopWait) stopWait(); });
    return { el: box, ended: function () { return ended; } };
  }
  function reviewAudio(id, x) {
    var c = clip(id);
    if (c) return h("audio", { controls: true, preload: "none", src: c.url });
    var b = h("button", { class: "xbtn2", type: "button", onclick: function () { if (b.textContent === "Stop") { stopSound(); b.textContent = "Play recording (device voice)"; } else { b.textContent = "Stop"; play(id, x, function () { b.textContent = "Play recording (device voice)"; }); } } }, "Play recording (device voice)");
    return b;
  }
  function transcript(x) {
    return h("details", { class: "xitem" }, h("summary", null, "Transcript"), h("div", { class: "model" }, segs(x).map(function (s) { return h("p", null, h("b", null, (x.cast[s.k] || [0, s.k])[1] + ": "), s.t); })));
  }
  // Part A: note completion
  function screenLA(it, qStart) {
    var x = it.x, inputs = [], n = qStart;
    var notes = h("div", { class: "xpass" }, h("div", { class: "xhead", style: "font-size:16px;margin-bottom:8px" }, x.title), lines(x.notes).map(function (l) {
      if (l.charAt(0) === "#") return h("div", { style: "font-weight:700;margin:12px 0 2px" }, l.slice(1));
      var parts = l.split("{}"), row = h("div", { class: "xfib", style: "margin:0;line-height:2.3" }, "• ");
      parts.forEach(function (p, i) {
        add(row, p);
        if (i < parts.length - 1) { var inp = h("input", { type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Question " + (n + 1), placeholder: String(++n) }); inputs.push(inp); add(row, inp); }
      });
      return row;
    }));
    return {
      head: intro("LA", x), read: 30, node: notes, n: inputs.length,
      collect: function () {
        var right = 0, rows = inputs.map(function (inp, i) {
          var ok = match(inp.value, x.ans[i]); if (ok) right++;
          return h("tr", null, h("td", null, String(qStart + i + 1)), h("td", null, inp.value || "–"), h("td", { class: ok ? "xmet" : "xmiss" }, ok ? "✓" : "✗"), h("td", null, x.ans[i].split("|")[0]));
        });
        return { right: right, max: inputs.length, review: h("table", { class: "xtable" }, h("tr", null, h("th", null, "Q"), h("th", null, "Your answer"), h("th", null, ""), h("th", null, "Answer")), rows) };
      }
    };
  }
  function order(n, seed) { // fixed, per-question option order, so answer positions are balanced
    var a = [], i, x = 2166136261;
    for (i = 0; i < seed.length; i++) { x ^= seed.charCodeAt(i); x = Math.imul(x, 16777619) >>> 0; }
    function rnd() { x = (x + 0x6D2B79F5) >>> 0; var t = Math.imul(x ^ (x >>> 15), 1 | x); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
    for (i = 0; i < n; i++) a.push(i);
    for (i = n - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function mcq(q, opts, qno, name) {
    var picked = null, ord = order(opts.length, name + q), labels = ord.map(function (oi, i) {
      var inp = h("input", { type: "radio", name: name, value: String(oi), onchange: function () { picked = oi; } });
      return h("label", { class: "xopt" }, inp, h("span", null, h("b", null, LET[i] + "  "), opts[oi]));
    });
    return {
      el: h("div", { style: "margin:0 0 18px" }, h("p", { class: "xq" }, qno + ". " + q), h("div", { class: "xopts" }, labels)),
      mark: function (a) { labels.forEach(function (l, i) { var oi = ord[i]; l.querySelector("input").disabled = true; if (oi === a) l.classList.add(picked === a ? "ok" : "miss"); else if (oi === picked) l.classList.add("bad"); }); return picked === a; },
      picked: function () { return picked; }
    };
  }
  function screenLB(it, qStart) {
    var x = it.x, m = mcq(x.q, x.o, qStart + 1, it.id);
    return {
      head: intro("LB", x), read: 15, node: m.el, n: 1,
      collect: function () { var ok = m.mark(x.a); return { right: ok ? 1 : 0, max: 1, review: h("div", null, m.el, x.why ? h("p", { class: "xnote" }, x.why) : null) }; }
    };
  }
  function screenMC(it, qStart, read, headText) {
    var x = it.x, ms = x.qs.map(function (q, i) { return mcq(q[0], q[1], qStart + i + 1, it.id + "q" + i); });
    return {
      head: headText, read: read, node: h("div", null, ms.map(function (m) { return m.el; })), n: ms.length,
      collect: function () {
        var right = 0; ms.forEach(function (m, i) { if (m.mark(x.qs[i][2])) right++; });
        return { right: right, max: ms.length, review: h("div", null, ms.map(function (m) { return m.el; })) };
      }
    };
  }
  function listenScreen(part, it, qStart) {
    return part === "LA" ? screenLA(it, qStart) : part === "LB" ? screenLB(it, qStart) : screenMC(it, qStart, 90, intro("LC", it.x));
  }

  /* ---------- reading screens ---------- */
  function screenRA(it) {
    var x = it.x, ans = [];
    var texts = h("div", null, x.texts.map(function (tx) {
      return h("div", { class: "xpass" }, h("div", { class: "xhead", style: "font-size:15.5px" }, tx.h + ": " + tx.t), h("div", { style: "white-space:pre-line" }, tx.b));
    }));
    var groups = [
      { k: "m", head: "Questions 1–7. For each question, decide which text (A, B, C or D) the information comes from." },
      { k: "s", head: "Questions 8–14. Answer each question with a word, short phrase or number from the texts." },
      { k: "g", head: "Questions 15–20. Complete each sentence with a word, short phrase or number from the texts." }
    ];
    var qn = 0, qs = h("div", null, groups.map(function (g) {
      return h("div", { style: "margin:0 0 18px" }, h("p", { class: "xinstr" }, g.head), x.qs.filter(function (q) { return q.k === g.k; }).map(function (q) {
        var i = qn++, inp;
        if (q.k === "m") inp = h("select", { "aria-label": "Question " + (i + 1) }, h("option", { value: "" }, "–"), ["A", "B", "C", "D"].map(function (l) { return h("option", { value: l }, l); }));
        else inp = h("input", { type: "text", autocomplete: "off", spellcheck: "false", "aria-label": "Question " + (i + 1) });
        ans.push({ q: q, inp: inp });
        if (q.k === "g") { var pp = q.q.split("{}"); return h("div", { class: "xfib", style: "margin:0;line-height:2.4" }, h("b", null, (i + 1) + ". "), pp[0], inp, pp[1] || ""); }
        return h("div", { class: "xfib", style: "margin:0;line-height:2.4" }, h("b", null, (i + 1) + ". "), q.q + " ", inp);
      }));
    }));
    return {
      node: h("div", { class: "xsplit two" }, texts, qs), n: ans.length,
      collect: function () {
        var right = 0, rows = ans.map(function (a, i) {
          var ok = a.q.k === "m" ? a.inp.value === a.q.a : match(a.inp.value, a.q.a); if (ok) right++;
          return h("tr", null, h("td", null, String(i + 1)), h("td", null, a.inp.value || "–"), h("td", { class: ok ? "xmet" : "xmiss" }, ok ? "✓" : "✗"), h("td", null, a.q.a.split("|")[0]));
        });
        return { right: right, max: ans.length, review: h("table", { class: "xtable" }, h("tr", null, h("th", null, "Q"), h("th", null, "Your answer"), h("th", null, ""), h("th", null, "Answer")), rows) };
      }
    };
  }
  function screenRB(it, qStart) {
    var x = it.x, m = mcq(x.q, x.o, qStart + 1, it.id);
    var node = h("div", null, h("div", { class: "xpass" }, h("div", { class: "xhead" }, x.src), h("div", null, x.b)), m.el);
    return { node: node, n: 1, collect: function () { var ok = m.mark(x.a); return { right: ok ? 1 : 0, max: 1, review: h("div", null, node, x.why ? h("p", { class: "xnote" }, x.why) : null) }; } };
  }
  function screenRC(it, qStart) {
    var x = it.x, ms = x.qs.map(function (q, i) { return mcq(q[0], q[1], qStart + i + 1, it.id + "q" + i); });
    var text = h("div", { class: "xpass" }, h("div", { class: "xhead", style: "font-size:17px;margin-bottom:8px" }, x.t), x.b.trim().split(/\n\s*\n/).map(function (p, i) { return h("p", { style: "margin:0 0 10px" }, h("sup", { style: "font-weight:700;color:#55626f;margin-right:4px" }, String(i + 1)), p); }));
    var node = h("div", { class: "xsplit two" }, text, h("div", null, ms.map(function (m) { return m.el; })));
    return { node: node, n: ms.length, collect: function () { var right = 0; ms.forEach(function (m, i) { if (m.mark(x.qs[i][2])) right++; }); return { right: right, max: ms.length, review: node }; } };
  }

  /* ---------- writing ---------- */
  var W_CHECKS = ["Purpose: the reason for writing is clear in the first paragraph", "Content: I included all the information the reader needs and left out what they don't", "Conciseness: the body is about 180–200 words, with no unnecessary detail", "Genre and style: the tone is professional and suits the reader", "Organisation: the information is grouped in logical paragraphs", "Layout: address, date, Re: line, greeting and sign-off are correct", "Language: my grammar, spelling and punctuation are accurate", "I wrote full sentences, not notes"];
  function runWriting(it, f, finish) {
    var x = it.x, ta = h("textarea", { class: "xta", disabled: true, spellcheck: "false", placeholder: "You can start writing when the reading time ends." }), wc = h("span", null, "Word count: 0");
    ta.addEventListener("input", function () { wc.textContent = "Word count: " + countWords(ta.value); });
    var phase = h("p", { class: "xinstr" }, "Reading time: 5 minutes. Read the case notes. You cannot write yet.");
    f.body.appendChild(h("div", null, phase, h("div", { class: "xsplit two" },
      h("div", null, h("div", { class: "xpass", style: "white-space:pre-line;font-size:15px" }, h("div", { class: "xhead" }, "Case notes"), x.notes), h("div", { class: "xbox wide" }, h("div", { class: "xhead" }, "Writing task"), x.task)),
      h("div", null, ta, h("div", { class: "xtools" }, wc)))));
    function write() {
      ta.disabled = false; ta.placeholder = "Write your letter here."; ta.focus();
      phase.textContent = "Writing time: 40 minutes. Write your letter in the box.";
      f.next.textContent = "Finish"; f.next.onclick = function () { if (countWords(ta.value) < 60 && !confirm("Your letter is very short. Finish anyway?")) return; done(); };
      f.timer(40 * 60, "Writing time", done);
    }
    function done() { f.clearTimer(); finish(ta.value); }
    f.next.textContent = "Start writing"; f.next.onclick = function () { f.timer(0, "", null); write(); };
    f.timer(5 * 60, "Reading time", write);
  }
  function writingReview(it, text, onScore) {
    var x = it.x, boxes = W_CHECKS.map(function (c) { return h("input", { type: "checkbox" }); });
    var out = h("p", { class: "xscore" }, "Tick each statement that is true of your letter.");
    function upd() { var n = boxes.filter(function (b) { return b.checked; }).length, s = Math.round(n / boxes.length * 500 / 10) * 10; out.textContent = "Self-assessment: " + n + " of " + boxes.length + " · estimate about " + s + " (" + grade(s) + ")"; onScore(n / boxes.length, s); }
    boxes.forEach(function (b) { b.addEventListener("change", upd); });
    return h("div", null,
      h("div", { class: "rv" }, h("div", { class: "rvl" }, "Your letter · " + countWords(text) + " words"), h("div", { class: "mine" }, text || "(nothing written)")),
      h("div", { class: "rv" }, h("div", { class: "rvl" }, "Sample answer"), h("div", { class: "mine" }, x.model)),
      h("div", { class: "rv" }, h("div", { class: "rvl" }, "Check your letter against the OET Writing criteria"), h("ul", { class: "xchecks" }, W_CHECKS.map(function (c, i) { return h("li", null, h("label", null, boxes[i], c)); }))), out);
  }

  /* ---------- speaking ---------- */
  var S_CHECKS = ["I introduced myself and my role, and checked the person's name", "I started by finding out what they already knew and what worried them", "I covered every point on my role-play card", "I explained things in plain language without jargon", "I checked they understood and invited questions", "I showed empathy and acknowledged their feelings", "I responded to their concerns or reluctance instead of ignoring it", "I spoke fluently, at a natural pace, with clear pronunciation", "I used accurate grammar and suitable vocabulary", "I closed the conversation with a summary or next steps"];
  var mic = null;
  function genderOf(role, text, id) {
    var F = /\b(mother|mum|daughter|wife|woman|girl|sister|she|her)\b/i, M = /\b(father|dad|son|husband|man|boy|brother|he|his|him)\b/i;
    var w = role.split(/[\s,]+/)[0]; if (F.test(w)) return "f"; if (M.test(w)) return "m";
    if (F.test(role) && !M.test(role)) return "f"; if (M.test(role) && !F.test(role)) return "m";
    var f = (text.match(new RegExp(F.source, "gi")) || []).length, m = (text.match(new RegExp(M.source, "gi")) || []).length;
    return f > m ? "f" : m > f ? "m" : (id.charCodeAt(id.length - 1) % 2 ? "f" : "m");
  }
  function canRec() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); }
  function runSpeaking(it, f, finish) {
    var x = it.x, card = h("div", { class: "xbox wide" }, h("div", { class: "xhead" }, "Role-play card · Setting: " + x.set + " · Your role: " + x.cand), h("ul", { class: "plain" }, x.card.map(function (c, i) { return h("li", { style: i ? "" : "list-style:none;margin-left:-20px;margin-bottom:6px" }, c); })));
    var phase = h("p", { class: "xinstr" }, "Preparation time: 3 minutes. Read the card and make notes. Your microphone will turn on when the role-play starts.");
    var notes = h("textarea", { class: "xta short", placeholder: "Your notes (optional)" });
    var stage = h("div");
    f.body.appendChild(h("div", null, phase, card, notes, stage));
    var rec = null, chunks = [], li = 0, recUrl = null;
    function start() {
      f.clearTimer(); phase.textContent = "Role-play: 5 minutes. Speak as the nurse. Select “Patient speaks” to hear the patient's next line.";
      var who = x.pat.role, line = h("p", { class: "xtext", style: "font-style:italic" }, "The patient is waiting for you to begin.");
      var g = genderOf(who, x.card[0], it.id);
      var btn = h("button", { class: "xbtn", type: "button", onclick: function () {
        if (li >= x.pat.lines.length) { line.textContent = "(The patient has no more prepared lines. Close the conversation.)"; return; }
        var t = x.pat.lines[li++]; line.textContent = "“" + t + "”"; say(t, g); btn.textContent = li >= x.pat.lines.length ? "No more lines" : "Patient speaks (" + (li + 1) + " of " + x.pat.lines.length + ")";
      } }, "Patient speaks (1 of " + x.pat.lines.length + ")");
      var st = h("span", null, mic ? "● Recording" : "Recording isn't available in this browser, but you can still practise aloud.");
      stage.appendChild(h("div", { class: "xbox wide rec" }, h("div", { class: "xhead" }, "The patient · " + who), line, h("div", { class: "xrow" }, btn, st)));
      if (mic) { try { rec = new MediaRecorder(mic); rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); }; rec.start(); } catch (e) { rec = null; } }
      f.next.textContent = "Finish role-play"; f.next.onclick = end;
      f.timer(5 * 60, "Role-play time", end);
    }
    function end() {
      f.clearTimer(); stopSound();
      var go = function () { if (mic) { mic.getTracks().forEach(function (t) { t.stop(); }); mic = null; } finish(recUrl); };
      if (rec && rec.state !== "inactive") { rec.onstop = function () { if (chunks.length) recUrl = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/webm" })); go(); }; try { rec.stop(); } catch (e) { go(); } } else go();
    }
    f.next.textContent = "Start role-play"; f.next.onclick = start;
    f.timer(3 * 60, "Preparation time", start);
    if (canRec() && !mic) navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) { mic = s; }).catch(function () { mic = null; });
    onLeave(function () { try { rec && rec.state !== "inactive" && rec.stop(); } catch (e) {} if (mic) { mic.getTracks().forEach(function (t) { t.stop(); }); mic = null; } });
  }
  function speakingReview(it, url, onScore) {
    var x = it.x, boxes = S_CHECKS.map(function () { return h("input", { type: "checkbox" }); });
    var out = h("p", { class: "xscore" }, "Listen to your recording, then tick each statement that is true.");
    function upd() { var n = boxes.filter(function (b) { return b.checked; }).length, s = Math.round(n / boxes.length * 500 / 10) * 10; out.textContent = "Self-assessment: " + n + " of " + boxes.length + " · estimate about " + s + " (" + grade(s) + ")"; onScore(n / boxes.length, s); }
    boxes.forEach(function (b) { b.addEventListener("change", upd); });
    return h("div", null,
      h("div", { class: "rv" }, h("div", { class: "rvl" }, "Your recording"), url ? h("audio", { controls: true, src: url }) : h("p", { class: "xnote" }, "No recording was made.")),
      h("div", { class: "rv" }, h("div", { class: "rvl" }, "The patient's card"), h("p", { class: "xnote" }, x.pat.role), h("ol", { class: "plain" }, x.pat.lines.map(function (l) { return h("li", null, l); }))),
      h("div", { class: "rv" }, h("div", { class: "rvl" }, "Check your role-play against the OET Speaking criteria"), h("ul", { class: "xchecks" }, S_CHECKS.map(function (c, i) { return h("li", null, h("label", null, boxes[i], c)); }))), out);
  }

  /* ---------- runners ---------- */
  // Listening: a list of {part, it}
  function runListening(seq, title, back, onDone) {
    var f = frame(title, "Listening"); f.setBack(back);
    var i = 0, q = 0, results = [], total = seq.reduce(function (a, s) { return a + qCount(s.part, s.it.x); }, 0);
    function show() {
      leaveScreen(); f.body.textContent = ""; window.scrollTo(0, 0);
      var s = seq[i], scr = listenScreen(s.part, s.it, q), partName = { LA: "Part A", LB: "Part B", LC: "Part C" }[s.part];
      f.setQ("Questions " + (q + 1) + (scr.n > 1 ? "–" + (q + scr.n) : "") + " of " + total);
      var ab = audioBox(s.it.id, s.it.x, scr.read);
      f.body.appendChild(h("div", null, h("p", { class: "xinstr" }, partName + ". " + scr.head), ab.el, scr.node));
      f.next.textContent = i === seq.length - 1 ? "Finish" : "Next";
      f.next.onclick = function () {
        if (!ab.ended() && !confirm("The recording hasn't finished. Move on anyway?")) return;
        stopSound(); var r = scr.collect(); r.s = s; results.push(r); q += scr.n; i++;
        if (i < seq.length) show(); else onDone(results, f);
      };
    }
    var leaveScreen = function () {};
    show();
  }
  function listenReview(results) {
    return results.map(function (r) {
      var it = r.s.it;
      return h("details", { class: "xitem", open: results.length === 1 }, h("summary", null, h("span", null, { LA: "Part A", LB: "Part B", LC: "Part C" }[r.s.part] + " · " + it.label), h("span", { class: "xtag" }, r.right + " / " + r.max)),
        h("div", { style: "margin:6px 0 10px" }, reviewAudio(it.id, it.x)), r.review, transcript(it.x));
    });
  }
  function resultsPage(f, head, score, max, est, sub, extra) {
    f.clearTimer(); f.setQ(""); f.body.textContent = ""; window.scrollTo(0, 0);
    f.next.textContent = "Done"; f.next.onclick = function () { leave(); location.hash = f.backTo || "#/"; };
    f.quit.textContent = "Close"; f.quit.onclick = f.next.onclick;
    f.body.appendChild(h("div", null, h("h2", { style: "font:700 24px/1.2 Arial,sans-serif;margin:0 0 12px" }, head),
      max ? h("p", { class: "xscore" }, score + " / " + max + " correct" + (est ? " · practice estimate about " + est + " (grade " + grade(est) + ")" + (TARGET[sub] ? (est >= TARGET[sub] ? " · meets the NMBA minimum of " + TARGET[sub] : " · NMBA minimum is " + TARGET[sub]) : "") : "")) : null,
      extra));
  }

  function startSub(t, sub) {
    var back = "#/test/" + t.n, title = "Practice Test " + t.n;
    track("oet_start", { test: t.n, sub: sub });
    if (sub === "L") {
      var seq = [];
      ITEMS.LA.concat(ITEMS.LB, ITEMS.LC).forEach(function (it) { if (it.t === t) seq.push({ part: it.id.charAt(3) === "a" ? "LA" : it.id.charAt(3) === "b" ? "LB" : "LC", it: it }); });
      runListening(seq, title, back, function (res, f) {
        f.backTo = back; var right = 0, max = 0;
        res.forEach(function (r) { right += r.right; max += r.max; save(r.s.part, r.s.it.id, r.right / r.max); });
        var est = scaled(right, max); saveSub(t.n, "L", est); persist();
        resultsPage(f, "Listening results", right, max, est, "L", listenReview(res));
      });
    } else if (sub === "R") {
      var f = frame(title, "Reading"); f.setBack(back); f.backTo = back;
      var a = screenRA(ITEMS.RA.filter(function (i) { return i.t === t; })[0]), results = [];
      f.setQ("Part A · 20 questions");
      f.body.appendChild(h("div", null, h("p", { class: "xinstr" }, "Part A. Look at the four texts, A–D, and answer the questions. You have 15 minutes."), a.node));
      var partA = function () { var r = a.collect(); r.label = "Part A · " + t.RA.topic; r.part = "RA"; r.id = tid(t) + "ra"; results.push(r); partBC(); };
      f.next.textContent = "Go to Part B"; f.next.onclick = function () { if (confirm("Go to Parts B and C? You can't return to Part A.")) partA(); };
      f.timer(15 * 60, "Part A", partA);
      function partBC() {
        var items = ITEMS.RB.filter(function (i) { return i.t === t; }).map(function (it) { return { part: "RB", it: it }; }).concat(ITEMS.RC.filter(function (i) { return i.t === t; }).map(function (it) { return { part: "RC", it: it }; }));
        var j = 0, q = 20, endAll = false;
        f.timer(45 * 60, "Parts B and C", function () { endAll = true; finishBC(); });
        function show() {
          f.body.textContent = ""; window.scrollTo(0, 0);
          var s = items[j], scr = s.part === "RB" ? screenRB(s.it, q) : screenRC(s.it, q);
          f.setQ((s.part === "RB" ? "Part B" : "Part C") + " · question " + (q + 1) + (scr.n > 1 ? "–" + (q + scr.n) : ""));
          f.body.appendChild(h("div", null, h("p", { class: "xinstr" }, s.part === "RB" ? "Part B. Read the text and choose the answer which fits best." : "Part C. Read the text and answer the questions. Choose the answer which fits best."), scr.node));
          f.next.textContent = j === items.length - 1 ? "Finish" : "Next";
          f.cur = function () { var r = scr.collect(); r.label = (s.part === "RB" ? "Part B · " : "Part C · ") + s.it.label; r.part = s.part; r.id = s.it.id; results.push(r); q += scr.n; j++; };
          f.next.onclick = function () { f.cur(); if (j < items.length) show(); else finishBC(); };
        }
        function finishBC() {
          if (endAll) { f.cur && f.cur(); while (j < items.length) { var s = items[j++]; var scr = s.part === "RB" ? screenRB(s.it, 0) : screenRC(s.it, 0); var r = scr.collect(); r.label = s.it.label; r.part = s.part; r.id = s.it.id; results.push(r); } }
          var right = 0, max = 0; results.forEach(function (r) { right += r.right; max += r.max; save(r.part, r.id, r.right / r.max); });
          var est = scaled(right, max); saveSub(t.n, "R", est); persist();
          resultsPage(f, "Reading results", right, max, est, "R", results.map(function (r) { return h("details", { class: "xitem" }, h("summary", null, h("span", null, r.label), h("span", { class: "xtag" }, r.right + " / " + r.max)), r.review); }));
        }
        show();
      }
    } else if (sub === "W") {
      var it = ITEMS.W.filter(function (i) { return i.t === t; })[0], fw = frame(title, "Writing"); fw.setBack(back); fw.backTo = back;
      runWriting(it, fw, function (text) {
        resultsPage(fw, "Writing: review your letter", 0, 0, 0, "W", writingReview(it, text, function (frac, s) { save("W", it.id, frac); saveSub(t.n, "W", s); persist(); }));
      });
    } else if (sub === "S") {
      var rps = ITEMS.S.filter(function (i) { return i.t === t; }), k = 0, urls = [], fs = frame(title, "Speaking"); fs.setBack(back); fs.backTo = back;
      (function one() {
        fs.body.textContent = ""; fs.setQ("Role-play " + (k + 1) + " of " + rps.length);
        runSpeaking(rps[k], fs, function (url) {
          urls.push(url); k++;
          if (k < rps.length) { fs.body.textContent = ""; fs.body.appendChild(h("div", { class: "xcenter" }, h("h2", null, "Role-play 1 complete"), h("p", null, "Take a breath. When you're ready, start the second role-play."))); fs.next.textContent = "Next role-play"; fs.next.onclick = one; fs.clearTimer(); return; }
          var sc = {};
          resultsPage(fs, "Speaking: review your role-plays", 0, 0, 0, "S", rps.map(function (it, i) {
            return h("details", { class: "xitem", open: true }, h("summary", null, "Role-play " + (i + 1) + " · " + it.label), speakingReview(it, urls[i], function (frac, s) { save("S", it.id, frac); sc[i] = s; var v = Object.keys(sc).map(function (z) { return sc[z]; }); saveSub(t.n, "S", Math.round(v.reduce(function (a, b) { return a + b; }, 0) / v.length / 10) * 10); persist(); }));
          }));
        });
      })();
    }
  }

  function startItem(part, it) {
    var back = "#/part/" + part, title = PARTS.filter(function (p) { return p.id === part; })[0].name;
    track("oet_item", { part: part, id: it.id });
    if (part.charAt(0) === "L") {
      runListening([{ part: part, it: it }], title, back, function (res, f) {
        f.backTo = back; var r = res[0]; save(part, it.id, r.right / r.max); persist();
        resultsPage(f, "Your answers", r.right, r.max, 0, "", listenReview(res));
      });
      return;
    }
    var f = frame(title, it.label); f.setBack(back); f.backTo = back;
    if (part === "W") { runWriting(it, f, function (text) { resultsPage(f, "Review your letter", 0, 0, 0, "W", writingReview(it, text, function (frac) { save("W", it.id, frac); persist(); })); }); return; }
    if (part === "S") { runSpeaking(it, f, function (url) { resultsPage(f, "Review your role-play", 0, 0, 0, "S", speakingReview(it, url, function (frac) { save("S", it.id, frac); persist(); })); }); return; }
    var scr = part === "RA" ? screenRA(it) : part === "RB" ? screenRB(it, 0) : screenRC(it, 0);
    f.body.appendChild(h("div", null, h("p", { class: "xinstr" }, part === "RA" ? "Look at the four texts, A–D, and answer the questions. You have 15 minutes." : part === "RB" ? "Read the text and choose the answer which fits best." : "Read the text and answer the questions. Choose the answer which fits best."), scr.node));
    var fin = function () { var r = scr.collect(); save(part, it.id, r.right / r.max); persist(); resultsPage(f, "Your answers", r.right, r.max, 0, "", r.review); };
    if (part === "RA") f.timer(15 * 60, "Time remaining", fin); else if (part === "RC") f.timer(22 * 60, "Suggested time", fin);
    f.next.textContent = "Check answers"; f.next.onclick = fin;
  }

  /* ---------- normal pages ---------- */
  function page(nodes) { leave(); document.body.classList.remove("exam"); app.textContent = ""; add(app, nodes); window.scrollTo(0, 0); }
  function bar(f) { return h("div", { class: "bar" }, h("i", { style: "width:" + Math.round(f * 100) + "%" })); }
  function dashboard() {
    var allDone = 0, all = 0; PARTS.forEach(function (p) { var s = partStat(p.id); allDone += s.done; all += s.total; });
    page([
      h("section", { class: "hero" }, h("div", { class: "wrap" },
        h("div", { class: "eyebrow" }, "OET Nursing · member practice"),
        h("h1", null, TESTS.length + " full practice tests, ", h("em", null, "in test conditions.")),
        h("p", null, TOTALQ.toLocaleString() + " questions across Listening, Reading, Writing and Speaking. Listening uses recorded dialogues between nurses, doctors, physiotherapists and patients."),
        h("div", { class: "targets", style: "grid-template-columns:repeat(4,minmax(0,1fr));max-width:520px" }, ["L", "R", "W", "S"].map(function (k) { return h("div", null, h("b", null, String(TARGET[k])), h("span", null, SUB[k].name)); })),
        h("p", { class: "note" }, "NMBA minimum OET scores for tests on or after 23 April 2026. Check ", h("a", { href: "https://www.ahpra.gov.au/Registration/Registration-Standards/English-language-skills/Accepted-English-language-tests.aspx", target: "_blank", rel: "noopener" }, "Ahpra"), " before you book."))),
      h("div", { class: "wrap main" },
        h("div", { class: "overall" }, h("b", null, "Your progress"), bar(all ? allDone / all : 0), h("span", { class: "muted small" }, allDone + " of " + all + " tasks done"), window.OET_SIGNOUT ? h("button", { class: "btn btn-line btn-sm", type: "button", onclick: function () { window.OET_SIGNOUT(); } }, "Sign out") : null),
        h("section", { class: "skill" }, h("h2", null, "Full practice tests", h("span", null, "Each test has all four sub-tests, timed like the real exam.")),
          h("div", { class: "cards" }, TESTS.map(function (t) {
            var done = ["L", "R", "W", "S"].filter(function (k) { return (store.p["sub" + k] || {})[t.n] != null; }).length;
            return h("a", { class: "card", href: "#/test/" + t.n }, h("h3", null, "Practice Test " + t.n), h("div", { class: "cm" }, t.RA ? "Reading: " + t.RA.topic : ""), h("div", { class: "cp" }, bar(done / 4), done + "/4"));
          }))),
        h("section", { class: "skill" }, h("h2", null, "Practise one part at a time", h("span", null, "Pick any task. Marked instantly, with transcripts and sample answers.")),
          h("div", { class: "cards" }, PARTS.map(function (p) {
            var s = partStat(p.id);
            return h("a", { class: "card", href: "#/part/" + p.id }, h("h3", null, p.name), h("div", { class: "cm" }, p.desc), h("div", { class: "cp" }, bar(s.total ? s.done / s.total : 0), s.done + "/" + s.total + (s.done ? " · avg " + Math.round(s.avg * 100) + "%" : "")));
          }))),
        h("div", { class: "promo" }, h("div", null, h("b", null, "OET Nursing Review and Test-Taking Strategies (PDF)"), h("span", { class: "muted small" }, "Format, scores and strategies for all four sub-tests, a referral letter template and role-play phrases. Included with the app.")), h("a", { class: "btn btn-line", href: "/g/2vgwXzXoHqM85EZaxcgo/NextGen-Nurses-OET-Nursing-Review-and-Strategies.pdf", target: "_blank", rel: "noopener", download: true }, "Download the PDF")),
        h("div", { class: "promo" }, h("div", null, h("b", null, "Need help with your OET?"), h("span", { class: "muted small" }, "Message us on WhatsApp for support with the app or your study plan.")), h("a", { class: "btn btn-line", href: "https://wa.me/61458567621", target: "_blank", rel: "noopener" }, "WhatsApp support")))
    ]);
  }
  function testPage(n) {
    var t = TESTS.filter(function (x) { return x.n === n; })[0]; if (!t) { location.hash = "#/"; return; }
    page(h("div", { class: "wrap" }, h("div", { class: "thead" }, h("a", { class: "crumb", href: "#/" }, "← All tests"), h("h1", null, "Practice Test " + n),
      h("p", { class: "muted" }, "Take the sub-tests in any order. Use headphones for Listening and a quiet room with a microphone for Speaking.")),
      h("div", { class: "cards", style: "margin:20px 0 60px" }, ["L", "R", "W", "S"].map(function (k) {
        var best = (store.p["sub" + k] || {})[n];
        return h("div", { class: "card" }, h("h3", null, SUB[k].name), h("div", { class: "cm" }, SUB[k].blurb), h("div", { class: "cm" }, "Time: " + SUB[k].time),
          best != null ? h("div", { class: "cp" }, "Best: about " + best + " (" + grade(best) + ")") : null,
          h("button", { class: "btn btn-amber btn-sm", type: "button", onclick: function () { location.hash = "#/run/" + n + "/" + k; } }, best != null ? "Try again" : "Start"));
      }))));
  }
  function partPage(pid) {
    var p = PARTS.filter(function (x) { return x.id === pid; })[0]; if (!p) { location.hash = "#/"; return; }
    var done = store.p[pid] || {};
    page(h("div", { class: "wrap" }, h("div", { class: "thead" }, h("a", { class: "crumb", href: "#/" }, "← Home"), h("h1", null, p.name), h("p", { class: "muted" }, p.desc)),
      h("div", { class: "cards", style: "margin:20px 0 60px" }, ITEMS[pid].map(function (it, i) {
        var sc = done[it.id];
        return h("a", { class: "card", href: "#/do/" + pid + "/" + it.id }, h("div", { class: "qno", style: "font:700 11.5px/1.2 var(--f-mono);color:var(--amber-text)" }, "Test " + it.t.n + " · #" + (i + 1)), h("h3", { style: "font-size:16px" }, it.label), h("div", { class: "cp" }, sc != null ? "Best " + Math.round(sc * 100) + "%" : "Not tried"));
      }))));
  }
  function route() {
    var r = location.hash.replace(/^#\/?/, "").split("/");
    if (r[0] === "test") testPage(parseInt(r[1], 10));
    else if (r[0] === "part") partPage(r[1]);
    else if (r[0] === "run") { var t = TESTS.filter(function (x) { return x.n === parseInt(r[1], 10); })[0]; if (t && SUB[r[2]]) startSub(t, r[2]); else location.hash = "#/"; }
    else if (r[0] === "do") { var it = ITEMS[r[1]] && find(r[1], r[2]); if (it) startItem(r[1], it); else location.hash = "#/"; }
    else dashboard();
  }
  addEventListener("hashchange", route);
  route();
})();
