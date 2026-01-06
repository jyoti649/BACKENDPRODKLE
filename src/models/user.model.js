let userschema=new mongoose.Schema({
  email:{type:String,required:true,unique:true},
  username:{type:String,required:true},
  password:{type:String,required:true},
})

let finalusers=mongoose.model('users',userschema)
module.exports=finalusers;