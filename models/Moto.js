import mongoose from "mongoose";

const motoSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  cilindrada: { type: Number, required: true },
  año: { type: Number, required: true },
  color: { type: String, required: true },
  estado: { type: String, required: true },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
});

const Moto = mongoose.model("Moto", motoSchema);
export default Moto;
