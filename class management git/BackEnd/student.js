const express=require('express');
const { datastudent,dataassignment,datastudentclass, datamessage } = require('./database');
let student=express.Router();
let multer=require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      
      cb(null,Date.now()+'_'+file.originalname);
    }
  })
  
  const upload = multer({ storage: storage });
student.post("/studentlogin",async (req,res)=>{
    let id=req.body.id;
    let password=req.body.password;
    let v=await datastudent.findOne({id,password});
    if(v){
        res.json({
            ok:true
        });
    }
    else{
        res.json({
            ok:false
        });  
    }
})
student.post("/studentinfo",async (req,res)=>{
    let id=req.body.id;
    let v=await datastudent.findOne({id});
    if(v){
        res.status(200).json(v);
    }
    else{
        res.send("not found");
    }
})
student.post('/allmessage',async (req,res)=>{
    let {year}=req.body;
    let v=await datamessage.find({year}).sort({time:-1});
    res.json(v);
})
student.post("/studentassignment",upload.single('file'), async (req,res)=>{
    let file=req.file;
    let {id,year}=req.body;
    let v=await dataassignment.insertMany([{id,filename:file.filename,year}]);
    if(v){
        res.json({
            ok:true
        })
    }
    else{
        res.json({
            ok:false
        })
    }
})
student.post("/studentclassinforoutine",async (req,res)=>{
    let {year}=req.body;
   let v=await datastudentclass.find({year});
    res.json(v);
   
  
})
module.exports={student};