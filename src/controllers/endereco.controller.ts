import { Request, Response } from 'express';
import Endereco from '../models/endereco.model';
class EnderecoController {
  async getEnderecos(req: Request, res: Response) {
    try {
      const enderecos = await Endereco.find().populate('Bairro Cidade');
      res.json(enderecos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar endereços.' });
    }
  }

  async createEndereco(req: Request, res: Response) {
    try {
      const endereco = new Endereco(req.body);
      await endereco.save();
      res.status(201).json(endereco);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar endereço.' });
    }
  }
}

export default new EnderecoController();
