//import dorenv
require('dotenv').config()//load the environments
//import express
const express = require('express')
//import cors
const cors = require('cors')
//import router
const router = require('./routes')
//import mongodb connection file
require('./connection')

//create server 
const pfServer = express()
//to connect with frontend
pfServer.use(cors())

//parse - json()
pfServer.use(express.json())

//router
pfServer.use(router)


//static 
pfServer.use('/uploads',express.static('./uploads'))

//port
const PORT = 4000 || process.env.PORT

pfServer.listen(PORT, () => {
    console.log(`server running successfully at port number ${PORT}`);
})





//logic

/* pfServer.get('/get',(req,res)=>{
    res.send('get request received')
})

pfServer.post('/post',(req,res)=>{
    res.send('post request received')
})

pfServer.put('/put',(req,res)=>{
    res.send('put request received')
})

pfServer.delete('/delete',(req,res)=>{
    res.send('delete request received')
}) */




