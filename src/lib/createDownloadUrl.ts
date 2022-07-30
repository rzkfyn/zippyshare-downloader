const createDownloadURL = (originalUrl: string, rawURL: string[]) => {
  if (!rawURL) return undefined;

  let num: string | string[] | undefined = rawURL[1];

  if (!num) return undefined;

  num = num.replace(/[()]/g, '');
  num = num.split('%').filter(item => item != '');
  
  const prefix = `https://${originalUrl.split('/')[2]}`;

  return `${prefix}${rawURL[0]}${parseInt(num[0]) % parseInt(num[1]) + parseInt(rawURL[3])}${rawURL[2]}`;
}

export default createDownloadURL;
