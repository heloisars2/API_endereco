import { Request, Response } from 'express';
import Cidade from '../models/cidade.model';
class CidadeController {
  async getCidades(req: Request, res: Response) {
    try {
      const cidades = await Cidade.find();
      res.json(cidades);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar cidades.' });
    }
  }

  async createCidade(req: Request, res: Response) {
    try {
      const cidade = new Cidade(req.body);
      await cidade.save();
      res.status(201).json(cidade);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar cidade.' });
    }
  }
}

export default new CidadeController();
