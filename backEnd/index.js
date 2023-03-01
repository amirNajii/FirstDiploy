import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js'
import SignupRoute from './routes/SignupRoute.js'

const app=express()

mongoose.connect("mongodb://127.0.0.1:27017/toplearnCrud",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on("error",error=>console.log(error));
db.once("open",()=>console.log("db is connected.."))


// middlewares start//
app.use(cors());
app.use(express.json())

app.use(UserRoute);
 app.use(SignupRoute)





app.listen(5000,()=>{console.log('app is running on...5000');})