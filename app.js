import express from 'express';
import dotenv from 'dotenv'
import { connect } from 'mongoose';
import { userRouter } from './Routers/userRouters.js';
import { pageRouter } from './Routers/pageRouters.js';
import { venueRouter } from './Routers/venueRouters.js';
import { reservationRouter } from './Routers/reservationRouters.js';


const app = express();
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine", "ejs")

const PORT = process.env.SERVER_PORT
const URI = process.env.CONNECTION_STRING

app.use('/',userRouter)
app.use('/',pageRouter)
app.use('/',venueRouter)
app.use('/',reservationRouter)

app.get('/',(req,res)=>{
    res.send("server is up")
})


app.listen( PORT,()=>{
    console.log('server is up')

    connect(URI).then(()=>{
        console.log("connected to the mongodb")
    })
})