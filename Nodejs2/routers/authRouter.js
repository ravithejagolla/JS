import { Router } from 'express'
import { login, logout } from '../controllers/authController.js'

const authrouter=Router()

authrouter.post('/login', login)
authrouter.post('/logout', logout)

export default authrouter