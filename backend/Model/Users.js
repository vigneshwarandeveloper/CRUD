const mongoose  = require("mongoose")

const Userschema=new mongoose.Schema({
    name:{type : String , required : true},
    email : { type :String,required :true},
    age:{type:Number,required:true}
})

const usermodal=new mongoose.model("users",Userschema)

module.exports=usermodal;