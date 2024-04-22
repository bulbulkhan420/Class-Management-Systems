import React, { useEffect, useState } from 'react'
import Studentheader from './Studentheader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import io from 'socket.io-client'
let socket=io.connect("http://localhost:3002");
export default function Studentnotification() {
    let {id}=useParams();
    let [message,smessage]=useState([{}]);
    let [up,sup]=useState([]);
    let [val,sval]=useState(0);
    socket.on("update",(data)=>{
      sval(pre=>pre+1);
     })
   useEffect(()=>{
    
   axios.post("http://localhost:3002/studentinfo",{
    id
   })
   .then((res)=>{
    let data=res.data.currentsemester;
   
    axios.post("http://localhost:3002/allmessage",{
      year:data
    })
    .then((res)=>{
       smessage(res.data);
       console.log(res.data);
       sup(res.data)
       
    })

   })
   })
   if(up.length>10){
    up.splice(10,up.length);
    sup([...up]);
   }
  return (
    <div>
        <Studentheader sid={id}/>
      <div style={{height:'40px'}}></div>
      <div>{up.map((it,i)=>{ 
          return <div style={{backgroundColor:'purple',marginTop:'0px',marginLeft:'auto',marginBottom:'5px',marginRight:'auto', width:'80%',borderRadius:'10px'}} key={i}>
          <p style={{fontWeight:'bolder',textAlign:'center',lineHeight:'30px',color:'aliceblue'}}>{it.name}</p>
          <p style={{fontWeight:'normal',textAlign:'center',lineHeight:'30px',color:'aliceblue'}}>{it.message}</p>
          <p style={{fontSize:'10px',textAlign:'center',lineHeight:'30px',color:'aliceblue'}}>{it.time}</p>
          
        </div>
      })}</div>
    </div>
  )
}
