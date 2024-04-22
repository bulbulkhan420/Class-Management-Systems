import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import log from "./main.module.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Loginpage() {
    let {id}=useParams();
    let value;
    if(id=="student")
    value="Student Login";
    else if(id=="teacher")
    value="Teacher Login";
   else if(id=="admin")
    value="Admin Login";
  let [mid,smid]=useState("");
  let [pass,spass]=useState("");
  let navigate=useNavigate();
   let setval=(e)=>{
    if(e.target.name=="id")
       smid(e.target.value);
    else
      spass(e.target.value);
   }
   let submit=(e)=>{
    e.preventDefault();
    if(id=="student"){
        axios.post("http://localhost:3002/studentlogin",{
            id:mid,
            password:pass
        })
        .then((res)=>{
            let ok=res.data.ok;
            if(ok){
                navigate("/student/"+mid);
            }
            else{
                toast.success('Id or Password does not matched',{
                    position:'top-center'
                 })
            }
        })
    }
    else if(id=="teacher"){
        axios.post("http://localhost:3002/teacherlogin",{
            id:mid,
            password:pass
        })
        .then((res)=>{
            let ok=res.data.ok;
            if(ok){
                navigate("/teacher/"+mid);
            }
            else{
                toast.success('Id or Password does not matched',{
                    position:'top-center'
                 })
            }
        })
    }
    else if(id=="admin")
    {
        axios.post("http://localhost:3002/adminlogin",{
            id:mid,
            password:pass
        })
        .then((res)=>{
            let ok=res.data.ok;
            if(ok){
                navigate("/admin/"+mid);
            }
            else{
                toast.success('Id or Password does not matched',{
                    position:'top-center'
                 })
            }
        })
    }
   }
  return (
    <div>
        <div className={log.man}>
        <div className={log.login}>
            <img src="logo.png" className={log.logo} alt="" />
        <h4>{value}</h4>
        <input type="text" name="id" onChange={setval} placeholder='Enter Your Id'/>
        <input type="password" name='password' onChange={setval} placeholder='Enter Your Password' />
        <button onClick={submit}>Login</button>
      </div>
        </div>
        <ToastContainer position="top-center"/>
    </div>
  )
}
