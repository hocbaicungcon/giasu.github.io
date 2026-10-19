"""Run core/mtef.py (read-only) on every MathType object of the given docx files; print JSON lines {file, name, ok, latex|error}."""
import sys, json, zipfile, pathlib, re
root = pathlib.Path(__file__).resolve().parents[2]
if not (root / 'core' / 'mtef.py').exists():
    fallback = pathlib.Path('/Users/phuongphan/GitHub/latex_bank')
    if (fallback / 'core' / 'mtef.py').exists():
        root = fallback
sys.path.insert(0, str(root))
from core import mtef
out = []
for path in sys.argv[1:]:
    try:
        z = zipfile.ZipFile(path)
    except Exception:
        continue
    names = sorted(n for n in z.namelist() if re.match(r'word/embeddings/oleObject\d+\.bin$', n))
    for n in names:
        try:
            latex, inline = mtef.ole_to_latex(z.read(n))
            rec = {'ok': True, 'latex': latex, 'inline': inline}
        except Exception as e:   # any failure = equation left untouched
            rec = {'ok': False}
        rec.update(file=path, name=n)
        out.append(rec)
json.dump(out, sys.stdout, ensure_ascii=True)
