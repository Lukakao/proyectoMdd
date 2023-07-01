import {Router} from "express"
import { login, logout, register, prueba } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/prueba', prueba)

export default router