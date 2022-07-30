import axios from 'axios';

const getHtmlContent = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
}

export default getHtmlContent;
