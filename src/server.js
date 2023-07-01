// Importa el archivo 'configEnv.js' para cargar las variables de entorno
const { configEnv } = require('./configEnv.js').default; //transformarla
import { configEnv } from './configEnv.js.';

const indexRoutes = require('./routes/index.routes.js'); // Importa el enrutador principal

// Obtiene las variables de entorno
const { PORT } = configEnv();

// Importa el archivo 'configDB.js' para crear la conexiÃ³n a la base de datos
require('./configDB.js'); // transformarla
from './configDB.js';

// Importa el mÃ³dulo 'express' para crear la aplicaciÃ³n web
import { Express } from 'express';

// Crea una instancia de la aplicaciÃ³n
import app from 'express';

// Agrega el middleware para el manejo de datos en formato JSON
app.use(express.json());

// Define una ruta para la pÃ¡gina principal de la aplicaciÃ³n ('/')
// Esta ruta responde con un mensaje de "Hola Mundo" cuando se accede a ella
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.use('/api', indexRoutes);

// Inicia el servidor web en el puerto 3000
// La funciÃ³n de callback muestra un mensaje en la consola indicando que el servidor estÃ¡ en ejecuciÃ³n
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

