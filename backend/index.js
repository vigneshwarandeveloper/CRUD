const express=require("express");
const cors=require("cors");
const  mongoose  = require("mongoose");
const UserModel=require("./Model/Users")


const app=express();
const PORT=3000;

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/crud")


app.get("/",(req,res)=>{
    UserModel.find()
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})
app.post("/create",(req,res)=>{
    const {name,email,age}=req.body;
    UserModel.create({name:name,email:email,age:age})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})
app.get("/getuser/:id",(req,res)=>{
    const id= req.params.id;
    UserModel.findById({_id:id})
    .then(docs =>res.json(docs))
    .catch(err=> console.log(err))
})

app.put("/update/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
    })
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.delete("/deleteuser/:id",(req,res)=>{
    const id= req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})