import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Teacherheader from './Teacherheader';
import axios from 'axios'
import teci from './teacher.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client'
let socket=io.connect("http://localhost:3002");
export default function Teachersms() {
    let {id}=useParams();
    let [tin,stin]=useState({});
    let [year,syear]=useState("1-1");
    let [msg,smsg]=useState("");
    
    let sendms=async ()=>{
      let check=false;
      let data={
        id:tin.name,
        year:year,
        msg:msg
      }
      await socket.emit('send',data);
      await socket.on('check',(p)=>{
        if(p && check==false){
          toast.success('Message Sent',{
            position:'top-center'
         })
          check=true;
        }
        else if(p==false && check==false){
          toast.success('Something Error',{
            position:'top-center'
         })
         check=true;
        }
       
      })
      
    }
    useEffect(()=>{
      axios.post("http://localhost:3002/teacherinfo",{
        id
      })
      .then((res)=>{
         stin(res.data);
        
      })
    },[])
   
  return (
    <div>
      <Teacherheader sid={id}/>
      <div style={{height:'40px',width:'100%'}}></div>
      <div className={teci.poot}>
        <select value={year} onChange={(e)=>{syear(e.target.value)}} id="">
          <option value="1-1">1-1</option>
          <option value="1-2">1-2</option>
          <option value="2-1">2-1</option>
          <option value="2-2">2-2</option>
          <option value="3-1">3-1</option>
          <option value="3-2">3-2</option>
          <option value="4-1">4-1</option>
          <option value="4-2">4-2</option>
        </select>
        <input type="text" onChange={(e)=>{smsg(e.target.value)}} placeholder='Enter Your Message' />
        <button onClick={sendms}>Send Message</button>
      </div>
      <ToastContainer position="top-center"/>
    </div>
  )
}
