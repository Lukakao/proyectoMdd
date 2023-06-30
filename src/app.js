import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js'
import cursosRoutes from "./routes/cursos.routes.js"

const app = express();

app.use(morgan("dev"))
app.use(express.json())

app.use("/api", authRoutes)
app.use("/cursos", cursosRoutes)

export default app;