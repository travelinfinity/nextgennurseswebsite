/* NextGen Nurses · PTE Academic practice app (members). Static, no backend: progress is kept in this browser. */
(function () {
  "use strict";
  var D = window.PTE_DATA, POOL = window.PTE_POOL || {}, app = document.getElementById("app");
  var LETTERS = "ABCDEFGH";
  // Items of each type in one full practice test, in test order.
  var COUNTS = { ra: 6, rs: 10, di: 5, rl: 2, asq: 5, sgd: 2, rts: 2, swt: 2, we: 1, rwfib: 5, rmcm: 1, ro: 2, rfib: 4, rmcs: 1, sst: 2, lmcm: 1, lfib: 2, hcs: 1, lmcs: 1, smw: 1, hiw: 2, wfd: 3 };
  var ORDER = Object.keys(COUNTS), PER_SET = ORDER.reduce(function (a, k) { return a + COUNTS[k]; }, 0);
  var PARTS = { speaking: "Part 1: Speaking and Writing", writing: "Part 1: Speaking and Writing", reading: "Part 2: Reading", listening: "Part 3: Listening" };
  var INSTR = {
    ra: "Look at the text below. When the preparation time ends, read it aloud as naturally and clearly as you can.",
    rs: "You will hear a sentence. Repeat the sentence exactly as you hear it. You will hear it only once.",
    di: "Look at the image below. When the preparation time ends, describe in detail what the image shows. You have 40 seconds.",
    rl: "You will hear a lecture. After it finishes, retell what you heard in your own words. You have 40 seconds.",
    asq: "You will hear a question. Give a simple, short answer. One word or a few words is enough.",
    sgd: "You will hear three people having a discussion. After it finishes, summarise the discussion in your own words. You have 2 minutes.",
    rts: "Read and listen to the situation below. Then say what you would say in that situation. You have 40 seconds.",
    swt: "Read the passage below and summarise it in one sentence of 5 to 75 words. You have 10 minutes. Your answer is judged on how well it presents the key points.",
    we: "Write an essay of 200 to 300 words on the topic below. You have 20 minutes to plan, write and check your essay.",
    rwfib: "Several words are missing from the text below. For each blank, choose the most suitable word from the list.",
    rmcm: "Read the text and answer the question by selecting all the correct responses. More than one response is correct.",
    ro: "The sentences below are in random order. Move them into the right-hand panel in the correct order.",
    rfib: "Several words are missing from the text below. Fill each blank with a word from the box. There are more words than blanks.",
    rmcs: "Read the text and answer the question by selecting the correct response. Only one response is correct.",
    sst: "You will hear a short talk. Write a summary of 50 to 70 words for a fellow student who was not present. You have 10 minutes.",
    lmcm: "Listen to the recording and answer the question by selecting all the correct responses. More than one response is correct.",
    lfib: "You will hear a recording. Type the missing word in each blank as you listen.",
    hcs: "You will hear a recording. Select the paragraph that best summarises it.",
    lmcs: "Listen to the recording and answer the question by selecting the correct response. Only one response is correct.",
    smw: "You will hear a recording. At the end, the last word or group of words has been replaced by a beep. Select the option that completes the recording.",
    hiw: "You will hear a recording. The text below is a transcription of it, but some words are different from what the speaker says. Select the words that are different.",
    wfd: "You will hear a sentence. Type the sentence in the box exactly as you hear it. You will hear it only once."
  };
  var WE_POINTS = ["I answered every part of the question", "I stated my position in the introduction", "Each body paragraph has one main idea and an example", "My conclusion restates my answer without new ideas", "I checked spelling, plurals and verb endings"];

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
  function mmss(s) { s = Math.max(0, Math.ceil(s)); return ("0" + Math.floor(s / 60)).slice(-2) + ":" + ("0" + (s % 60)).slice(-2); }
  function pct(x) { return Math.round(x * 100) + "%"; }
  function lc(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
  function track(name, data) { try { window.va && window.va("event", { name: name, data: data || {} }); } catch (e) {} }

  /* ---------- question bank: built-in items plus the pool files ---------- */
  function diAuto(c) {
    var hi = 0, lo = 0, n = c.values.length, u = function (v) { return c.unit === "%" ? v + " percent" : v + " " + c.unit; };
    c.values.forEach(function (v, i) { if (v > c.values[hi]) hi = i; if (v < c.values[lo]) lo = i; });
    var kind = c.type === "bar" ? "bar chart" : c.type === "line" ? "line graph" : "pie chart", t = lc(c.title), m;
    if (c.type === "line") {
      var up = c.values[n - 1] > c.values[0];
      m = "This line graph shows " + t + ". The figure starts at " + u(c.values[0]) + " in " + c.labels[0] + " and " + (up ? "rises" : "falls") + " to " + u(c.values[n - 1]) + " in " + c.labels[n - 1] + ". The highest point is " + u(c.values[hi]) + " in " + c.labels[hi] + ", while the lowest is " + u(c.values[lo]) + " in " + c.labels[lo] + ". Overall, the trend is clearly " + (up ? "upward" : "downward") + " over the period.";
    } else {
      m = "This " + kind + " shows " + t + ". The highest figure is for " + c.labels[hi] + ", at " + u(c.values[hi]) + ". In contrast, the lowest figure is for " + c.labels[lo] + ", at only " + u(c.values[lo]) + ". The other categories fall between these two. Overall, there is a clear difference between " + c.labels[hi] + " and " + c.labels[lo] + ".";
    }
    return { model: m, points: ["Said it is a " + kind + " showing " + t, "Named the highest figure: " + c.labels[hi] + ", " + u(c.values[hi]), "Named the lowest figure: " + c.labels[lo] + ", " + u(c.values[lo]), "Gave a comparison or trend and a one-sentence conclusion"] };
  }
  function norm(id, e) {
    if (e && typeof e === "object" && !Array.isArray(e)) return e;
    var p;
    switch (id) {
      case "ra": return { show: e, prep: 35, answer: 35 };
      case "rs": return { audio: e, answer: 15, reveal: true };
      case "di":
        p = e.split("|");
        var img = { type: p[0], title: p[1], unit: p[2], labels: [], values: [] };
        p[3].split(",").forEach(function (x) { var q = x.split(":"); img.labels.push(q[0]); img.values.push(parseFloat(q[1])); });
        var a = diAuto(img); return { image: img, prep: 25, answer: 40, points: a.points, model: a.model };
      case "rl": return { audio: e[0], prep: 10, answer: 40, points: e[1], model: e[1].join(" ") };
      case "asq": p = e.split("|"); return { audio: p[0], answer: 10, reveal: true, model: p[1] };
      case "sgd": return { audio: e[0].map(function (l) { return { v: parseInt(l.charAt(0), 10) - 1, t: l.slice(2) }; }), prep: 10, answer: 120, points: e[1], model: e[1].join(" ") };
      case "rts": return { show: e[0], audio: e[0], prep: 10, answer: 40, points: e[1], model: e[2] };
      case "swt": return { minutes: 10, min: 5, max: 75, oneSentence: true, show: e[0], points: e[1], model: e[2] };
      case "we": return { minutes: 20, min: 200, max: 300, show: e[0], points: WE_POINTS, model: e[1] };
      case "rwfib": case "lfib": case "hiw": return { text: e };
      case "rmcm": return { multi: true, passage: e[0], q: e[1], options: e[2], correct: e[3] };
      case "ro": return { paras: e };
      case "rfib": return { text: e[0], extra: e[1].split(",") };
      case "rmcs": return { passage: e[0], q: e[1], options: e[2], correct: [e[3]] };
      case "sst": return { minutes: 10, min: 50, max: 70, audio: e[0], points: e[1], model: e[1].join(" ") };
      case "lmcm": return { multi: true, audio: e[0], q: e[1], options: e[2], correct: e[3] };
      case "hcs": return { audio: e[0], q: "Which paragraph best summarises the recording?", options: e[1], correct: [e[2]] };
      case "lmcs": return { audio: e[0], q: e[1], options: e[2], correct: [e[3]] };
      case "smw": return { audio: e[0], beep: true, q: "Which option completes the recording?", options: e[1], correct: [e[2]] };
      case "wfd": return { audio: e };
    }
    return e;
  }
  var TASKS = {};
  D.tasks.forEach(function (t) { t.items = t.items.concat((POOL[t.id] || []).map(function (e) { return norm(t.id, e); })); TASKS[t.id] = t; });
  var NSETS = Math.min.apply(null, ORDER.map(function (id) { return Math.floor(TASKS[id].items.length / COUNTS[id]); }));
  function setSeq(k) { // k is 1-based
    var seq = [];
    ORDER.forEach(function (id) { for (var i = 0; i < COUNTS[id]; i++) seq.push({ task: TASKS[id], idx: (k - 1) * COUNTS[id] + i }); });
    return seq;
  }

  /* ---------- progress (this browser only) ---------- */
  var KEY = "ngn-pte-progress-v2", store = { p: {}, sets: {} };
  try { var raw = JSON.parse(localStorage.getItem(KEY) || "null"); if (raw && raw.p) store = raw; store.sets = store.sets || {}; } catch (e) {}
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
  function save(taskId, idx, score) {
    store.p[taskId] = store.p[taskId] || {};
    store.p[taskId][idx] = Math.round(Math.max(0, Math.min(1, score)) * 100) / 100;
    persist();
  }
  function stat(task) {
    var p = store.p[task.id] || {}, done = 0, sum = 0;
    task.items.forEach(function (_, i) { if (p[i] != null) { done++; sum += p[i]; } });
    return { done: done, total: task.items.length, avg: done ? sum / done : 0 };
  }

  /* ---------- lifecycle ---------- */
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

  /* ---------- audio out: device text-to-speech ---------- */
  var synth = window.speechSynthesis, voices = [], volume = 1, speakToken = 0;
  function loadVoices() {
    if (!synth) return;
    var all = synth.getVoices().filter(function (v) { return /^en[-_]/i.test(v.lang); });
    var rank = function (v) { return (/en[-_]AU/i.test(v.lang) ? 0 : /en[-_]GB/i.test(v.lang) ? 1 : 2) + (v.localService ? 0 : 0.5); };
    voices = all.sort(function (a, b) { return rank(a) - rank(b); });
  }
  if (synth) { loadVoices(); if (synth.addEventListener) synth.addEventListener("voiceschanged", loadVoices); }
  function stopSpeak() { speakToken++; if (synth) try { synth.cancel(); } catch (e) {} }
  function segs(audio) { return typeof audio === "string" ? [{ v: 0, t: audio }] : audio; }
  function audioChars(audio) { return segs(audio).reduce(function (a, s) { return a + s.t.length; }, 0); }
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
      u.rate = 1; u.volume = volume; u.pitch = voices.length > 2 ? 1 : pitches[q.v % 3];
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
      if (actx.state === "suspended") actx.resume();
      var o = actx.createOscillator(), g = actx.createGain();
      o.frequency.value = 880; g.gain.value = 0.12 * volume; o.connect(g); g.connect(actx.destination);
      o.start(); o.stop(actx.currentTime + 0.35);
    } catch (e) {}
  }

  /* ---------- microphone: one stream for the whole sitting ---------- */
  var mic = null, checked = false;
  function releaseMic() { if (mic) { mic.getTracks().forEach(function (t) { t.stop(); }); mic = null; } }
  function canRecord() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); }

  /* ---------- exam-style components ---------- */
  // Audio status box: starts by itself after a short wait and plays once, as in the test.
  function player(item, wait, onend) {
    var st = h("span", null, "Beginning in " + wait + " seconds."), bar = h("i", { style: "width:0%" }), stopWait, iv, failed = h("div");
    var vol = h("input", { type: "range", min: "0", max: "1", step: "0.1", value: String(volume), "aria-label": "Volume", oninput: function () { volume = parseFloat(vol.value); } });
    var el = h("div", null, h("div", { class: "xbox" }, h("div", { class: "xrow" }, h("b", null, "Status: "), st), h("div", { class: "xrow" }, h("span", null, "Volume"), vol), h("div", { class: "xbar" }, bar)), failed);
    function done(ok) {
      clearInterval(iv); bar.style.width = "100%"; st.textContent = "Completed.";
      if (!ok) {
        st.textContent = "This device could not play the recording.";
        add(failed, h("div", { class: "xpass" }, h("p", { class: "xnote" }, "Read the transcript instead:"), transcript(item.audio)));
      } else if (item.beep) beep();
      if (onend) onend(ok);
    }
    stopWait = countdown(wait, function (left) { st.textContent = "Beginning in " + Math.ceil(left) + " second" + (Math.ceil(left) === 1 ? "." : "s."); }, function () {
      st.textContent = "Playing.";
      var est = audioChars(item.audio) * 68, t0 = Date.now();
      iv = setInterval(function () { bar.style.width = Math.min(96, ((Date.now() - t0) / est) * 100) + "%"; }, 250);
      onLeave(function () { clearInterval(iv); });
      speak(item.audio, done);
    });
    return { el: el, stop: function () { stopWait(); clearInterval(iv); stopSpeak(); } };
  }
  // Recording status box: counts down, beeps, records for the answer time and stops.
  function recorder(prep, answer) {
    var st = h("span", null, "Waiting."), bar = h("i", { style: "width:0%" }), rec = null, chunks = [], stopT = null, state = "idle", onDone = null, url = null;
    var el = h("div", { class: "xbox" }, h("div", { class: "xhead" }, "Recorded Answer"), h("div", { class: "xrow" }, h("b", null, "Current Status: "), st), h("div", { class: "xbar" }, bar),
      mic ? null : h("p", { class: "xnote" }, "Microphone is off, so this item is timed but not recorded."));
    function begin() {
      if (state !== "prep" && state !== "idle") return;
      state = "rec"; beep(); st.textContent = "Recording."; el.classList.add("rec");
      if (mic) { try { rec = new MediaRecorder(mic); rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); }; rec.start(); } catch (e) { rec = null; } }
      stopT = countdown(answer, function (left, f) { bar.style.width = f * 100 + "%"; }, function () { finish(); });
    }
    function finish(cb) {
      if (cb) onDone = cb;
      if (state === "done") { if (onDone) { var f = onDone; onDone = null; f(url); } return; }
      if (stopT) stopT();
      var was = state; state = "done"; st.textContent = "Completed."; el.classList.remove("rec");
      var fire = function () { if (onDone) { var f = onDone; onDone = null; f(url); } };
      if (was === "rec" && rec && rec.state !== "inactive") {
        rec.onstop = function () { if (chunks.length) url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/webm" })); fire(); };
        try { rec.stop(); } catch (e) { fire(); }
      } else fire();
    }
    onLeave(function () { try { rec && rec.state !== "inactive" && rec.stop(); } catch (e) {} });
    return {
      el: el,
      start: function () {
        if (state !== "idle") return;
        if (!prep) { begin(); return; }
        state = "prep";
        stopT = countdown(prep, function (left) { st.textContent = "Beginning in " + Math.ceil(left) + " second" + (Math.ceil(left) === 1 ? "." : "s."); }, begin);
      },
      finish: finish
    };
  }
  function chart(c) {
    var W = 520, H = 320, L = 52, R = 16, T = 44, B = 46, pw = W - L - R, ph = H - T - B, n = c.values.length;
    var cols = ["#2F6DB5", "#E0A526", "#4C9F70", "#C8553D", "#7C6BD6", "#5B8DB8"];
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + c.title + '" font-family="Arial,Helvetica,sans-serif" fill="#1b1b1b">';
    s += '<rect width="' + W + '" height="' + H + '" fill="#fff"/><text x="' + W / 2 + '" y="24" text-anchor="middle" font-size="15" font-weight="700">' + c.title + "</text>";
    if (c.type === "pie") {
      var cx = 150, cy = 180, r = 105, tot = c.values.reduce(function (a, b) { return a + b; }, 0), a0 = -Math.PI / 2;
      c.values.forEach(function (v, i) {
        var a1 = a0 + (v / tot) * Math.PI * 2, big = a1 - a0 > Math.PI ? 1 : 0;
        s += '<path d="M' + cx + " " + cy + " L" + (cx + r * Math.cos(a0)).toFixed(1) + " " + (cy + r * Math.sin(a0)).toFixed(1) + " A" + r + " " + r + " 0 " + big + " 1 " + (cx + r * Math.cos(a1)).toFixed(1) + " " + (cy + r * Math.sin(a1)).toFixed(1) + ' Z" fill="' + cols[i % 6] + '" stroke="#fff" stroke-width="2"/>';
        var y = 86 + i * 34;
        s += '<rect x="290" y="' + (y - 13) + '" width="16" height="16" fill="' + cols[i % 6] + '"/><text x="314" y="' + y + '" font-size="14">' + c.labels[i] + '</text><text x="' + (W - R) + '" y="' + y + '" font-size="14" font-weight="700" text-anchor="end">' + v + c.unit + "</text>";
        a0 = a1;
      });
      return s + "</svg>";
    }
    var max = Math.max.apply(null, c.values), step = Math.pow(10, Math.floor(Math.log(max) / Math.LN10)), g;
    if (max / step < 2.5) step /= 4; else if (max / step < 5) step /= 2;
    var top = Math.ceil(max / step) * step;
    for (g = 0; g <= top + 1e-9; g += step) {
      var gy = T + ph - (g / top) * ph;
      s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + gy + '" y2="' + gy + '" stroke="#d9d9d9"/><text x="' + (L - 8) + '" y="' + (gy + 4) + '" font-size="12" text-anchor="end" fill="#555">' + (Math.round(g * 100) / 100) + "</text>";
    }
    s += '<text x="14" y="' + (T + ph / 2) + '" font-size="12" fill="#555" text-anchor="middle" transform="rotate(-90 14 ' + (T + ph / 2) + ')">' + c.unit + "</text>";
    var pts = [];
    c.values.forEach(function (v, i) {
      var x = L + (pw / n) * (i + 0.5), y = T + ph - (v / top) * ph;
      pts.push(x.toFixed(1) + "," + y.toFixed(1));
      if (c.type === "bar") { var bw = Math.min(54, (pw / n) * 0.6); s += '<rect x="' + (x - bw / 2) + '" y="' + y + '" width="' + bw + '" height="' + (T + ph - y) + '" fill="#2F6DB5"/>'; }
      s += '<text x="' + x + '" y="' + (y - 8) + '" font-size="12.5" font-weight="700" text-anchor="middle">' + v + '</text><text x="' + x + '" y="' + (H - 20) + '" font-size="12.5" text-anchor="middle">' + c.labels[i] + "</text>";
    });
    if (c.type === "line") {
      s += '<polyline points="' + pts.join(" ") + '" fill="none" stroke="#2F6DB5" stroke-width="3" stroke-linejoin="round"/>';
      pts.forEach(function (p) { var xy = p.split(","); s += '<circle cx="' + xy[0] + '" cy="' + xy[1] + '" r="4.5" fill="#2F6DB5" stroke="#fff" stroke-width="2"/>'; });
    }
    return s + "</svg>";
  }
  function part(label, node) { return h("div", { class: "rv" }, h("div", { class: "rvl" }, label), node); }

  /* ---------- runners: each returns { collect(cb) } and cb receives { score, self, base, review } ---------- */
  function runSpeak(task, item, box) {
    var rc = recorder(item.prep || 0, item.answer), pl = null;
    if (item.show) box.appendChild(h("p", { class: "xtext" }, item.show));
    if (item.image) box.appendChild(h("div", { class: "xfig", html: chart(item.image) }));
    if (item.audio) { pl = player(item, 3, function () { rc.start(); }); box.appendChild(pl.el); }
    box.appendChild(rc.el);
    if (!item.audio) rc.start();
    return { collect: function (cb) {
      if (pl) pl.stop();
      rc.finish(function (url) {
        var rv = h("div", null,
          item.show ? part(task.id === "rts" ? "Situation" : "Text", h("p", { class: "model" }, item.show)) : null,
          item.image ? h("div", { class: "xfig", html: chart(item.image) }) : null,
          part("Your recording", url ? h("audio", { controls: true, src: url }) : h("p", { class: "xnote" }, "No recording was saved for this item.")),
          item.audio && task.id !== "rts" ? part(task.id === "asq" ? "Question" : task.id === "rs" ? "The sentence" : "Transcript", transcript(item.audio)) : null,
          item.model ? part(task.id === "asq" ? "Correct answer" : "Sample answer", h("p", { class: "model" }, item.model)) : null);
        cb({ score: null, base: 0, self: (item.points || []).concat(task.criteria || []), review: rv });
      });
    } };
  }

  function runWrite(task, item, box, ctx) {
    var ta = h("textarea", { class: "xta", spellcheck: "false", autocomplete: "off", autocorrect: "off", autocapitalize: "off", "aria-label": "Your response" });
    var wc = h("span", null, "Total Word Count: 0"), clip = "", started = false, pl = null;
    function upd() { wc.textContent = "Total Word Count: " + countWords(ta.value); }
    function sel() { return [ta.selectionStart, ta.selectionEnd]; }
    function put(a, b, text) { ta.value = ta.value.slice(0, a) + text + ta.value.slice(b); ta.selectionStart = ta.selectionEnd = a + text.length; ta.focus(); upd(); }
    function start() { if (started) return; started = true; ctx.countdown(item.minutes * 60); }
    ta.addEventListener("input", upd);
    if (item.show) box.appendChild(h("p", { class: task.id === "we" ? "xtext xq" : "xpass" }, item.show));
    if (item.audio) { pl = player(item, 5, start); box.appendChild(pl.el); } else start();
    box.appendChild(ta);
    box.appendChild(h("div", { class: "xtools" }, wc, h("span", { class: "xsp" }),
      h("button", { type: "button", class: "xbtn2", onclick: function () { var s = sel(); if (s[0] !== s[1]) { clip = ta.value.slice(s[0], s[1]); put(s[0], s[1], ""); } } }, "Cut"),
      h("button", { type: "button", class: "xbtn2", onclick: function () { var s = sel(); if (s[0] !== s[1]) clip = ta.value.slice(s[0], s[1]); ta.focus(); } }, "Copy"),
      h("button", { type: "button", class: "xbtn2", onclick: function () { var s = sel(); put(s[0], s[1], clip); } }, "Paste")));
    return { collect: function (cb) {
      if (pl) pl.stop();
      var text = ta.value.trim(), n = countWords(text), inRange = n >= item.min && n <= item.max, oneOk = true, lines = [];
      lines.push((inRange ? "✓ " : "✗ ") + n + " words (required " + item.min + " to " + item.max + ")");
      if (item.oneSentence) {
        var stops = (text.replace(/\b(?:e\.g|i\.e|etc|Dr|Mr|Mrs|Ms)\./gi, "").match(/[.!?]+(?=\s|$)/g) || []).length;
        oneOk = stops === 1 && /[.!?]$/.test(text) && /^[A-Z]/.test(text);
        lines.push((oneOk ? "✓ " : "✗ ") + "One sentence, with a capital letter at the start and one full stop at the end");
      }
      var formOk = inRange && oneOk;
      var rv = h("div", null,
        item.show ? part(task.id === "we" ? "Essay topic" : "Passage", h("p", { class: "model" }, item.show)) : null,
        item.audio ? part("Transcript", transcript(item.audio)) : null,
        part("Your response", h("p", { class: "model mine" }, text || "(no response)")),
        part("Form", h("ul", { class: "plain" }, lines.map(function (l) { return h("li", null, l); }), formOk ? null : h("li", null, "In the real test, a response outside the required form can score zero for the whole item."))),
        part(task.id === "we" ? "Suggested plan" : "Sample answer", h("p", { class: "model" }, item.model)));
      cb({ score: null, base: formOk ? 0.3 : 0, self: n ? item.points : [], review: rv, zero: !n });
    } };
  }

  function runMcq(task, item, box) {
    var order = shuffle(item.options.map(function (_, i) { return i; })), chosen = {}, pl = null;
    var wrap = h("div", { class: "xsplit" + (item.passage ? " two" : "") });
    if (item.passage) wrap.appendChild(h("p", { class: "xpass" }, item.passage));
    if (item.audio) { pl = player(item, 5); box.appendChild(pl.el); }
    var name = "o" + Math.random().toString(36).slice(2);
    var inputs = [], rows = order.map(function (oi) {
      var inp = h("input", { type: item.multi ? "checkbox" : "radio", name: name, onchange: function () {
        if (!item.multi) chosen = {};
        chosen[oi] = inp.checked;
      } });
      inputs.push(inp);
      return h("label", { class: "xopt" }, inp, h("span", null, item.options[oi]));
    });
    wrap.appendChild(h("div", null, h("p", { class: "xq" }, item.q), h("div", { class: "xopts" }, rows)));
    box.appendChild(wrap);
    return { collect: function (cb) {
      if (pl) pl.stop();
      var right = 0, wrong = 0;
      order.forEach(function (oi, pos) {
        var isC = item.correct.indexOf(oi) >= 0; inputs[pos].disabled = true;
        if (chosen[oi] && isC) { right++; rows[pos].classList.add("ok"); }
        else if (chosen[oi]) { wrong++; rows[pos].classList.add("bad"); }
        else if (isC) rows[pos].classList.add("miss");
      });
      var s = item.multi ? Math.max(0, right - wrong) / item.correct.length : right;
      var rv = h("div", null, item.audio ? part("Transcript", h("div", null, transcript(item.audio), item.beep ? h("p", { class: "xnote" }, "[beep]") : null)) : null, wrap,
        h("p", { class: "xnote" }, "Green is correct. A dashed green outline is a correct response you did not select."),
        item.explain ? part("Why", h("p", { class: "model" }, item.explain)) : null);
      cb({ score: s, review: rv });
    } };
  }

  function runFib(task, item, box) {
    var kind = task.kind, parts = item.text.split(/\{\{(.+?)\}\}/g), blanks = [], pl = null, bank = [], bankEl = null;
    var p = h("p", { class: "xfib" });
    if (kind === "fibType") { if (!item.audio) item.audio = item.text.replace(/\{\{(.+?)\}\}/g, "$1"); pl = player(item, 7); box.appendChild(pl.el); }
    parts.forEach(function (prt, i) {
      if (i % 2 === 0) { p.appendChild(document.createTextNode(prt)); return; }
      var opts = prt.split("|"), ans = opts[0], el, n = blanks.length + 1;
      if (kind === "fibSelect") el = h("select", { "aria-label": "Blank " + n }, h("option", { value: "" }, ""), shuffle(opts).map(function (o) { return h("option", { value: o }, o); }));
      else if (kind === "fibType") el = h("input", { type: "text", "aria-label": "Blank " + n, autocomplete: "off", autocorrect: "off", autocapitalize: "off", spellcheck: "false", size: Math.max(9, ans.length + 2) });
      else {
        el = h("button", { class: "xslot", type: "button", "aria-label": "Blank " + n, onclick: function () {
          if (el.disabled || !el.dataset.v) return;
          bank.push(el.dataset.v); el.dataset.v = ""; el.textContent = " "; el.classList.remove("full"); drawBank();
        } }, " ");
        el.dataset.v = "";
      }
      blanks.push({ el: el, ans: ans }); p.appendChild(el);
    });
    box.appendChild(p);
    function drawBank() {
      bankEl.textContent = "";
      bank.forEach(function (w, i) {
        bankEl.appendChild(h("button", { type: "button", onclick: function () {
          var free = blanks.filter(function (b) { return !b.el.dataset.v && !b.el.disabled; })[0]; if (!free) return;
          free.el.dataset.v = w; free.el.textContent = w; free.el.classList.add("full"); bank.splice(i, 1); drawBank();
        } }, w));
      });
    }
    if (kind === "fibBank") {
      bank = shuffle(blanks.map(function (b) { return b.ans; }).concat(item.extra || []));
      bankEl = h("div", { class: "xbank", "aria-label": "Word box" });
      box.appendChild(bankEl); drawBank();
      box.appendChild(h("p", { class: "xnote" }, "Select a word to place it in the next empty blank. Select a filled blank to return its word to the box."));
    }
    return { collect: function (cb) {
      if (pl) pl.stop();
      var right = 0;
      blanks.forEach(function (b) {
        var v = (kind === "fibBank" ? b.el.dataset.v : b.el.value).trim(), ok = v.toLowerCase() === b.ans.toLowerCase();
        b.el.classList.add(ok ? "ok" : "bad"); b.el.disabled = true;
        if (ok) right++; else b.el.insertAdjacentElement("afterend", h("span", { class: "xans" }, b.ans));
      });
      if (bankEl) bankEl.remove();
      cb({ score: right / blanks.length, review: h("div", null, p, h("p", { class: "xnote" }, right + " of " + blanks.length + " blanks correct. The correct word is shown after each wrong blank."), item.explain ? part("Why", h("p", { class: "model" }, item.explain)) : null) });
    } };
  }

  function runReorder(task, item, box) {
    var n = item.paras.length, src, tgt = [], locked = false;
    do { src = shuffle(item.paras.map(function (_, i) { return i; })); } while (src.every(function (v, i) { return v === i; }));
    var sEl = h("div", { class: "xpanel" }), tEl = h("div", { class: "xpanel" });
    var wrap = h("div", { class: "xsplit two" }, h("div", null, h("div", { class: "xhead" }, "Source"), sEl), h("div", null, h("div", { class: "xhead" }, "Target"), tEl));
    function draw() {
      sEl.textContent = ""; tEl.textContent = "";
      src.forEach(function (pi, i) { sEl.appendChild(h("button", { type: "button", class: "xpara", disabled: locked, onclick: function () { src.splice(i, 1); tgt.push(pi); draw(); } }, item.paras[pi])); });
      tgt.forEach(function (pi, i) {
        var row = h("div", { class: "xpara in" + (locked ? (pi === i ? " ok" : " bad") : "") }, h("span", null, item.paras[pi]),
          locked ? null : h("span", { class: "xmv" },
            h("button", { type: "button", "aria-label": "Move up", disabled: i === 0, onclick: function () { tgt.splice(i - 1, 0, tgt.splice(i, 1)[0]); draw(); } }, "▲"),
            h("button", { type: "button", "aria-label": "Move down", disabled: i === tgt.length - 1, onclick: function () { tgt.splice(i + 1, 0, tgt.splice(i, 1)[0]); draw(); } }, "▼"),
            h("button", { type: "button", "aria-label": "Move back to source", onclick: function () { src.push(tgt.splice(i, 1)[0]); draw(); } }, "◀")));
        tEl.appendChild(row);
      });
      if (!tgt.length) tEl.appendChild(h("p", { class: "xnote" }, "Select a sentence on the left to move it here."));
    }
    box.appendChild(wrap); draw();
    return { collect: function (cb) {
      tgt = tgt.concat(src); src = []; locked = true; draw();
      var pairs = 0; for (var i = 0; i < n - 1; i++) if (tgt[i + 1] === tgt[i] + 1) pairs++;
      cb({ score: pairs / (n - 1), review: h("div", null, part("Your order", tEl), h("p", { class: "xnote" }, pairs + " of " + (n - 1) + " neighbouring pairs correct."),
        part("Correct order", h("ol", { class: "plain num" }, item.paras.map(function (t) { return h("li", null, t); }))), item.explain ? part("Why", h("p", { class: "model" }, item.explain)) : null) });
    } };
  }

  function runHiw(task, item, box) {
    var toks = [], spoken = "", locked = false;
    item.text.split(/(\[\[.+?\]\])/g).forEach(function (prt) {
      var m = prt.match(/^\[\[(.+?)\|(.+?)\]\]$/);
      if (m) { toks.push({ w: m[2], wrong: true, real: m[1] }); spoken += m[1]; return; } // [[spoken|shown]]
      spoken += prt;
      prt.split(/(\s+)/).forEach(function (w) { if (w.trim()) toks.push({ w: w, plain: !/[A-Za-z0-9]/.test(w) }); });
    });
    var pl = player({ audio: spoken }, 7), p = h("p", { class: "xhiw" });
    toks.forEach(function (t) {
      if (t.plain) { if (p.lastChild && p.lastChild.nodeType === 3) p.removeChild(p.lastChild); p.appendChild(document.createTextNode(t.w + " ")); return; }
      t.el = h("span", { role: "button", tabindex: "0", "aria-pressed": "false" }, t.w);
      var toggle = function () { if (locked) return; t.sel = !t.sel; t.el.classList.toggle("sel", t.sel); t.el.setAttribute("aria-pressed", t.sel ? "true" : "false"); };
      t.el.addEventListener("click", toggle);
      t.el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      p.appendChild(t.el); p.appendChild(document.createTextNode(" "));
    });
    box.appendChild(pl.el); box.appendChild(p);
    return { collect: function (cb) {
      pl.stop(); locked = true;
      var hit = 0, fa = 0, total = 0;
      toks.forEach(function (t) {
        if (t.plain) return;
        t.el.classList.remove("sel"); t.el.removeAttribute("tabindex");
        if (t.wrong) { total++; if (t.sel) { hit++; t.el.classList.add("ok"); } else t.el.classList.add("miss"); t.el.insertAdjacentElement("afterend", h("sup", null, t.real)); }
        else if (t.sel) { fa++; t.el.classList.add("bad"); }
      });
      cb({ score: Math.max(0, hit - fa) / total, review: h("div", null, p, h("p", { class: "xnote" }, hit + " of " + total + " found" + (fa ? ", " + fa + " wrong selection" + (fa > 1 ? "s" : "") : "") + ". The word the speaker said is shown after each changed word.")) });
    } };
  }

  function runWfd(task, item, box) {
    var pl = player(item, 7), inp = h("textarea", { class: "xta short", autocomplete: "off", autocorrect: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Your response" });
    box.appendChild(pl.el); box.appendChild(inp);
    return { collect: function (cb) {
      pl.stop();
      var target = words(item.audio), mine = words(inp.value), pool = {}, right = 0;
      mine.forEach(function (w) { pool[w] = (pool[w] || 0) + 1; });
      var diff = h("p", { class: "xdiff model" }, target.map(function (w) { var ok = pool[w] > 0; if (ok) { pool[w]--; right++; } return h("span", { class: ok ? "ok" : "bad" }, w); }));
      cb({ score: right / target.length, review: h("div", null, part("Your response", h("p", { class: "model mine" }, inp.value.trim() || "(no response)")),
        part("The sentence", h("div", null, h("p", { class: "model" }, item.audio), diff)), h("p", { class: "xnote" }, right + " of " + target.length + " words correct. Words you missed are in red.")) });
    } };
  }
  var RUN = { speak: runSpeak, write: runWrite, mcq: runMcq, fibSelect: runFib, fibBank: runFib, fibType: runFib, reorder: runReorder, hiw: runHiw, wfd: runWfd };

  /* ---------- exam shell ---------- */
  function shell(o) { // title, right, body, left:{label,fn}, next:{label,fn}
    leave(); document.body.classList.add("exam");
    var clock = h("b", null, ""), clockWrap = h("span", { class: "xclock", hidden: true }, "Time Remaining ", clock);
    var nextBtn = o.next ? h("button", { type: "button", class: "xbtn", onclick: o.next.fn }, o.next.label) : null;
    app.textContent = "";
    app.appendChild(h("div", { class: "x" },
      h("header", { class: "xtop" }, h("div", { class: "xt1" }, h("span", { class: "xbrand" }, "NextGen Nurses"), " PTE Academic Practice", o.title ? h("small", null, o.title) : null),
        h("div", { class: "xt2" }, clockWrap, o.right ? h("span", null, o.right) : null)),
      h("div", { class: "xbody" }, o.body),
      h("footer", { class: "xbot" }, o.left ? h("button", { type: "button", class: "xbtn alt", onclick: o.left.fn }, o.left.label) : h("span"), nextBtn || h("span"))));
    window.scrollTo(0, 0);
    return {
      countdown: function (sec) { clockWrap.hidden = false; countdown(sec, function (left) { clock.textContent = "00:" + mmss(left); }, function () { if (nextBtn) nextBtn.click(); }); },
      elapsed: function () { clockWrap.hidden = false; clockWrap.firstChild.nodeValue = "Time on item "; var t0 = Date.now(); var iv = setInterval(function () { clock.textContent = "00:" + mmss((Date.now() - t0) / 1000); }, 500); clock.textContent = "00:00:00"; onLeave(function () { clearInterval(iv); }); }
    };
  }
  function home() { leave(); releaseMic(); location.hash = "#/"; if (location.hash === "#/") viewHome(); }

  // Speaker and microphone check, once per visit. The Start click also unlocks audio on phones.
  function equipment(then) {
    if (checked) { then(); return; }
    var micSt = h("span", { class: "xnote" }, canRecord() ? "Not enabled yet." : "This browser cannot record audio. Speaking items will be timed only.");
    var sp = h("button", { type: "button", class: "xbtn2", onclick: function () { beep(); speak("This is a sound check for your practice test.", function (ok) { spSt.textContent = ok ? "Did you hear the voice? If not, turn up your volume." : "This device could not play a voice. Transcripts will be shown instead."; }); } }, "Play test sound");
    var spSt = h("span", { class: "xnote" }, synth ? "" : "This browser has no built-in voice. Transcripts will be shown instead.");
    var mc = h("button", { type: "button", class: "xbtn2", disabled: !canRecord(), onclick: function () {
      micSt.textContent = "Waiting for permission…";
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) { mic = s; micSt.textContent = "Microphone is on."; mc.disabled = true; }, function () { micSt.textContent = "Microphone was blocked. Speaking items will be timed only."; });
    } }, "Turn on microphone");
    shell({ title: "Equipment check", body: h("div", null,
        h("p", { class: "xinstr" }, "Before you begin, check your speaker and microphone. Use headphones with a microphone if you have them, and sit somewhere quiet."),
        h("div", { class: "xbox wide" }, h("div", { class: "xhead" }, "1. Speaker"), h("div", { class: "xrow" }, sp, spSt)),
        h("div", { class: "xbox wide" }, h("div", { class: "xhead" }, "2. Microphone"), h("div", { class: "xrow" }, mc, micSt)),
        h("p", { class: "xnote" }, "As in the real test, recordings play once, timers start by themselves and you cannot go back to an earlier item. Your recordings stay on this device.")),
      left: { label: "Exit", fn: home },
      next: { label: "Start", fn: function () { checked = true; try { if (synth) { var u = new SpeechSynthesisUtterance(" "); u.volume = 0; synth.speak(u); } } catch (e) {} then(); } } });
  }

  function itemScreen(task, idx, label, right, exitLabel, onResult) {
    var item = task.items[idx], box = h("div"), busy = false, runner;
    box.appendChild(h("p", { class: "xinstr" }, INSTR[task.id]));
    var sh = shell({ title: label, right: right, body: box, left: { label: exitLabel, fn: home }, next: { label: "Next", fn: function () {
      if (busy) return; busy = true;
      runner.collect(function (res) { leave(); onResult(res); });
    } } });
    runner = RUN[task.kind](task, item, box, sh);
    if (task.kind !== "write") sh.elapsed();
  }

  function selfMark(task, idx, res, onSaved) {
    if (res.zero) { save(task.id, idx, 0); return h("p", { class: "xnote" }, "No response was given, so this item is marked 0%."); }
    var boxes = [], out = h("span", { class: "xnote" });
    var ul = h("ul", { class: "xchecks" }, res.self.map(function (t) { var cb = h("input", { type: "checkbox" }); boxes.push(cb); return h("li", null, h("label", null, cb, h("span", null, t))); }));
    return h("div", { class: "xbox wide" }, h("div", { class: "xhead" }, "Mark yourself: tick what your response achieved"), ul,
      h("div", { class: "xrow" }, h("button", { type: "button", class: "xbtn2", onclick: function () {
        var s = (res.base || 0) + (1 - (res.base || 0)) * (boxes.filter(function (b) { return b.checked; }).length / (boxes.length || 1));
        save(task.id, idx, s); res.score = s; out.textContent = "Saved: " + pct(s); if (onSaved) onSaved(s);
      } }, "Save my mark"), out));
  }

  /* ---------- practice by question type ---------- */
  function practice(task, idx) {
    equipment(function () {
      itemScreen(task, idx, task.name, "Item " + (idx + 1) + " of " + task.items.length, "Save & Exit", function (res) {
        if (res.score != null) save(task.id, idx, res.score);
        var last = idx >= task.items.length - 1;
        shell({ title: task.name + " · Answer review", right: "Item " + (idx + 1) + " of " + task.items.length,
          body: h("div", null, res.score != null ? h("p", { class: "xscore" }, "Score for this item: " + pct(res.score)) : null, res.review, res.score == null ? selfMark(task, idx, res) : null),
          left: { label: "Exit", fn: home },
          next: last ? { label: "Finish", fn: home } : { label: "Next item", fn: function () { location.hash = "#/t/" + task.id + "/" + (idx + 1); } } });
      });
    });
  }

  /* ---------- estimated scores (a guide only, not official PTE scores) ---------- */
  // Like the real test, many items count towards two skills.
  var CONTRIB = { ra: ["speaking", "reading"], rs: ["speaking", "listening"], di: ["speaking"], rl: ["speaking", "listening"], asq: ["speaking", "listening"], rts: ["speaking"], sgd: ["speaking", "listening"],
    swt: ["writing", "reading"], we: ["writing"], rwfib: ["reading", "writing"], rmcm: ["reading"], ro: ["reading"], rfib: ["reading"], rmcs: ["reading"],
    sst: ["listening", "writing"], lmcm: ["listening"], lfib: ["listening", "writing"], hcs: ["listening", "reading"], lmcs: ["listening"], smw: ["listening"], hiw: ["listening", "reading"], wfd: ["listening", "writing"] };
  var TARGET = { overall: 63, listening: 58, reading: 59, writing: 60, speaking: 76 };
  function estimate(seq) {
    var by = {}, out = { skills: {}, overall: null, marked: 0, total: seq.length };
    D.skills.forEach(function (sk) { by[sk.id] = { n: 0, sum: 0, total: 0 }; });
    seq.forEach(function (s) {
      var v = (store.p[s.task.id] || {})[s.idx]; if (v != null) out.marked++;
      (CONTRIB[s.task.id] || [s.task.skill]).forEach(function (sk) { by[sk].total++; if (v != null) { by[sk].n++; by[sk].sum += v; } });
    });
    var all = [];
    D.skills.forEach(function (sk) {
      var b = by[sk.id], sc = b.n ? Math.round(10 + 80 * (b.sum / b.n)) : null;
      out.skills[sk.id] = { score: sc, n: b.n, total: b.total }; if (sc != null) all.push(sc);
    });
    if (all.length === D.skills.length) out.overall = Math.round(all.reduce(function (a, b) { return a + b; }, 0) / all.length);
    return out;
  }
  function scoreTable(e) {
    function row(name, sc, target, extra) {
      var met = sc == null ? "–" : sc >= target ? "✓ Met" : "✗ " + (target - sc) + " below";
      return h("tr", null, h("td", null, name), h("td", null, h("b", null, sc == null ? "–" : sc)), h("td", null, target), h("td", { class: sc == null ? "" : sc >= target ? "xmet" : "xmiss" }, met), h("td", null, extra));
    }
    return h("table", { class: "xtable" },
      h("thead", null, h("tr", null, h("th", null, "Skill"), h("th", null, "Estimated score"), h("th", null, "NMBA target"), h("th", null, "Result"), h("th", null, "Items marked"))),
      h("tbody", null, row("Overall", e.overall, TARGET.overall, e.marked + " of " + e.total),
        D.skills.map(function (sk) { var x = e.skills[sk.id]; return row(sk.name, x.score, TARGET[sk.id], x.n + " of " + x.total); })));
  }

  /* ---------- full practice tests ---------- */
  function runSet(k) {
    var seq = setSeq(k), st = store.sets[k] || { pos: 0 }, results = [];
    if (st.pos >= seq.length) st = { pos: 0 };
    store.sets[k] = st; persist();
    function intro(pos, go) {
      var cur = PARTS[seq[pos].task.skill], prev = pos ? PARTS[seq[pos - 1].task.skill] : null;
      if (cur === prev) { go(); return; }
      shell({ title: "Practice Test " + k, body: h("div", { class: "xcenter" }, h("h2", null, cur), h("p", null, pos === 0 && st.pos === 0 ? "This practice test has " + seq.length + " items in three parts and takes about two hours. You can save and exit at any time and continue later from the same item." : "Select Next when you are ready to continue."),
          h("p", { class: "xnote" }, "Marks are shown only when you finish the test.")),
        left: { label: "Save & Exit", fn: home }, next: { label: "Next", fn: go } });
    }
    function step() {
      var pos = st.pos;
      if (pos >= seq.length) { finish(); return; }
      intro(pos, function () {
        var s = seq[pos];
        itemScreen(s.task, s.idx, "Practice Test " + k + " · " + s.task.name, "Item " + (pos + 1) + " of " + seq.length, "Save & Exit", function (res) {
          if (res.score != null) save(s.task.id, s.idx, res.score);
          results[pos] = res; st.pos = pos + 1; persist(); step();
        });
      });
    }
    function finish() {
      st.done = true; persist(); releaseMic(); track("PTE set finished", { set: k });
      var table = h("div");
      function drawTable() {
        table.textContent = "";
        table.appendChild(scoreTable(estimate(seq)));
      }
      drawTable();
      var list = seq.map(function (s, i) {
        var res = results[i], v = (store.p[s.task.id] || {})[s.idx];
        var sum = h("summary", null, (i + 1) + ". " + s.task.name, h("span", { class: "xtag" }, v != null ? pct(v) : res ? "Mark yourself" : "Not available"));
        if (!res) return h("details", { class: "xitem" }, sum, h("p", { class: "xnote" }, "This item was answered in an earlier sitting, so its review is no longer available." + (v != null ? " Your saved mark is " + pct(v) + "." : "")));
        return h("details", { class: "xitem" }, sum, res.review, res.score == null ? selfMark(s.task, s.idx, res, function (sc) { sum.lastChild.textContent = pct(sc); drawTable(); }) : null);
      });
      shell({ title: "Practice Test " + k + " · Results", body: h("div", null,
          h("p", { class: "xinstr" }, "You have finished Practice Test " + k + ". Reading and most Listening items are marked automatically. Open each Speaking and Writing item, compare your response with the sample and mark yourself. Your estimated scores update as you mark."),
          table, h("p", { class: "xnote" }, "Estimated scores are a guide only. They convert your practice marks to the 10 to 90 scale, and Speaking and Writing depend on how you mark yourself, so they are not official PTE scores. The overall estimate appears once every skill has marked items. Recordings are kept only until you leave this page."), list),
        left: { label: "Exit", fn: home }, next: { label: "Finish", fn: home } });
    }
    equipment(step);
  }

  /* ---------- dashboard ---------- */
  function viewHome() {
    leave(); releaseMic(); document.body.classList.remove("exam");
    document.title = "PTE Academic Practice · NextGen Nurses";
    var targets = [["Overall", 63], ["Listening", 58], ["Reading", 59], ["Writing", 60], ["Speaking", 76]], total = 0, done = 0;
    var sets = [];
    for (var k = 1; k <= NSETS; k++) (function (k) {
      var st = store.sets[k] || { pos: 0 }, seq = setSeq(k), e = estimate(seq);
      var status = st.done ? (e.overall != null ? "Completed · estimated overall " + e.overall + (e.overall >= TARGET.overall ? " ✓" : "") : "Completed · mark your Speaking and Writing items") : st.pos ? "In progress · item " + (st.pos + 1) + " of " + PER_SET : "Not started";
      sets.push(h("a", { class: "card", href: "#/set/" + k }, h("h3", null, "Practice Test " + k), h("p", { class: "cm" }, PER_SET + " items · about 2 hours"),
        h("div", { class: "cp" }, h("div", { class: "bar" }, h("i", { style: "width:" + ((st.done ? PER_SET : st.pos) / PER_SET) * 100 + "%" })), h("span", null, status))));
    })(k);
    var sections = D.skills.map(function (sk) {
      return h("section", { class: "skill" }, h("h2", null, sk.name, h("span", null, sk.blurb)),
        h("div", { class: "cards" }, D.tasks.filter(function (t) { return t.skill === sk.id; }).map(function (t) {
          var s = stat(t); total += s.total; done += s.done;
          return h("a", { class: "card", href: "#/t/" + t.id + "/" + Math.min(s.done, s.total - 1) }, h("h3", null, t.name), h("p", { class: "cm" }, t.meta.slice(0, 2).join(" · ")),
            h("div", { class: "cp" }, h("div", { class: "bar" }, h("i", { style: "width:" + (s.done / s.total) * 100 + "%" })), s.done + "/" + s.total + (s.done ? " · " + pct(s.avg) : "")));
        })));
    });
    app.textContent = "";
    app.appendChild(h("header", { class: "hero" }, h("div", { class: "wrap" },
      h("div", { class: "eyebrow" }, "PTE Academic · member practice"),
      h("h1", null, NSETS + " full practice tests, ", h("em", null, "in test conditions.")),
      h("p", null, total.toLocaleString("en-AU") + " questions across all 22 question types. Sit a full practice test in an exam-style screen, or drill one question type at a time."),
      h("div", { class: "targets", role: "group", "aria-label": "NMBA minimum PTE Academic scores" }, targets.map(function (t) { return h("div", null, h("b", null, t[1]), h("span", null, t[0])); })),
      h("p", { class: "note" }, "NMBA minimum scores for tests taken on or after 23 April 2026. Always confirm on ",
        h("a", { href: "https://www.ahpra.gov.au/Registration/Registration-Standards/English-language-skills/Accepted-English-language-tests.aspx", target: "_blank", rel: "noopener" }, "Ahpra's accepted English tests page"), " before you book."))));
    app.appendChild(h("div", { class: "wrap main" },
      h("div", { class: "promo" }, h("div", null, h("b", null, "Keep this page"), h("span", { class: "muted small" }, "This address is your access to the app. Bookmark it or add it to your home screen, and please do not share it.")),
        h("button", { class: "btn btn-line btn-sm", type: "button", onclick: function () { try { navigator.clipboard.writeText(location.href.split("#")[0]); this.textContent = "Link copied"; } catch (e) {} } }, "Copy my link")),
      h("section", { class: "skill" }, h("h2", null, "Full practice tests", h("span", null, "Speaking and Writing, then Reading, then Listening, marked at the end.")), h("div", { class: "cards" }, sets)),
      h("div", { class: "overall" }, h("b", null, "Practise by question type: " + done + " of " + total + " done"), h("div", { class: "bar" }, h("i", { style: "width:" + (done / total) * 100 + "%" })),
        done ? h("button", { class: "btn btn-line btn-sm", type: "button", onclick: function () { if (!confirm("Clear all saved progress on this device?")) return; store = { p: {}, sets: {} }; persist(); viewHome(); } }, "Reset progress") : null),
      sections,
      h("p", { class: "muted small" }, "Speaking items need a microphone. Listening items use your device's built-in voice, so the accent varies between phones and computers. Chrome, Edge and Safari work best.")));
    window.scrollTo(0, 0);
  }

  function route() {
    var hs = location.hash || "", m = hs.match(/^#\/t\/([a-z]+)\/(\d+)/), s = hs.match(/^#\/set\/(\d+)/), task = m && TASKS[m[1]];
    if (task) { document.title = task.name + " · PTE practice"; practice(task, Math.min(parseInt(m[2], 10), task.items.length - 1)); }
    else if (s && +s[1] >= 1 && +s[1] <= NSETS) { document.title = "Practice Test " + s[1] + " · PTE practice"; runSet(+s[1]); }
    else viewHome();
  }
  addEventListener("hashchange", route);
  addEventListener("pagehide", function () { leave(); releaseMic(); });
  route();
})();
