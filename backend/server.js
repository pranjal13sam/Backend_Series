import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("Server is ready")
})

//get a list of 5 jokes:

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'This is a joke 1'
        },
        {
            id:2,
            title:'A joke',
            content:'This is a joke 2'
        },
        {
            id:3,
            title:'A joke',
            content:'This is a joke 3'
        }
    ]
    res.send(jokes)
})

const port =process.env.PORT||3000;

app.listen(port , ()=>{
    console.log(`Serve at http://localhost:${port}`)
})