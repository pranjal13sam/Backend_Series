//requiring dotenv so that the app can be used on others servers as will because it might happen that if port 3000 is listening on my computer than will listen to other computers as well to balance that we use .env 
require('dotenv').config()
//requring express
const express=require('express')
//storing in app variable
const app=express()
//declaring a port
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/google',(req,res)=>{
    res.send('Welcome to google')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})