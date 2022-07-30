import { Request, Response } from 'express';
import getFileUrl from '../src/zippyshare.js';

const homeHandler = (_: Request, res: Response) => {
  return res.status(200).render('index');
}

const downloadHandler = async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({
    status: 'Error',
    message: 'Url tidak boleh kosong!'
  });

  let downloadUrl;
  try {
    downloadUrl = await getFileUrl(url);
  } catch(e) {
    console.log(e);
    return res.status(500).json({
      status: 'Error',
      message: 'Internal server error'
    });
  }

  if (!downloadUrl) return res.status(400).json({
    status: 'Error',
    message: 'Gagal mendapatkan file, pastikan url yang diberikan valid!'
  });

  return res.status(200).json({
    status: 'Ok',
    data: {
      downloadUrl
    }
  });
}

export default {
  homeHandler,
  downloadHandler
}
