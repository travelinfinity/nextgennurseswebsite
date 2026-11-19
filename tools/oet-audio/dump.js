// Builds manifest.json of every OET listening recording from the test files.
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const root = path.resolve(__dirname, "../..");
const dir = path.join(root, "g/Oq7mWv2KxR9cTpLd4sNe/tests");
const T = [];
global.OET_TEST = (t) => T.push(t);
fs.readdirSync(dir).filter(f => /^t\d+\.js$/.test(f)).sort().forEach(f => eval(fs.readFileSync(path.join(dir, f), "utf8")));
const VOICE_VERSION = "v1";
function segs(x) {
  return x.s.trim().split(/\n+/).map(l => {
    const m = l.match(/^([A-Z]):\s*(.*)$/);
    if (!m || !x.cast[m[1]]) throw new Error("Bad line in " + JSON.stringify(x.who) + ": " + l);
    return { k: m[1], g: x.cast[m[1]][0], t: m[2].trim() };
  });
}
const out = [];
T.sort((a, b) => a.n - b.n).forEach(t => {
  const p = String(t.n).padStart(2, "0");
  [["LA", "a"], ["LB", "b"], ["LC", "c"]].forEach(([part, s]) => (t[part] || []).forEach((x, i) => {
    const sg = segs(x);
    const key = crypto.createHash("sha1").update(VOICE_VERSION + JSON.stringify(sg)).digest("hex").slice(0, 16);
    out.push({ id: "t" + p + s + (i + 1), key, segs: sg });
  }));
});
fs.writeFileSync(path.join(__dirname, "manifest.json"), JSON.stringify(out, null, 1));
console.log(T.length + " tests, " + out.length + " recordings, " + out.reduce((a, r) => a + r.segs.reduce((b, s) => b + s.t.split(/\s+/).length, 0), 0) + " words");
