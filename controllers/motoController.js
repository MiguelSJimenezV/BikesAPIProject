import Moto from "../models/Moto.js";

export const getAllMotos = async (req, res) => {
  try {
    const motos = await Moto.find().populate("categoria");
    res.json(motos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMotoById = async (req, res) => {
  try {
    const moto = await Moto.findById(req.params.id).populate("categoria");
    if (!moto) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }
    res.json(moto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMoto = async (req, res) => {
  const { marca, modelo, cilindrada, año, color, estado, categoria } = req.body;

  try {
    const newMoto = new Moto({
      marca,
      modelo,
      cilindrada,
      año,
      color,
      estado,
      categoria,
    });
    await newMoto.save();
    res.status(201).json(newMoto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMoto = async (req, res) => {
  try {
    const moto = await Moto.findById(req.params.id);
    if (!moto) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }
    Object.assign(moto, req.body);
    const motoActualizada = await moto.save();
    res.json(motoActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMoto = async (req, res) => {
  try {
    const moto = await Moto.findByIdAndDelete(req.params.id);
    if (!moto) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }
    res.json({ message: "Moto eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMotosByCategoria = async (req, res) => {
  try {
    const motos = await Moto.find({
      categoria: req.params.categoriaId,
    }).populate("categoria");
    res.json(motos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
