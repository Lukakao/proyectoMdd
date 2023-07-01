// Importa el módulo 'express' para crear las rutas
import express from "express"

// Importa el enrutador de usuarios
import postulanteRoutes from '../postulacion.routes.js'

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use('/postulante', postulanteRoutes);

// Exporta el enrutador
module.exports = router;