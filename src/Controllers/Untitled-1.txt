const express = require("express");
const mongoose =require("mongoose");
const app = express();
app.use(express.json());

mongoose .connect("mongodb://")
.then (()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});
