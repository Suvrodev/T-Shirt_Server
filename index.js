const express = require('express');
const cors = require('cors');
const app=express()
app.use(cors())

const port=process.env.PORT || 7000

const tShirt=require('./Data/tShirt.json')

app.get('/',(req,res)=>{
    console.log(`T-Shirt Running port on ${port}`);
    res.send(`T-Shirt Running port on ${port}`)
})

app.get('/tshirt',(req,res)=>{
    console.log("All T-Shirt");
    res.send(tShirt)
})
app.get('/tshirt/:id',(req,res)=>{
    const id=req.params.id;
    const targetShirt=tShirt.find(ts=>ts._id===id)
    res.send(targetShirt)
})

app.listen(port,()=>{
    console.log(`T-Shirt Running port on ${port}`);
})