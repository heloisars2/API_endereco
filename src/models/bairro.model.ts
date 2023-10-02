import mongoose, { Schema } from 'mongoose';

const bairroSchema = new Schema({
  Nome: String,
});

export default mongoose.model('Bairro', bairroSchema);
