import 'dotenv/config'
import app from './app.js'
import { configEnv } from './configEnv.js';

app.listen(configEnv.PORT)
console.log('server on port', configEnv.PORT)

