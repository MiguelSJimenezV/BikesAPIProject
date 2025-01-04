import Categoria from "../models/Categoria.js";

export const getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategoria = async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevaCategoria = new Categoria({ nombre });
    const categoriaGuardada = await nuevaCategoria.save();
    res.status(201).json(categoriaGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    Object.assign(categoria, req.body);
    const categoriaActualizada = await categoria.save();
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByIdAndDelete(req.params.id);
    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    res.status(200).json({ message: "Categoría eliminada" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
