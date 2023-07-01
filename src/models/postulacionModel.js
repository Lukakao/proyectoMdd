// Importa el módulo 'mongoose' para crear la conexión a la base de datos
import mongoose from 'mongoose';

// Crea el esquema de la colección 'postulante'
const postulanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        },
    edad: {
        type: Number,
        required: true,
        },
    telefono: {
        type: String,
        required: true,
        unique: true,
        },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    AntecedenteSalud: {
        type: String,
        required: true,
    },
});

// Crea el modelo de datos 'Postulante' a partir del esquema 'postulanteSchema'
export const Postulante = mongoose.model('Postulante', postulanteSchema);

