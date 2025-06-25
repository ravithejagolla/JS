import express from 'express';
import { errorHandler } from './errorhandler.js';

const app = express()

app.use(errorHandler)


app.listen(9999,()=>{
    console.log("Server Running on port 9999")
})