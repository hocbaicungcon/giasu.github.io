"""python tts_short.py narr_x.py outdir  -> outdir/<key>.wav + durations.json (giọng phuong, như gen_video/common/tts.py)"""
import sys,json,subprocess,importlib.util
from pathlib import Path
from vieneu import Vieneu
spec=importlib.util.spec_from_file_location("n",sys.argv[1]);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
out=Path(sys.argv[2]);out.mkdir(parents=True,exist_ok=True)
V="phuong";CV=Path("/Users/phuongphan/GitHub/gen_video/tools/custom_voices")
tts=Vieneu();tts.add_voice(V,CV/f"{V}.wav",denoise=False)
sr=tts.sample_rate;r=2**(1/12);durs={}
for k,t in m.CLIPS:
    raw=out/f"{k}_raw.wav";tts.save(tts.infer(t,voice=V,temperature=0.8),str(raw))
    f=f"asetrate={sr*r},aresample=44100,atempo={1/r},atempo=1.15"
    subprocess.run(["ffmpeg","-v","error","-y","-i",str(raw),"-filter:a",f,"-ar","44100","-ac","2",str(out/f"{k}.wav")],check=True);raw.unlink()
    d=subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",str(out/f"{k}.wav")],capture_output=True,text=True).stdout
    durs[k]=round(float(d),2)
json.dump(durs,open(out/"durations.json","w"),indent=1);print(durs)
