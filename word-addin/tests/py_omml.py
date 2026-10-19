import sys, json, pathlib
root = pathlib.Path(__file__).resolve().parents[2]
if not (root / 'core' / 'omml.py').exists():
    fallback = pathlib.Path('/Users/phuongphan/GitHub/latex_bank')
    if (fallback / 'core' / 'omml.py').exists():
        root = fallback
sys.path.insert(0, str(root))
from core import omml
NS = 'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"'
out = []
for x in json.load(open(sys.argv[1])):
    try:
        out.append(omml.omml_to_latex(x)[0])
    except Exception as e:
        out.append('ERR:' + str(e))
json.dump(out, sys.stdout)
