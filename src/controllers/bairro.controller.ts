import { Request, Response } from 'express';
import Bairro from '../models/bairro.model';
class BairroController {
  async getBairros(req: Request, res: Response) {
    try {
      const bairros = await Bairro.find();
      res.json(bairros);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar bairros.' });
    }
  }

  async createBairro(req: Request, res: Response) {
    try {
      const bairro = new Bairro(req.body);
      await bairro.save();
      res.status(201).json(bairro);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar bairro.' });
    }
  }
}

export default new BairroController();
