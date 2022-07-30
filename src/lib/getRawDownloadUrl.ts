import * as cheerio from 'cheerio';

const getRawDownloadURL = (html: string): string[] | undefined => {
  const $ = cheerio.load(html);
  const downloadEl = $('#dlbutton~script').html();
  const a = () => 1;
  const b = () => a() + 1;
  const c = () => b() + 1;
  let d: string | number = $('#omg').attr('class') as string;
  d = (parseInt(d) * 2) as number;

  if(!downloadEl) return undefined;

  return downloadEl.split(';')[5]
    .replace(`document.getElementById('dlbutton').href = `, '')
    .replace(/[+]/g, '')
    .replace('  a()  b()  c()  d  5/5', '')
    .split('"')
    .map(item => item.trim())
    .filter(item => item !== '' && item !== '}').concat([(a() + b() + c() + d + 5/5)].toString());
}

export default getRawDownloadURL;
