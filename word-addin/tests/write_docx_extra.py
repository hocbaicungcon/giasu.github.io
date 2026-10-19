import zipfile, sys, json, base64, re
src, d, out = sys.argv[1:4]
extra = json.load(open(d + '/extra.json'))
zin = zipfile.ZipFile(src)
zout = zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED)
for item in zin.infolist():
    data = zin.read(item.filename)
    if item.filename == 'word/document.xml': data = open(d + '/document.xml', 'rb').read()
    if item.filename == 'word/_rels/document.xml.rels':
        data = data.decode('utf8').replace('</Relationships>', ''.join(extra['rels']) + '</Relationships>').encode('utf8')
    if item.filename == '[Content_Types].xml':
        t = data.decode('utf8')
        for ext, ct in (('bin', 'application/vnd.openxmlformats-officedocument.oleObject'), ('png', 'image/png')):
            if 'Extension="%s"' % ext not in t: t = t.replace('<Default ', '<Default Extension="%s" ContentType="%s"/><Default ' % (ext, ct), 1)
        data = t.encode('utf8')
    zout.writestr(item, data)
for p in extra['parts']:
    zout.writestr(p['name'], base64.b64decode(p['b64']))
zout.close()
