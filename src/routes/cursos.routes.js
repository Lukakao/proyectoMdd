import { Router } from "express"
import { create, get, put } from '../controllers/cursos.controller.js'

const router = Router()

router.post('/', create)
router.put('/', put)
router.get('/', get)

export default router