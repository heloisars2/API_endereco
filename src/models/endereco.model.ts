import mongoose, { Schema } from 'mongoose';

const enderecoSchema = new Schema({
  Nome: String,
  Numero: Number,
  Complemento: String,
  Bairro: { type: Schema.Types.ObjectId, ref: 'Bairro' },
  Cidade: { type: Schema.Types.ObjectId, ref: 'Cidade' },
});

export default mongoose.model('Endereco', enderecoSchema);
