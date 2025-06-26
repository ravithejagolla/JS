import { Router } from 'express'
import { validateUser } from '../utils/validator.js'
import { registerUser } from '../controllers/userController.js'

const userrouter = Router()

userrouter.post('/register', validateUser, registerUser)

export default userrouter