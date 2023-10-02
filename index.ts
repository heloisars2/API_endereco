import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import enderecoRoutes from './src/routes/endereco.routes';
import bairroRoutes from './src/routes/bairro.routes';
import cidadeRoutes from './src/routes/cidade.routes';
import router from './src/routes/endereco.routes';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/seu-banco-de-dados';

app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
    const app = express();
    const port = 3000;

    app.use(express.json())
    app.use(router);
    app.listen(port, () =>{
      console.log('Server s running on http://localhost:${port}');
    })
  })
  .catch((err) => {
    console.error('Erro ao conectar com o MongoDB:', err);
    process.exit(1);
  });

app.use('/enderecos', enderecoRoutes);
app.use('/bairros', bairroRoutes);
app.use('/cidades', cidadeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
