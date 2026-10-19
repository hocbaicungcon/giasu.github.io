import zipfile, sys
src, doc, out = sys.argv[1:4]
zin = zipfile.ZipFile(src)
zout = zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    data = zin.read(item.filename)
    if item.filename == 'word/document.xml': data = open(doc, 'rb').read()
    zout.writestr(item, data)
zout.close()
