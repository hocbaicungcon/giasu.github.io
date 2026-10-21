import sys,json,subprocess,os
K=float(os.environ.get('K','1'))
# python mix.py video.mp4 audiodir out.mp4 start1 start2 ...  (keys in durations.json order)
v,ad,out=sys.argv[1:4];starts=[float(x) for x in sys.argv[4:]]
keys=list(json.load(open(f"{ad}/durations.json")).keys())
cmd=["ffmpeg","-y","-loglevel","error","-i",v]
for k in keys:cmd+=["-i",f"{ad}/{k}.wav"]
fl="".join(f"[{i+1}:a]atempo={K},adelay={int(s*1000)}|{int(s*1000)}[a{i}];" for i,s in enumerate(starts))
fl+="".join(f"[a{i}]" for i in range(len(keys)))+f"amix=inputs={len(keys)}:normalize=0[aout]"
subprocess.run(cmd+["-filter_complex",fl,"-map","0:v","-map","[aout]","-c:v","copy","-c:a","aac","-b:a","192k","-shortest",out],check=True)
