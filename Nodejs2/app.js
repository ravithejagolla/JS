import env from 'dotenv'
env.config()
import express from 'express'
import { connect } from 'mongoose'
import authrouter from './routers/authRouter.js'
import userrouter from './routers/userRouter.js'
import uploadrouter from './routers/uploadRouter.js'


const app=express()


app.use('/api/auth', authrouter);
app.use('/api/users', userrouter);
app.use('/api/upload', uploadrouter);

const PORT=process.env.PORT
const MONGOURL=process.env.MONGOURL
app.listen(PORT,async()=>{
    try{
        await connect(MONGOURL)
        console.log("Mongodb Connected")
        console.log(`Serever Running on ${PORT}`)
    }catch(e){
        console.log(e)
        process.exit(1)

    }
})