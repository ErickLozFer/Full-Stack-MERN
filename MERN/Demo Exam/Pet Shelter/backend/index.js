//Importando librerías
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//Importando rutas
import * as petRoutes from "./routes/pets.routes.js";


//Creando el servidor
const app = express();

//Configuración del servidor
app.use(cors());
app.use(express.json());
app.use(petRoutes.petRouter);
app.listen(8080);

//Conectando el servidor con MongoDB
mongoose.connect("mongodb+srv://Erick:examencore@exam.uyp3eed.mongodb.net/PetsSchelter")
    .then(() => console.log("DB conectada: [puerto 8080]"))
    .catch((e) => console.log("Error", e));