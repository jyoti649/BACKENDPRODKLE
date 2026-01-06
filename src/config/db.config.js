const mongoose=require('mongoose')


async function connection(){
   try {
       await mongoose.connect(process.env.MONGODBURL)
       console.log("db connected")
    
   } catch (error) {
    console.error("db not connected")
   }


}
module.exports=connection;