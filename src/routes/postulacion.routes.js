// Importa el módulo 'express' para crear las rutas
import express from "express"

// Importa el controlador de postulantes
import postulacionController  from '../controllers/postulacionController.js';

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los postulantes
router.get('/', postulacionController.getPostulantes);
router.post('/', postulacionController.createPostulante);

// Exporta el enrutador
module.exports = router;