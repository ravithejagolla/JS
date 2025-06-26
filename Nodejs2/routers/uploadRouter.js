import { Router } from 'express'
import { uploadCSV } from '../config/multer.js'
import { uploadCSVHandler } from '../controllers/uploadController.js'

const uploadrouter = Router()
uploadrouter.post('/csv', uploadCSV.single('file'), uploadCSVHandler)
export default uploadrouter