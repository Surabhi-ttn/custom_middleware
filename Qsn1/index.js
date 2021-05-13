const express = require('express')

const app = express()

const customMiddleWare = (req,res,next)=>{
    const {username,password} = req.query;
    if(username === 'surabhi' && password=='123')
    {
        next()
    }
    else{

    const err = new Error('You are not authenicated')
    console.log(err,'err')
    next(err)
    }
}

app.use(customMiddleWare)

app.get('/',(req,res)=>{
    res.send('Hello User')
})

app.get('/admin',(req,res)=>{
    res.send('Welcome admin')
})

app.use(function(err,req,res,next){
    
   res.send(err.message)
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})