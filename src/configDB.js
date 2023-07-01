// Importa el módulo 'mongoose' para crear la conexión a la base de datos
import mongoose from 'mongoose';

// Agregamos la configuración de las variables de entorno
import { configEnv } from "./configEnv.js"

console.log("configs", configEnv);


// Obtiene las variables de entorno
const { DB_URL } = configEnv();

// Opciones de configuración para la conexión a la base de datos
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};


export const connectDb = async () => {
	// Conecta a la base de datos
	const connection = await mongoose.connect(DB_URL, options)

	return connection
}