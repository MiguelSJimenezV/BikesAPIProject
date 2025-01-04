import express from "express";
import {
  getAllMotos,
  getMotoById,
  createMoto,
  updateMoto,
  deleteMoto,
  getMotosByCategoria,
} from "../controllers/motoController.js";

const router = express.Router();

router.get("/", getAllMotos);
router.get("/:id", getMotoById);
router.get("/categoria/:categoriaId", getMotosByCategoria);
router.post("/", createMoto);
router.put("/:id", updateMoto);
router.delete("/:id", deleteMoto);

export default router;
