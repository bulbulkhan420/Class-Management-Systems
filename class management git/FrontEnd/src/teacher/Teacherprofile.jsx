import React, { useEffect, useState } from 'react'
import Teacherheader from './Teacherheader'
import { useParams } from 'react-router-dom'
import tec from './teacher.module.css'
import axios from 'axios';
export default function Teacherprofile() {
    let {id}=useParams();
    let [info,sinfo]=useState({});
    useEffect(()=>{
        axios.post("http://localhost:3002/teacherinfo",{
            id
        })
        .then((res)=>{
            sinfo(res.data);
            console.log(res);
        })
    },[]);
  return (
    <div>
      <Teacherheader sid={id}/>
      <div className={tec.teach}>
      <h3>Your Porfile Information</h3>
        <div className={tec.prot}>
            
            <img src={"http://localhost:3002/"+info.image} alt="" />
            <p>Your Picture</p>
            <div className={tec.dflex}>
                <div className={tec.bold}>Name: </div>
                <div> {info.name}</div>
            </div>
            <div className={tec.dflex}>
                <div className={tec.bold}>Id: </div>
                <div> {info.id}</div>
            </div>
            <div className={tec.dflex}>
                <div className={tec.bold}>Email: </div>
                <div> {info.email}</div>
            </div>
            <div className={tec.dflex}>
                <div className={tec.bold}>Phone: </div>
                <div> {info.phone}</div>
            </div>
            <div className={tec.dflex}>
                <div className={tec.bold}>Home: </div>
                <div> {info.home}</div>
            </div>
        </div>
      </div>
    </div>
  )
}
