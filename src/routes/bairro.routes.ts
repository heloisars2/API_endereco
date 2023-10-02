import express from 'express';
import bairroController from '../controllers/bairro.controller';

const router = express.Router();

router.get('/', bairroController.getBairros);
router.post('/', bairroController.createBairro);

export default router;
