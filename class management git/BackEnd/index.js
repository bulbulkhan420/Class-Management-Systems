const express=require('express');
const env=require('dotenv').config();
const app=express();
const cors=require("cors");
const {route}=require('./route.js');
let http=require('http');
let PORT=process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(route);
app.use(express.static('uploads'))
app.get("/",(req,res)=>{
    res.send("bulbul");
});
let server=http.createServer(app);
let {Server}=require('socket.io');
const { datamessage } = require('./database.js');
let io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})
let tr=0;
io.on('connection',(socket)=>{
   
    socket.on("send",async (data)=>{
        socket.join(data.year);
        tr++;
        socket.to(data.year).emit("update",tr);
    let v=await datamessage.insertMany([{name:data.id,year:data.year,message:data.msg}]);
    if(v){
        let p=true;
        socket.emit('check',p);
    }
    else{
        let p=false;
        socket.emit('check',p);
    }
    

    })

})
server.listen(PORT,(er)=>{
    console.log("sucess");
});