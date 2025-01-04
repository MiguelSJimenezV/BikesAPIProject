import express from "express";
import {
  registerUser,
  loginUser,
  deleteUser,
  assignMotoToUser,
  getAllUsers,
} from "../controllers/userController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/:id", authenticateToken, deleteUser);
router.post("/assign", authenticateToken, assignMotoToUser);
router.get("/", authenticateToken, getAllUsers);

export default router;
