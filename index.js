const express = require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const path=require('path');

//dotenv configuration
dotenv.config()

const portfolioRoute=require('./routes/portfolioRoute')

//rest objet
const app=express();


//middlewares
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname,'./client/build')))

//routes
app.use('/api/v1',portfolioRoute)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

//port
const PORT=process.env.PORT || 5000

//listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})

