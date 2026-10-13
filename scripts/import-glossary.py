"""Read the provided workbook and export its master sheet; never modify the workbook."""
import json
from pathlib import Path
import openpyxl
ROOT = Path(__file__).resolve().parent.parent
book = openpyxl.load_workbook(ROOT / 'assets/danh_sach_thuat_ngu_toan.xlsx', read_only=True, data_only=True)
terms = []
for row in list(book['Tổng hợp tất cả'].values)[1:]:
    number, group, term, source, pages, definition = row[:6]
    if not term:
        continue
    terms.append(dict(id=f'excel-{number}', term=term.strip(), aliases=[], definition='' if definition in (None, '-') else definition.strip(), source=source or '', pages='' if pages in (None, '-') else pages, origin='workbook'))
output = ROOT / 'assets/data/math-glossary.json'
output.write_text(json.dumps(dict(source='assets/danh_sach_thuat_ngu_toan.xlsx', sheet='Tổng hợp tất cả', terms=terms), ensure_ascii=False, indent=2) + '\n')
print(f'Exported {len(terms)} terms, {sum(bool(t["definition"]) for t in terms)} definitions')
