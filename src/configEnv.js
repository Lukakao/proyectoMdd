//Importa el modulo 'path' para obtener la ruta absoluta del archivo .env
import { resolve } from 'path';

// Obtiene la ruta absoluta del archivo .env
const configEnv = () => {
  const envFilePath = resolve(__dirname, `.env`);
  // Carga las variables de entorno desde el archivo .env
  require('dotenv').config({ path: envFilePath });
    // Retorna un objeto con las variables de entorno
  return {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    DB_URL: process.env.DB_URL,
  };
};

export default { configEnv };