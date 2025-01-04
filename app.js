import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import motoRoutes from "./routes/motoRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/motos", motoRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);
