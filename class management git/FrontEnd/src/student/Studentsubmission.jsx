import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import er from './student.module.css'
import Studentheader from './Studentheader';

export default function Studentsubmission() {
    let {id}=useParams();
   let [info,sinfo]=useState({});
   let [allteacher,sallteacher]=useState([{}]);
   let [tid,stid]=useState("");
  
  
    useEffect(()=>{
        axios.get("http://localhost:3002/allteacher")
        .then((res)=>{
            sallteacher(res.data);
            stid(res.data[0].id);
           
        })
      axios.post("http://localhost:3002/studentinfo",{
        id:id
      })
      .then((res)=>{
        sinfo(res.data);
      
      })
    },[])
    let pp=(e)=>{
      stid(e.target.value);
    }
    const [filesub, setSelectedFile] = useState(null);
     
    const handleFileChange = (e) => {
      const file = e.target.files[0];
     
      setSelectedFile(file);
    };
    
  
  let submit=(e)=>{
    e.preventDefault();
    let formdata=new FormData();
   
    if(filesub){
        formdata.append('file',filesub);
        formdata.append('year',info.currentsemester);
        formdata.append('id',tid);
        axios.post("http://localhost:3002/studentassignment",formdata)
        .then((res)=>{
            if(res.data.ok){
                toast.success('Successfully Submitted',{
                    position:'top-center'
                })
            }
        })
    }
    else{
        toast.warn('Select Correct File',{
            position:'top-center'
        })
    }
  }
    return (
      <div>
        <Studentheader sid={id}/>
         
        <div  className={er.subm}>
            <h3>Submit Assignment</h3>
            <p>Select Teacher</p>
            <form onSubmit={submit}>
            <select onChange={pp} >
            {allteacher.map((item,i)=>{
                return <option key={i} value={item.id}>{item.name}</option>
            })}
            </select>
            
        <input type="file" onChange={handleFileChange}/>
        
        <button type='submit'>Submit</button>
        </form>
        
        </div>
       
        <ToastContainer position='top-center'/>
       
      </div>
    );
}
