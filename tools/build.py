"""Synchronize shared HTML and build the upload-ready static website."""
from pathlib import Path
import re, shutil
ROOT=Path(__file__).resolve().parent.parent
HEADER=(ROOT/'header.html').read_text().strip()
FOOTER=(ROOT/'footer.html').read_text().strip()
for page in ROOT.glob('*.html'):
 if page.name in ('header.html','footer.html','404.html'):continue
 text=page.read_text()
 for name,content in [('header',HEADER),('footer',FOOTER)]:
  block=f'<!-- shared:{name}:start -->\n<div id="site-{name}">\n{content}\n</div>\n<!-- shared:{name}:end -->'
  pattern=rf'<!-- shared:{name}:start -->.*?<!-- shared:{name}:end -->'
  if re.search(pattern,text,re.S):text=re.sub(pattern,lambda m:block,text,flags=re.S)
  else:
   placeholder=f'<div id="site-{name}"></div>'
   assert placeholder in text,(page,name)
   text=text.replace(placeholder,block,1)
 page.write_text(text)
# Only public HTML/assets are included, with no backup or development files.
out=ROOT/'dist';out.mkdir(exist_ok=True)
for page in ROOT.glob('*.html'):shutil.copy2(page,out/page.name)
shutil.copytree(ROOT/'assets',out/'assets',dirs_exist_ok=True,ignore=shutil.ignore_patterns('.DS_Store'))
print('Built',len(list(out.glob('*.html'))),'HTML files and assets in',out)
