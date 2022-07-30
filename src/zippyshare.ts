import getHtmlContent from './lib/getHtmlContent.js';
import getOriginalUrl from './lib/getOriginalUrl.js';
import getRawDownloadURL from './lib/getRawDownloadUrl.js';
import createDownloadURL from './lib/createDownloadUrl.js';

const getFileUrl = async (url: string) => {
  const html = await getHtmlContent(url);

  const originalUrl = getOriginalUrl(html);
  const rawDownloadUrl = getRawDownloadURL(html);

  if (!originalUrl || !rawDownloadUrl) return undefined;

  const fileUrl = createDownloadURL(originalUrl, rawDownloadUrl);
  
  return fileUrl;
}

export default getFileUrl;