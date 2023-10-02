import express from 'express';
import enderecoController from '../controllers/endereco.controller';

const router = express.Router();

router.get('/', enderecoController.getEnderecos);
router.post('/', enderecoController.createEndereco);

export default router;
