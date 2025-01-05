const express=require("express");
const bodyParser =require("body-parser");
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const app= express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser :true,useUnifiedTopology: true})
    .then(() =>console.log('Connected to MongoDB'))
    .catch((err)=>console.error('Database connecting error:' ,err));

module.exports=app;


