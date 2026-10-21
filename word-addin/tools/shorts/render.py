import sys,os,subprocess,shutil,concurrent.futures as cf
html,out,dur=sys.argv[1],sys.argv[2],float(sys.argv[3]);fps=30
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
d=f"/private/tmp/claude-501/-Users-phuongphan-GitHub-giasu-github-io/2781774f-9c0c-4568-9381-b235e071fba4/scratchpad/frames_{os.path.basename(out)}"
shutil.rmtree(d,ignore_errors=True);os.makedirs(d)
here=os.path.dirname(os.path.abspath(html));n=int(dur*fps)
def f(i):
    subprocess.run([CH,"--headless","--disable-gpu","--hide-scrollbars","--window-size=1080,1920",f"--screenshot={d}/f{i:04d}.png",f"file://{os.path.abspath(html)}?t={i/fps:.4f}"],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
with cf.ThreadPoolExecutor(10) as ex: list(ex.map(f,range(n)))
subprocess.run(["ffmpeg","-y","-loglevel","error","-framerate",str(fps),"-i",f"{d}/f%04d.png","-c:v","libx264","-pix_fmt","yuv420p","-crf","18","-movflags","+faststart",out],check=True)
print(out,n)
