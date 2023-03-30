require("dotenv").config()
const connectDb=require('./database/connect')
const Product=require('./models/product')

const ProductJson=require("./products.json")

const start=async()=>{
    try{
        await connectDb(process.env.MONGODB_URL);
        console.log("Success")
        await Product.create(ProductJson);
    }
    catch(error){
        console.log(error)
    }
}
start()