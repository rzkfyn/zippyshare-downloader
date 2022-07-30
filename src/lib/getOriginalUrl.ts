import * as cheerio from 'cheerio';

const getOriginalUrl = (html: string): string | undefined => {
  const $ = cheerio.load(html);
  const originalUrl = $('head meta[property=og:url]').attr('content')?.replace('//', 'https://');
  return originalUrl;
}

export default getOriginalUrl;
