import express from 'express';
import cors from 'cors';
import { newsController } from '../news/controllers/news-controller';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/news', newsController.get);

export default router;
