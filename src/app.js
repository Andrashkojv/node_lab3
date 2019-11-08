import express from 'express';
import apiRouter from './api';
import mongoose from "mongoose";

const app = express();



//параметри бази
const dbUrl = 'mongodb://localhost:27017/bookDB';
mongoose.connect (dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.catch(error=>{console.log(error)})
.then(()=>{console.log("DB connected")});

//додаткові методи для обробки запитів POST і PUT 
app.use(express.json());
app.use(express.urlencoded());
//роутер http://localhost:3000/api/ 
app.use('/api', apiRouter);

app.listen(3000);