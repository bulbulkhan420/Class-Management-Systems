import React, { useState } from 'react'
import Teacherheader from './Teacherheader'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import ts from "./teacher.module.css"
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import fileDownload from 'js-file-download';
export default function Teachersubmission() {
    let {id}=useParams();
    let [year,syear]=useState("");
    let [allsub,sallsub]=useState([]);
    let setval= (e)=>{
        e.preventDefault();
        let p=e.target.value;
         syear(e.target.value);
            axios.post("http://localhost:3002/allsub",{
                year:p,
                id
            })
            .then((res)=>{
                sallsub(res.data);
                
            })
        
       
    }
    let download=(ob)=>{
        axios.post("http://localhost:3002/downloads",{
            id:ob.filename
        },{
            responseType:'blob'
        })
        .then((res)=>{
            fileDownload(res.data,ob.year);
        })
    }
    let del=(ob,i)=>{
       axios.post("http://localhost:3002/delsub",{
        fname:ob.filename
       })
       .then((res)=>{
        if(res.data.ok){
          allsub.splice(i,1);
          sallsub([...allsub]);
        }
       }) 
    }
  return (
    <div>
      <Teacherheader sid={id}/>
      <div className={ts.tss}>
        <div className={ts.ing1}>
            <div>Select Specific Class</div>
            <select  value={year} onChange={setval} id="">
      <option value="">Choose the Year</option>
        <option value="1-1">1-1</option>
        <option value="1-2">1-2</option>
        <option value="2-1">2-1</option>
        <option value="2-2">2-2</option>
        <option value="3-1">3-1</option>
        <option value="3-2">3-2</option>
        <option value="4-1">4-1</option>
        <option value="4-2">4-2</option>
      </select></div>
      
     <div className={ts.ing}> { allsub &&
        allsub.map((it,i)=>{
            return <div key={i}>
                <span className={ts.stp}>{it.filename}</span>
                <div className={ts.st}>
                <button onClick={()=>{download(it)}}><FaArrowAltCircleDown /> Download</button>
                <button onClick={()=>{
                    del(it,i);
                }}><MdDelete /> Delete</button>
                </div>
               
               
            </div>
        })
      }</div>
      </div>
     
    </div>
  )
}
