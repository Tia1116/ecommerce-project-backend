const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const indexRouter = require('./routes/api/users');
const indexRouter = require('./routes/api/register');
const app=express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors())
app.use('/api',indexRouter)
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message ||"Internal Server Error"
    res.status(err.statusCode).json({
        message:err.message,
    })
})
app.listen(3000,()=>{
    console.log(`server started on 3000`)
})