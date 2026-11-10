/* NextGen Nurses · PTE Academic practice app. Static, no backend: progress is kept in this browser. */
(function () {
  "use strict";
  var D = window.PTE_DATA, app = document.getElementById("app");
  var TASKS = {}; D.tasks.forEach(function (t) { TASKS[t.id] = t; });
  var LETTERS = "ABCDEFGH";

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
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function words(s) { return (s.toLowerCase().replace(/[’']/g, "'").match(/[a-z0-9]+(?:'[a-z]+)?/g) || []); }
  function countWords(s) { return (s.trim().match(/\S+/g) || []).length; }
  function mmss(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function pct(x) { return Math.round(x * 100) + "%"; }
  function track(name, data) { try { window.va && window.va("event", { name: name, data: data || {} }); } catch (e) {} }

  /* ---------- progress (this browser only) ---------- */
  var KEY = "ngn-pte-progress-v1", P = {};
  try { P = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { P = {}; }
  function save(taskId, idx, score) {
    P[taskId] = P[taskId] || {};
    P[taskId][idx] = Math.max(0, Math.min(1, score));
    try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {}
    track("PTE item done", { task: taskId });
    var pill = document.querySelector('.pill[data-i="' + idx + '"]'); if (pill) pill.classList.add("done");
  }
  function stat(task) {
    var p = P[task.id] || {}, done = 0, sum = 0;
    task.items.forEach(function (_, i) { if (p[i] != null) { done++; sum += p[i]; } });
    return { done: done, total: task.items.length, avg: done ? sum / done : 0 };
  }

  /* ---------- lifecycle: stop timers, audio and microphone when the view changes ---------- */
  var cleanups = [];
  function onLeave(fn) { cleanups.push(fn); }
  function leave() { cleanups.splice(0).forEach(function (fn) { try { fn(); } catch (e) {} }); stopSpeak(); }

  function countdown(sec, tick, done) {
    var end = Date.now() + sec * 1000, stopped = false;
    function step() {
      if (stopped) return;
      var left = (end - Date.now()) / 1000;
      if (left <= 0) { stopped = true; clearInterval(iv); tick(0, 1); done(); return; }
      tick(left, 1 - left / sec);
    }
    var iv = setInterval(step, 200); step();
    var stop = function () { stopped = true; clearInterval(iv); };
    onLeave(stop);
    return stop;
  }

  /* ---------- audio: device text-to-speech ---------- */
  var synth = window.speechSynthesis, voices = [], rate = 1, speakToken = 0;
  function loadVoices() {
    if (!synth) return;
    var all = synth.getVoices().filter(function (v) { return /^en[-_]/i.test(v.lang); });
    var rank = function (v) { return (/en[-_]AU/i.test(v.lang) ? 0 : /en[-_]GB/i.test(v.lang) ? 1 : 2) + (v.localService ? 0 : 0.5); };
    voices = all.sort(function (a, b) { return rank(a) - rank(b); });
  }
  if (synth) { loadVoices(); if (synth.addEventListener) synth.addEventListener("voiceschanged", loadVoices); }
  function stopSpeak() { speakToken++; if (synth) try { synth.cancel(); } catch (e) {} }
  function segs(audio) { return typeof audio === "string" ? [{ v: 0, t: audio }] : audio; }
  function transcript(audio) {
    var s = segs(audio);
    if (s.length === 1) return h("p", { class: "model" }, s[0].t);
    return h("div", { class: "model" }, s.map(function (x) { return h("p", null, h("b", null, "Speaker " + (x.v + 1) + ": "), x.t); }));
  }
  function speak(audio, done) {
    stopSpeak();
    if (!synth || !window.SpeechSynthesisUtterance) { done(false); return; }
    var my = ++speakToken, queue = [], finished = false;
    segs(audio).forEach(function (s) {
      // Short chunks avoid the long-utterance cut-off in some browsers.
      (s.t.match(/[^.!?]+[.!?]*/g) || [s.t]).forEach(function (part) { if (part.trim()) queue.push({ v: s.v, t: part.trim() }); });
    });
    var pitches = [1, 0.8, 1.25], guard;
    function end(ok) { if (finished) return; finished = true; clearTimeout(guard); if (my === speakToken) done(ok); }
    function next() {
      if (my !== speakToken) return;
      if (!queue.length) { end(true); return; }
      var q = queue.shift(), u = new SpeechSynthesisUtterance(q.t);
      var voice = voices.length ? voices[q.v % voices.length] : null;
      if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = "en-AU";
      u.rate = rate; u.pitch = voices.length > 2 ? 1 : pitches[q.v % 3];
      u.onend = next;
      u.onerror = function () { if (my === speakToken) end(false); };
      clearTimeout(guard);
      guard = setTimeout(function () { if (my === speakToken) { try { synth.cancel(); } catch (e) {} end(false); } }, 4000 + q.t.length * 220);
      synth.speak(u);
    }
    next();
  }
  var actx;
  function beep() {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var o = actx.createOscillator(), g = actx.createGain();
      o.frequency.value = 880; g.gain.value = 0.12; o.connect(g); g.connect(actx.destination);
      o.start(); o.stop(actx.currentTime + 0.35);
    } catch (e) {}
  }

  // Audio bar for listening tasks. Practice allows replays; the real test plays once.
  function audioBar(item, opts) {
    opts = opts || {};
    var st = h("span", { class: "st" }, synth ? "Ready. The real test plays the audio once." : "This browser cannot play the audio. Use the transcript.");
    var plays = 0;
    var btn = h("button", { class: "btn btn-ink btn-sm", type: "button", onclick: play }, "▶ Play audio");
    var speed = h("select", { "aria-label": "Audio speed", onchange: function () { rate = parseFloat(speed.value); } },
      h("option", { value: "0.85" }, "Slower"), h("option", { value: "1", selected: true }, "Normal speed"), h("option", { value: "1.12" }, "Faster"));
    speed.value = String(rate === 1 ? 1 : rate);
    var showT = h("button", { class: "btn btn-line btn-sm", type: "button", onclick: function () { tr.hidden = !tr.hidden; } }, "Transcript");
    var tr = h("div", { class: "passage", hidden: true }, transcript(item.audio), item.beep ? h("p", { class: "small muted" }, "[beep]") : null);
    function play() {
      if (!synth) { tr.hidden = false; return; }
      plays++; btn.disabled = true; st.textContent = "Playing…";
      speak(item.audio, function (ok) {
        btn.disabled = false; btn.textContent = "↻ Play again";
        if (ok && item.beep) beep();
        st.textContent = ok ? "Played " + plays + (plays === 1 ? " time." : " times.") + " In the real test you hear it once." : "Audio did not play on this device. Use the transcript.";
        if (!ok) { showT.hidden = false; tr.hidden = false; }
        if (opts.onend) opts.onend(ok);
      });
    }
    showT.hidden = !!synth;
    var bar = h("div", { class: "audio" }, btn, st, speed, showT);
    return { el: h("div", { style: "display:grid;gap:10px" }, bar, tr), reveal: function () { showT.hidden = false; }, stop: stopSpeak };
  }

  /* ---------- simple charts for Describe Image ---------- */
  function chart(c) {
    var W = 520, H = 320, L = 52, R = 16, T = 44, B = 46, pw = W - L - R, ph = H - T - B, n = c.values.length;
    var cols = ["var(--amber)", "var(--teal)", "#7C6BD6", "#E06B52", "#5B8DB8"];
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + c.title + '" font-family="Figtree,system-ui,sans-serif" fill="currentColor">';
    s += '<text x="' + W / 2 + '" y="24" text-anchor="middle" font-size="16" font-weight="700">' + c.title + "</text>";
    if (c.type === "pie") {
      var cx = 150, cy = 180, r = 105, tot = c.values.reduce(function (a, b) { return a + b; }, 0), a0 = -Math.PI / 2;
      c.values.forEach(function (v, i) {
        var a1 = a0 + (v / tot) * Math.PI * 2, big = a1 - a0 > Math.PI ? 1 : 0;
        s += '<path d="M' + cx + " " + cy + " L" + (cx + r * Math.cos(a0)).toFixed(1) + " " + (cy + r * Math.sin(a0)).toFixed(1) + " A" + r + " " + r + " 0 " + big + " 1 " + (cx + r * Math.cos(a1)).toFixed(1) + " " + (cy + r * Math.sin(a1)).toFixed(1) + ' Z" fill="' + cols[i % 5] + '" stroke="var(--paper)" stroke-width="2"/>';
        var y = 92 + i * 38;
        s += '<rect x="300" y="' + (y - 13) + '" width="16" height="16" rx="4" fill="' + cols[i % 5] + '"/><text x="326" y="' + y + '" font-size="15">' + c.labels[i] + '</text><text x="' + (W - R) + '" y="' + y + '" font-size="15" font-weight="700" text-anchor="end">' + v + c.unit + "</text>";
        a0 = a1;
      });
      return s + "</svg>";
    }
    var max = Math.max.apply(null, c.values), step = Math.pow(10, Math.floor(Math.log(max) / Math.LN10)), g;
    if (max / step < 2.5) step /= 4; else if (max / step < 5) step /= 2;
    var top = Math.ceil(max / step) * step;
    for (g = 0; g <= top + 1e-9; g += step) {
      var gy = T + ph - (g / top) * ph;
      s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + gy + '" y2="' + gy + '" stroke="var(--line)"/><text x="' + (L - 8) + '" y="' + (gy + 4) + '" font-size="12" text-anchor="end" opacity=".75">' + (Math.round(g * 100) / 100) + "</text>";
    }
    s += '<text x="14" y="' + (T + ph / 2) + '" font-size="12" opacity=".75" text-anchor="middle" transform="rotate(-90 14 ' + (T + ph / 2) + ')">' + c.unit + "</text>";
    var pts = [];
    c.values.forEach(function (v, i) {
      var x = L + (pw / n) * (i + 0.5), y = T + ph - (v / top) * ph;
      pts.push(x.toFixed(1) + "," + y.toFixed(1));
      if (c.type === "bar") { var bw = Math.min(54, (pw / n) * 0.6); s += '<rect x="' + (x - bw / 2) + '" y="' + y + '" width="' + bw + '" height="' + (T + ph - y) + '" rx="5" fill="var(--amber)"/>'; }
      s += '<text x="' + x + '" y="' + (y - 8) + '" font-size="13" font-weight="700" text-anchor="middle">' + v + '</text><text x="' + x + '" y="' + (H - 20) + '" font-size="13" text-anchor="middle">' + c.labels[i] + "</text>";
    });
    if (c.type === "line") {
      s += '<polyline points="' + pts.join(" ") + '" fill="none" stroke="var(--amber)" stroke-width="3.5" stroke-linejoin="round"/>';
      pts.forEach(function (p) { var xy = p.split(","); s += '<circle cx="' + xy[0] + '" cy="' + xy[1] + '" r="5" fill="var(--amber)" stroke="var(--surface)" stroke-width="2"/>'; });
    }
    return s + "</svg>";
  }

  /* ---------- shared pieces ---------- */
  function checklist(lines) {
    var boxes = [];
    var ul = h("ul", { class: "checks" }, lines.map(function (t) {
      var cb = h("input", { type: "checkbox" }); boxes.push(cb);
      return h("li", null, h("label", null, cb, h("span", null, t)));
    }));
    return { el: ul, score: function () { return boxes.filter(function (b) { return b.checked; }).length / (boxes.length || 1); } };
  }
  function feedback(score, title, kids) {
    return h("div", { class: "fb " + (score >= 0.75 ? "good" : score < 0.4 ? "low" : ""), tabindex: "-1" }, h("h3", null, title), kids);
  }
  function navRow(task, idx, retry) {
    var last = idx >= task.items.length - 1;
    return h("div", { class: "row" },
      h("button", { class: "btn btn-line wide", type: "button", onclick: retry }, "Try again"),
      last ? h("a", { class: "btn btn-amber wide", href: "#/" }, "Back to all tasks")
        : h("a", { class: "btn btn-amber wide", href: "#/t/" + task.id + "/" + (idx + 1) }, "Next question →"));
  }
  function focusOn(el) { try { el.focus({ preventScroll: true }); el.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {} }

  /* ---------- SPEAKING ---------- */
  function runSpeak(task, item, idx, box, redo) {
    var stream = null, rec = null, chunks = [], url = null;
    onLeave(function () { try { rec && rec.state !== "inactive" && rec.stop(); } catch (e) {} if (stream) stream.getTracks().forEach(function (t) { t.stop(); }); });
    var body = h("div", { style: "display:grid;gap:18px" });
    box.appendChild(body);
    function set() { body.textContent = ""; for (var i = 0; i < arguments.length; i++) add(body, arguments[i]); }
    function promptEls(visible) {
      var out = [];
      if (item.show && visible) out.push(h("p", { class: "prompt" }, item.show));
      if (item.image && visible) out.push(h("div", { class: "fig", html: chart(item.image) }));
      return out;
    }
    function clock(label, recording) {
      var t = h("span", { class: "t" }, ""), bar = h("i", { style: "width:0%" });
      var el = h("div", { class: "clock" + (recording ? " rec" : "") }, t, h("div", { style: "flex:1;display:grid;gap:6px" }, h("span", { class: "lab" }, recording ? h("span", { class: "dot" }) : null, label), h("div", { class: "bar" }, bar)));
      return { el: el, tick: function (left, frac) { t.textContent = mmss(left); bar.style.width = frac * 100 + "%"; } };
    }

    function idle() {
      var showFirst = task.id === "rts"; // the situation is on screen from the start
      var steps = (item.audio ? "listen, " : "") + (item.prep ? "prepare for " + item.prep + " seconds, " : "") + "then speak for up to " + item.answer + " seconds";
      set(promptEls(showFirst),
        h("p", { class: "muted" }, "When you start, you will " + steps + ". Allow the microphone if you want to hear your answer played back."),
        h("div", { class: "row" }, h("button", { class: "btn btn-amber wide", type: "button", onclick: begin }, "Start")));
    }
    function begin() {
      var started = false;
      var go = function () { if (started) return; started = true; item.audio ? listen() : prep(); };
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) {
        set(promptEls(task.id === "rts"), h("p", { class: "muted" }, "Waiting for microphone permission…"),
          h("div", { class: "row" }, h("button", { class: "btn btn-line btn-sm", type: "button", onclick: go }, "Continue without the microphone")));
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
          if (started) { s.getTracks().forEach(function (t) { t.stop(); }); return; }
          stream = s; go();
        }, function () { stream = null; go(); });
      } else go();
    }
    function listen() {
      var skip = h("button", { class: "btn btn-line btn-sm", type: "button", onclick: function () { stopSpeak(); prep(); } }, "Skip audio");
      var st = h("span", { class: "st" }, "Playing… listen carefully.");
      set(promptEls(task.id === "rts"), h("div", { class: "audio" }, st, skip));
      speak(item.audio, function (ok) {
        if (ok) { prep(); return; }
        st.textContent = "Audio did not play on this device. Read the text, then continue.";
        skip.textContent = "Continue";
        body.insertBefore(h("div", { class: "passage" }, transcript(item.audio)), body.firstChild);
      });
    }
    function prep() {
      if (!item.prep) { record(); return; }
      var c = clock("Prepare");
      set(promptEls(true), c.el, h("div", { class: "row" }, h("button", { class: "btn btn-line btn-sm", type: "button", onclick: function () { stop(); record(); } }, "Start speaking now")));
      var stop = countdown(item.prep, c.tick, record);
    }
    function record() {
      beep();
      var c = clock(stream ? "Recording" : "Speak now", true);
      chunks = [];
      if (stream) {
        try {
          rec = new MediaRecorder(stream);
          rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          rec.start();
        } catch (e) { rec = null; }
      }
      var stop = countdown(item.answer, c.tick, finish);
      set(promptEls(true), c.el, h("div", { class: "row" }, h("button", { class: "btn btn-ink wide", type: "button", onclick: function () { stop(); finish(); } }, "I've finished")));
    }
    function finish() {
      if (rec && rec.state !== "inactive") {
        rec.onstop = function () {
          if (chunks.length) url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/webm" }));
          release(); review();
        };
        try { rec.stop(); } catch (e) { release(); review(); }
      } else { release(); review(); }
    }
    function release() { if (stream) { stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; } }
    function review() {
      var lines = (item.points || []).concat(task.criteria || []);
      var cl = checklist(lines), result = h("div");
      var answerText = item.model || (item.reveal ? item.audio : item.show);
      set(
        promptEls(true),
        url ? h("div", null, h("div", { class: "qno" }, "Your recording"), h("audio", { controls: true, src: url }))
          : h("p", { class: "muted small" }, "No recording was saved because the microphone was not available. You can still mark yourself below."),
        item.audio && task.id !== "rs" && task.id !== "asq" ? h("details", { class: "tips" }, h("summary", null, "Transcript of the audio"), h("div", { style: "margin-top:10px" }, transcript(item.audio))) : null,
        task.id === "rs" || task.id === "asq" ? h("div", null, h("div", { class: "qno" }, task.id === "asq" ? "Question" : "The sentence"), h("p", { class: "model" }, item.audio)) : null,
        item.model ? h("div", null, h("div", { class: "qno" }, task.id === "asq" ? "Correct answer" : "Model answer"), h("p", { class: "model" }, answerText)) : null,
        h("div", { class: "fb" }, h("div", { class: "lbl" }, "Mark yourself: tick what you did"), cl.el,
          h("div", { class: "row" }, h("button", { class: "btn btn-amber wide", type: "button", onclick: function () {
            var s = cl.score(); save(task.id, idx, s);
            result.textContent = "";
            result.appendChild(feedback(s, "Saved: " + pct(s), [h("p", null, s >= 0.75 ? "Strong attempt. Move on, or repeat it once more for fluency." : "Listen to your recording against the model, then try this one again."), navRow(task, idx, redo)]));
            focusOn(result.firstChild);
          } }, "Save my mark"))),
        result
      );
    }
    idle();
  }

  /* ---------- WRITING (and Summarize Spoken Text) ---------- */
  function runWrite(task, item, idx, box, redo) {
    var ta = h("textarea", { placeholder: "Type your answer here…", spellcheck: "false", autocomplete: "off", autocapitalize: "sentences", "aria-label": "Your answer" });
    var wc = h("span", { class: "wc" }, "0 words"), tEl = h("span", { class: "t" }, mmss(item.minutes * 60)), bar = h("i", { style: "width:0%" });
    var out = h("div"), submitted = false, stopClock = null, ab = null;
    function upd() {
      var n = countWords(ta.value), ok = n >= item.min && n <= item.max;
      wc.textContent = n + (n === 1 ? " word" : " words") + " · target " + item.min + "–" + item.max;
      wc.className = "wc " + (n === 0 ? "" : ok ? "ok" : "bad");
    }
    ta.addEventListener("input", function () { upd(); start(); });
    function start() {
      if (stopClock || submitted) return;
      stopClock = countdown(item.minutes * 60, function (left, frac) { tEl.textContent = mmss(left); bar.style.width = frac * 100 + "%"; }, function () { if (!submitted) submit(true); });
    }
    function submit(timeUp) {
      if (submitted) return; submitted = true;
      if (stopClock) stopClock(); if (ab) { ab.stop(); ab.reveal(); }
      ta.readOnly = true; btn.disabled = true;
      var text = ta.value.trim(), n = countWords(text), form = [];
      var inRange = n >= item.min && n <= item.max;
      form.push((inRange ? "✓ " : "✗ ") + n + " words (required " + item.min + "–" + item.max + ")");
      var oneOk = true;
      if (item.oneSentence) {
        var stops = (text.replace(/\b(?:e\.g|i\.e|etc|Dr|Mr|Mrs|Ms)\./gi, "").match(/[.!?]+(?=\s|$)/g) || []).length;
        oneOk = stops === 1 && /[.!?]$/.test(text) && /^[A-Z]/.test(text);
        form.push((oneOk ? "✓ " : "✗ ") + "One sentence, starting with a capital letter and ending with one full stop");
      }
      var formOk = inRange && oneOk && n > 0;
      var cl = checklist(item.points), result = h("div");
      out.textContent = "";
      out.appendChild(h("div", { class: "fb " + (formOk ? "good" : "low"), tabindex: "-1" },
        h("h3", null, timeUp ? "Time is up" : "Submitted"),
        h("div", { class: "lbl" }, "Form"),
        h("ul", { class: "checks" }, form.map(function (f) { return h("li", null, f); })),
        !formOk ? h("p", { class: "small" }, "In the real test, an answer outside the required form can score zero for the whole task.") : null));
      out.appendChild(h("div", { style: "margin-top:16px" }, h("div", { class: "qno" }, task.id === "we" ? "Suggested plan" : "Model answer"), h("p", { class: "model" }, item.model)));
      out.appendChild(h("div", { class: "fb", style: "margin-top:16px" }, h("div", { class: "lbl" }, task.id === "we" ? "Check your essay against this list" : "Which key points did your answer include?"), cl.el,
        h("div", { class: "row" }, h("button", { class: "btn btn-amber wide", type: "button", onclick: function () {
          var s = (formOk ? 0.3 : 0) + 0.7 * cl.score(); save(task.id, idx, s);
          result.textContent = "";
          result.appendChild(feedback(s, "Saved: " + pct(s), [navRow(task, idx, redo)]));
          focusOn(result.firstChild);
        } }, "Save my mark"))));
      out.appendChild(result);
      focusOn(out.firstChild);
    }
    var btn = h("button", { class: "btn btn-amber wide", type: "button", onclick: function () { submit(false); } }, "Submit answer");
    if (item.show) box.appendChild(h("p", { class: task.id === "we" ? "q" : "passage" }, item.show));
    if (item.audio) { ab = audioBar(item, { onend: start }); box.appendChild(ab.el); }
    box.appendChild(h("div", { class: "clock" }, tEl, h("div", { style: "flex:1;display:grid;gap:6px" }, h("span", { class: "lab" }, item.audio ? "Starts after the audio" : "Starts when you type"), h("div", { class: "bar" }, bar))));
    box.appendChild(ta);
    box.appendChild(h("div", { class: "row", style: "justify-content:space-between" }, wc, btn));
    box.appendChild(out);
    upd();
  }

  /* ---------- MULTIPLE CHOICE (reading and listening) ---------- */
  function runMcq(task, item, idx, box, redo) {
    var order = shuffle(item.options.map(function (_, i) { return i; })), chosen = {}, done = false, ab = null;
    if (item.passage) box.appendChild(h("p", { class: "passage" }, item.passage));
    if (item.audio) { ab = audioBar(item); box.appendChild(ab.el); }
    box.appendChild(h("p", { class: "q" }, item.q));
    if (item.multi) box.appendChild(h("p", { class: "muted small", style: "margin-top:-10px" }, "Select all that apply."));
    var btns = order.map(function (oi, pos) {
      var b = h("button", { class: "opt" + (item.multi ? " multi" : ""), type: "button", "aria-pressed": "false", onclick: function () {
        if (done) return;
        if (!item.multi) { chosen = {}; btns.forEach(function (x) { x.setAttribute("aria-pressed", "false"); }); }
        chosen[oi] = !chosen[oi]; b.setAttribute("aria-pressed", chosen[oi] ? "true" : "false");
        check.disabled = !Object.keys(chosen).some(function (k) { return chosen[k]; });
      } }, h("span", { class: "k" }, LETTERS[pos]), h("span", null, item.options[oi]));
      return b;
    });
    box.appendChild(h("div", { class: "opts" }, btns));
    var out = h("div");
    var check = h("button", { class: "btn btn-amber wide", type: "button", disabled: true, onclick: function () {
      done = true; check.disabled = true; if (ab) { ab.stop(); ab.reveal(); }
      var right = 0, wrong = 0;
      order.forEach(function (oi, pos) {
        var isC = item.correct.indexOf(oi) >= 0, b = btns[pos]; b.disabled = true;
        if (chosen[oi] && isC) { right++; b.classList.add("ok"); }
        else if (chosen[oi]) { wrong++; b.classList.add("bad"); }
        else if (isC) b.classList.add("miss");
      });
      var s = item.multi ? Math.max(0, right - wrong) / item.correct.length : right;
      save(task.id, idx, s);
      var title = s === 1 ? "Correct" : s > 0 ? "Partly correct: " + pct(s) : "Not quite";
      out.appendChild(feedback(s, title, [h("p", null, item.explain), item.multi && wrong ? h("p", { class: "small muted" }, "Each wrong choice cancels one correct choice in this task.") : null, navRow(task, idx, redo)]));
      focusOn(out.firstChild);
    } }, "Check answer");
    box.appendChild(h("div", { class: "row" }, check));
    box.appendChild(out);
  }

  /* ---------- FILL IN THE BLANKS: drop-down, word bank and typed ---------- */
  function runFib(task, item, idx, box, redo) {
    var kind = task.kind, parts = item.text.split(/\{\{(.+?)\}\}/g), blanks = [], ab = null, done = false;
    var p = h("p", { class: "fib" }), bankEl = null, bank = [];
    if (item.audio === undefined && kind === "fibType") item.audio = item.text.replace(/\{\{(.+?)\}\}/g, "$1");
    if (kind === "fibType") { ab = audioBar(item); box.appendChild(ab.el); }
    parts.forEach(function (part, i) {
      if (i % 2 === 0) { p.appendChild(document.createTextNode(part)); return; }
      var opts = part.split("|"), ans = opts[0], el, n = blanks.length + 1;
      if (kind === "fibSelect") {
        el = h("select", { "aria-label": "Blank " + n }, h("option", { value: "" }, "Choose…"), shuffle(opts).map(function (o) { return h("option", { value: o }, o); }));
      } else if (kind === "fibType") {
        el = h("input", { type: "text", "aria-label": "Blank " + n, autocomplete: "off", autocapitalize: "none", spellcheck: "false", size: Math.max(8, ans.length + 2) });
      } else {
        el = h("button", { class: "slot", type: "button", "aria-label": "Blank " + n + ", empty", onclick: function () {
          if (done || !el.dataset.v) return;
          bank.push(el.dataset.v); el.dataset.v = ""; el.textContent = " "; el.classList.remove("full"); drawBank();
        } }, " ");
        el.dataset.v = "";
      }
      blanks.push({ el: el, ans: ans });
      p.appendChild(el);
    });
    box.appendChild(p);
    if (kind === "fibBank") {
      bank = shuffle(blanks.map(function (b) { return b.ans; }).concat(item.extra || []));
      bankEl = h("div", { class: "bank", "aria-label": "Word bank" });
      box.appendChild(h("p", { class: "muted small", style: "margin-bottom:-8px" }, "Tap a word to place it in the next empty blank. Tap a filled blank to take the word back."));
      box.appendChild(bankEl); drawBank();
    }
    function drawBank() {
      bankEl.textContent = "";
      bank.forEach(function (w, i) {
        bankEl.appendChild(h("button", { type: "button", onclick: function () {
          if (done) return;
          var free = blanks.filter(function (b) { return !b.el.dataset.v; })[0]; if (!free) return;
          free.el.dataset.v = w; free.el.textContent = w; free.el.classList.add("full"); free.el.setAttribute("aria-label", "Blank filled with " + w);
          bank.splice(i, 1); drawBank();
        } }, w));
      });
    }
    var out = h("div");
    var check = h("button", { class: "btn btn-amber wide", type: "button", onclick: function () {
      done = true; check.disabled = true; if (ab) { ab.stop(); ab.reveal(); }
      var right = 0;
      blanks.forEach(function (b) {
        var v = (kind === "fibBank" ? b.el.dataset.v : b.el.value).trim();
        var ok = v.toLowerCase() === b.ans.toLowerCase();
        b.el.classList.add(ok ? "ok" : "bad"); b.el.disabled = true;
        if (ok) right++; else b.el.insertAdjacentElement("afterend", h("span", { class: "ans" }, "→ " + b.ans));
      });
      var s = right / blanks.length; save(task.id, idx, s);
      out.appendChild(feedback(s, right + " of " + blanks.length + " correct", [item.explain ? h("p", null, item.explain) : null, kind === "fibType" ? h("p", { class: "small muted" }, "Spelling must be exact in this task.") : null, navRow(task, idx, redo)]));
      focusOn(out.firstChild);
    } }, "Check answers");
    box.appendChild(h("div", { class: "row" }, check));
    box.appendChild(out);
  }

  /* ---------- RE-ORDER PARAGRAPHS ---------- */
  function runReorder(task, item, idx, box, redo) {
    var n = item.paras.length, order, done = false, list = h("ol", { class: "order" });
    do { order = shuffle(item.paras.map(function (_, i) { return i; })); } while (order.every(function (v, i) { return v === i; }));
    function draw() {
      list.textContent = "";
      order.forEach(function (pi, pos) {
        var up = h("button", { type: "button", "aria-label": "Move up", disabled: pos === 0 || done, onclick: function () { swap(pos, pos - 1); } }, "↑");
        var dn = h("button", { type: "button", "aria-label": "Move down", disabled: pos === n - 1 || done, onclick: function () { swap(pos, pos + 1); } }, "↓");
        var li = h("li", null, h("span", { class: "n" }, pos + 1), h("p", null, item.paras[pi]), h("div", { class: "mv" }, up, dn));
        if (done) li.classList.add(pi === pos ? "ok" : "bad");
        list.appendChild(li);
      });
    }
    function swap(a, b) { var t = order[a]; order[a] = order[b]; order[b] = t; draw(); var bs = list.children[b].querySelectorAll("button"); (bs[b < a ? 0 : 1].disabled ? bs[b < a ? 1 : 0] : bs[b < a ? 0 : 1]).focus(); }
    box.appendChild(h("p", { class: "muted small" }, "Use the arrows to put the sentences into the correct order."));
    box.appendChild(list); draw();
    var out = h("div");
    var check = h("button", { class: "btn btn-amber wide", type: "button", onclick: function () {
      done = true; check.disabled = true; draw();
      var pairs = 0; for (var i = 0; i < n - 1; i++) if (order[i + 1] === order[i] + 1) pairs++;
      var s = pairs / (n - 1); save(task.id, idx, s);
      out.appendChild(feedback(s, pairs + " of " + (n - 1) + " pairs correct", [h("p", null, item.explain),
        h("div", null, h("div", { class: "lbl" }, "Correct order"), h("ol", { style: "margin:8px 0 0;padding-left:22px;display:grid;gap:6px;font-size:16px" }, item.paras.map(function (t) { return h("li", null, t); }))), navRow(task, idx, redo)]));
      focusOn(out.firstChild);
    } }, "Check order");
    box.appendChild(h("div", { class: "row" }, check));
    box.appendChild(out);
  }

  /* ---------- HIGHLIGHT INCORRECT WORDS ---------- */
  function runHiw(task, item, idx, box, redo) {
    var toks = [], spoken = "", done = false;
    item.text.split(/(\[\[.+?\]\])/g).forEach(function (part) {
      var m = part.match(/^\[\[(.+?)\|(.+?)\]\]$/);
      if (m) { toks.push({ w: m[2], wrong: true, real: m[1] }); spoken += m[1]; return; } // [[spoken|shown]]
      spoken += part;
      part.split(/(\s+)/).forEach(function (w) { if (w.trim()) toks.push({ w: w, plain: !/[A-Za-z0-9]/.test(w) }); });
    });
    var ab = audioBar({ audio: spoken });
    var p = h("p", { class: "hiw" });
    toks.forEach(function (t) {
      if (t.plain) { if (p.lastChild && p.lastChild.nodeType === 3) p.removeChild(p.lastChild); p.appendChild(document.createTextNode(t.w + " ")); return; }
      t.el = h("span", { role: "button", tabindex: "0", "aria-pressed": "false" }, t.w);
      var toggle = function () { if (done) return; t.sel = !t.sel; t.el.classList.toggle("sel", t.sel); t.el.setAttribute("aria-pressed", t.sel ? "true" : "false"); };
      t.el.addEventListener("click", toggle);
      t.el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      p.appendChild(t.el); p.appendChild(document.createTextNode(" "));
    });
    box.appendChild(ab.el);
    box.appendChild(h("p", { class: "muted small" }, "Play the audio and tap each word in the text that is different from what the speaker says."));
    box.appendChild(p);
    var out = h("div");
    var check = h("button", { class: "btn btn-amber wide", type: "button", onclick: function () {
      done = true; check.disabled = true; ab.stop(); ab.reveal(); p.classList.add("done");
      var hit = 0, fa = 0, total = 0;
      toks.forEach(function (t) {
        if (t.plain) return;
        t.el.classList.remove("sel"); t.el.removeAttribute("tabindex");
        if (t.wrong) { total++; if (t.sel) { hit++; t.el.classList.add("ok"); } else t.el.classList.add("miss"); t.el.insertAdjacentElement("afterend", h("sup", null, t.real)); }
        else if (t.sel) { fa++; t.el.classList.add("bad"); }
      });
      var s = Math.max(0, hit - fa) / total; save(task.id, idx, s);
      out.appendChild(feedback(s, hit + " of " + total + " found" + (fa ? ", " + fa + " wrong tap" + (fa > 1 ? "s" : "") : ""), [h("p", null, "The word the speaker actually said is shown in small text after each changed word."), navRow(task, idx, redo)]));
      focusOn(out.firstChild);
    } }, "Check answer");
    box.appendChild(h("div", { class: "row" }, check));
    box.appendChild(out);
  }

  /* ---------- WRITE FROM DICTATION ---------- */
  function runWfd(task, item, idx, box, redo) {
    var ab = audioBar(item), inp = h("input", { class: "line", type: "text", placeholder: "Type the sentence you hear…", autocomplete: "off", autocapitalize: "sentences", spellcheck: "false", "aria-label": "Your sentence" }), out = h("div");
    var check = h("button", { class: "btn btn-amber wide", type: "button", onclick: go }, "Check answer");
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter" && !check.disabled) go(); });
    function go() {
      check.disabled = true; inp.readOnly = true; ab.stop(); ab.reveal();
      var target = words(item.audio), mine = words(inp.value), pool = {}, right = 0;
      mine.forEach(function (w) { pool[w] = (pool[w] || 0) + 1; });
      var diff = h("p", { class: "diff model" }, target.map(function (w) {
        var ok = pool[w] > 0; if (ok) { pool[w]--; right++; }
        return h("span", { class: ok ? "ok" : "bad" }, w);
      }));
      var s = right / target.length; save(task.id, idx, s);
      out.appendChild(feedback(s, right + " of " + target.length + " words correct", [h("div", { class: "lbl" }, "The sentence (words you missed are in red)"), diff, h("p", { class: "model" }, item.audio), navRow(task, idx, redo)]));
      focusOn(out.firstChild);
    }
    box.appendChild(ab.el); box.appendChild(inp); box.appendChild(h("div", { class: "row" }, check)); box.appendChild(out);
  }

  var RUN = { speak: runSpeak, write: runWrite, mcq: runMcq, fibSelect: runFib, fibBank: runFib, fibType: runFib, reorder: runReorder, hiw: runHiw, wfd: runWfd };

  /* ---------- views ---------- */
  function viewTask(task, idx) {
    var skill = D.skills.filter(function (s) { return s.id === task.skill; })[0], p = P[task.id] || {};
    document.title = task.name + " · PTE practice · NextGen Nurses";
    var stage = h("section", { class: "stage", "aria-label": "Question " + (idx + 1) });
    function mount() {
      leave(); stage.textContent = "";
      stage.appendChild(h("div", { class: "qno" }, skill.name + " · Question " + (idx + 1) + " of " + task.items.length));
      RUN[task.kind](task, task.items[idx], idx, stage, mount);
    }
    app.textContent = "";
    app.appendChild(h("div", { class: "wrap", style: "padding-bottom:70px" },
      h("header", { class: "thead" },
        h("a", { class: "crumb", href: "#/" }, "← All PTE tasks"),
        h("h1", null, task.name),
        h("div", { class: "chips" }, task.meta.map(function (m) { return h("span", { class: "chipm" }, m); })),
        h("details", { class: "tips" }, h("summary", null, "How to score well in this task"), h("ul", null, task.tips.map(function (t) { return h("li", null, t); }))),
        h("nav", { class: "pills", "aria-label": "Questions" }, task.items.map(function (_, i) {
          return h("a", { class: "pill" + (p[i] != null ? " done" : ""), href: "#/t/" + task.id + "/" + i, "data-i": i, "aria-current": i === idx ? "true" : null, "aria-label": "Question " + (i + 1) + (p[i] != null ? ", done" : "") }, i + 1);
        }))),
      stage));
    mount();
    window.scrollTo(0, 0);
  }

  function viewHome() {
    document.title = "PTE Academic Practice · NextGen Nurses";
    var totals = { done: 0, total: 0 };
    var sections = D.skills.map(function (sk) {
      var tasks = D.tasks.filter(function (t) { return t.skill === sk.id; });
      return h("section", { class: "skill", id: sk.id }, h("h2", null, sk.name, h("span", null, sk.blurb)),
        h("div", { class: "cards" }, tasks.map(function (t) {
          var s = stat(t); totals.done += s.done; totals.total += s.total;
          return h("a", { class: "card", href: "#/t/" + t.id + "/" + Math.min(s.done, s.total - 1) },
            h("h3", null, t.name), h("p", { class: "cm" }, t.meta.slice(0, 2).join(" · ")),
            h("div", { class: "cp" }, h("div", { class: "bar" }, h("i", { style: "width:" + (s.done / s.total) * 100 + "%" })), s.done + "/" + s.total + (s.done ? " · " + pct(s.avg) : "")));
        })));
    });
    var targets = [["Overall", 63], ["Listening", 58], ["Reading", 59], ["Writing", 60], ["Speaking", 76]];
    app.textContent = "";
    app.appendChild(h("header", { class: "hero" }, h("div", { class: "wrap" },
      h("div", { class: "eyebrow" }, "PTE Academic · free practice"),
      h("h1", null, "Practise every PTE task ", h("em", null, "against the clock.")),
      h("p", null, "All " + D.tasks.length + " question types across Speaking, Writing, Reading and Listening, with exam timings, instant marking and model answers. No sign-up needed."),
      h("div", { class: "targets", role: "group", "aria-label": "NMBA minimum PTE Academic scores" }, targets.map(function (t) { return h("div", null, h("b", null, t[1]), h("span", null, t[0])); })),
      h("p", { class: "note" }, "NMBA minimum scores for tests taken on or after 23 April 2026. Always confirm on ",
        h("a", { href: "https://www.ahpra.gov.au/Registration/Registration-Standards/English-language-skills/Accepted-English-language-tests.aspx", target: "_blank", rel: "noopener" }, "Ahpra's accepted English tests page"), " before you book."))));
    var main = h("div", { class: "wrap main" },
      h("div", { class: "overall" }, h("b", null, totals.done + " of " + totals.total + " questions done"), h("div", { class: "bar" }, h("i", { style: "width:" + (totals.done / totals.total) * 100 + "%" })),
        totals.done ? h("button", { class: "btn btn-line btn-sm", type: "button", onclick: function () {
          if (!confirm("Clear your saved progress on this device?")) return;
          P = {}; try { localStorage.removeItem(KEY); } catch (e) {} viewHome();
        } }, "Reset progress") : null),
      sections,
      h("div", { class: "promo" }, h("div", null, h("b", null, "Want it on paper too?"), h("span", { class: "muted small" }, "The PTE review bundle has 130 short-answer questions and tips for every task, as two printable PDFs.")),
        h("a", { class: "btn btn-amber", href: "/#pte" }, "See the PTE PDF bundle")),
      h("p", { class: "muted small" }, "Speaking tasks need a microphone, and listening tasks use your device's built-in voice, so the accent varies between phones and computers. Chrome, Edge and Safari work best."));
    app.appendChild(main);
    window.scrollTo(0, 0);
  }

  function route() {
    leave();
    var m = (location.hash || "").match(/^#\/t\/([a-z]+)\/(\d+)/), task = m && TASKS[m[1]];
    if (task) viewTask(task, Math.min(parseInt(m[2], 10), task.items.length - 1)); else viewHome();
  }
  addEventListener("hashchange", route);
  addEventListener("pagehide", leave);
  route();
})();
