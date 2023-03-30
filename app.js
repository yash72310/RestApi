require("dotenv").config()
const express=require('express')
const app=express()
const PORT=process.env.PORT||5500;
const product_routes=require('./routes/products')
const connectDb=require('./database/connect')
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.use('/api/products/',product_routes);
const start=async()=>{
    try{
        await connectDb(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log(`Listening on Port ${PORT}`);
        })
    }catch(error){
            console.log(error)
    }
}
start()

