import { Router } from 'express';
import handler from '../handler/handler.js';

const router = Router();

router.get('/', handler.homeHandler);

router.post('/', handler.downloadHandler);

router.use((_, res) => res.status(404).render('404'));

export default router;
