import express from 'express';
import cidadeController from '../controllers/cidade.controller';

const router = express.Router();

router.get('/', cidadeController.getCidades);
router.post('/', cidadeController.createCidade);

export default router;
