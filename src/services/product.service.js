let finalproducts=require('../repositories/product.repo')

let getallproducts=async()=>{
    return await finalproducts.fetchproducts();
}

let createallproducts=async ({title,price,image})=>{
    return await finalproducts.createproducts({title,price,image});
}

module.exports={getallproducts,createallproducts}