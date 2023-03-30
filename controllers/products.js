const Product=require('../models/product');
const getAllProducts=async(req,res)=>{
    const myData=await Product.find(req.query).sort({"price":1});
    res.status(200).json({myData})
}


const getAllProductsTesting=async(req,res)=>{
    let page=Number(req.query.page)||1;
let limit=Number(req.query.limit)||10;

let skip=(page-1)*limit;
    const myData=await Product.find(req.query).sort({'price':1}).skip(skip).limit(limit);
    res.status(200).json({myData})
}

module.exports={getAllProducts,getAllProductsTesting};