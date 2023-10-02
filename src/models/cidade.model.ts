import mongoose, { Schema } from 'mongoose';

const cidadeSchema = new Schema({
  Nome: String,
  Estado: String,
});

export default mongoose.model('Cidade', cidadeSchema);
