// Importa el módulo 'express' para crear las rutas
import express from "express"

// Importa el controlador de postulantes
import { createPostulante, getPostulantes } from '../controllers/postulacionController.js';

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los postulantes
router.get('/', getPostulantes);
router.post('/', createPostulante);

// Exporta el enrutador
export default router