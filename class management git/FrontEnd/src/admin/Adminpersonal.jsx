import React, { useState } from 'react'
import Adminheader from './Adminheader'
import per from "./admin.module.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Adminpersonal() {
    let [password,spassrword]=useState("");
    let setv=(e)=>{
        spassrword(e.target.value);
    }
    let upd=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3002/adminupdate",{
            password
        })
        .then((res)=>{
            if(res.data.ok){
             toast.success('Password Updated Successfully',{
                position:'top-center'
             })
            }
            else{
                toast.warn('There was Something Error',{
                    position:'top-center'
                 }) 
            }
        })
    }
  return (
    <div>
        <Adminheader/>
        <div className={per.mains}>
        <form onSubmit={upd} className={per.adds}>
            <input type="text" onChange={setv} placeholder='Update Passsword'/>
            <button type='submit'>Update</button>
        </form>
        </div>
        <ToastContainer position="top-center"/>

    </div>
  )
}
