# Generates OET listening MP3s with Kokoro (open-source TTS). Usage: python3 gen.py MODEL_DIR
import json, os, sys, subprocess, hashlib, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.abspath(os.path.join(here, "../.."))
outdir = os.path.join(root, "oet-audio"); mdir = sys.argv[1]
k = Kokoro(os.path.join(mdir, "kokoro-v1.0.onnx"), os.path.join(mdir, "voices-v1.0.bin"))
F = ["bf_emma", "af_heart", "bf_isabella", "af_bella", "bf_alice", "af_nicole"]
M = ["bm_george", "am_michael", "bm_lewis", "am_fenrir", "bm_fable", "am_puck"]
man = json.load(open(os.path.join(here, "manifest.json")))
clips_path = os.path.join(here, "clips.json")
clips = json.load(open(clips_path)) if os.path.exists(clips_path) else {}
def write_clips():
    json.dump(clips, open(clips_path, "w"))
    js = "/* OET listening recordings: id -> [file key, seconds]. Generated with Kokoro (open-source TTS). */\nwindow.OET_CLIPS = " + json.dumps({r["id"]: clips[r["key"]] and [r["key"], clips[r["key"]]] for r in man if r["key"] in clips}, separators=(",", ":")) + ";\n"
    open(os.path.join(root, "g/Oq7mWv2KxR9cTpLd4sNe/clips.js"), "w").write(js)
only = sys.argv[2] if len(sys.argv) > 2 else None
for r in man:
    if only and not r["id"].startswith(only): continue
    mp3 = os.path.join(outdir, r["key"] + ".mp3")
    if r["key"] in clips and os.path.exists(mp3): continue
    h = int(hashlib.md5(r["id"].encode()).hexdigest(), 16)
    voices, used = {}, {"f": 0, "m": 0}
    for s in r["segs"]:
        if s["k"] not in voices:
            pool = F if s["g"] == "f" else M
            voices[s["k"]] = pool[(h + used[s["g"]] * 2) % len(pool)]; used[s["g"]] += 1
    parts, sr = [], 24000
    for i, s in enumerate(r["segs"]):
        v = voices[s["k"]]
        a, sr = k.create(s["t"], voice=v, speed=1.0, lang="en-gb" if v.startswith("b") else "en-us")
        if i: parts.append(np.zeros(int(sr * 0.45), dtype=np.float32))
        parts.append(a.astype(np.float32))
    audio = np.concatenate([np.zeros(int(sr * 0.3), dtype=np.float32)] + parts + [np.zeros(int(sr * 0.3), dtype=np.float32)])
    wav = "/tmp/oet_tmp.wav"; sf.write(wav, audio, sr)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-ac", "1", "-ar", "24000", "-b:a", "40k", mp3], check=True)
    clips[r["key"]] = round(len(audio) / sr, 1); write_clips()
    print(r["id"], clips[r["key"]], flush=True)
write_clips(); print("done")
