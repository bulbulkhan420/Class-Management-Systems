import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Teacherheader from './Teacherheader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pr from './teacher.module.css'
import axios from 'axios';
export default function Teacherrotine() {
    let {id}=useParams();
    let [info,sinfo]=useState([]);
    useEffect(()=>{
        axios.post("http://localhost:3002/teacherclassinfo",{
            id
        })
        .then((res)=>{
            console.log(res.data);
            sinfo(res.data);
        })
    },[]);
    let [year,syear]=useState("1-1");
    let [day,sday]=useState("Sunday");
    let [am9,sam9]=useState("");
    let [am10,sam10]=useState("");
    let [am11,sam11]=useState("");
    let [am12,sam12]=useState("");
    let [am2,sam2]=useState("");
    let setval=(e)=>{
        if(e.target.name=="day"){
            sday(e.target.value);
        }
        else if(e.target.name=="year"){
            syear(e.target.value);
        }
        else if(e.target.name=="am9"){
            sam9(e.target.value);
        }
        else if(e.target.name=="am10"){
            sam10(e.target.value);
        }
        else if(e.target.name=="am11"){
            sam11(e.target.value);
        }
        else if(e.target.name=="am12"){
            sam12(e.target.value);
        }
        else if(e.target.name=="am2"){
            sam2(e.target.value);
        }
    }
    let update=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3002/studentclassinfo",{
            year,
            day,
            am9,
            am10,
            am11,
            am12,
            am2
        })
        .then((res)=>{
            console.log(res);
            if(res.data.ok){
                toast.success('Succesfully added',{
                    position:'top-center'
                 })
            }
            else{
                toast.success('Something Wrong',{
                    position:'top-center'
                 })
            }
        })
    }
  return (
    <div >
      <Teacherheader sid={id}/>
    <div style={{height:'40px',width:'100%'}}></div>
     <div>
        <h3 style={{textAlign:'center'}}>Class Routine</h3>
        <table className={pr.tab}>
            <thead>
                <tr>
                    <th>Time/Day</th>
                    <th>9 AM</th>
                    <th>10 AM</th>
                    <th>11 AM</th>
                    <th>12 PM</th>
                    <th>2 PM</th>
                </tr>
            </thead>
            <tbody>
                {
                    info.map((it,i)=>{
                        if(it.day=="Sunday"){
                            return  <tr key={i}>
                            <th>Sunday</th>
                            <th>{it.am9}</th>
                            <th>{it.am10}</th>
                            <th>{it.am11}</th>
                            <th>{it.am12}</th>
                            <th>{it.am2}</th>
                        </tr>
                        }
                    })
                    
                }
                 {
                    info.map((it,i)=>{
                        if(it.day=="Monday"){
                            return  <tr key={i}>
                            <th>Monday</th>
                            <th>{it.am9}</th>
                            <th>{it.am10}</th>
                            <th>{it.am11}</th>
                            <th>{it.am12}</th>
                            <th>{it.am2}</th>
                        </tr>
                        }
                    })
                    
                }
                 {
                    info.map((it,i)=>{
                        if(it.day=="Tuesday"){
                            return  <tr key={i}>
                            <th>Tuesday</th>
                            <th>{it.am9}</th>
                            <th>{it.am10}</th>
                            <th>{it.am11}</th>
                            <th>{it.am12}</th>
                            <th>{it.am2}</th>
                        </tr>
                        }
                    })
                    
                }
                {
                    info.map((it,i)=>{
                        if(it.day=="Wednessday"){
                            return  <tr key={i}>
                            <th>Wednessday</th>
                            <th>{it.am9}</th>
                            <th>{it.am10}</th>
                            <th>{it.am11}</th>
                            <th>{it.am12}</th>
                            <th>{it.am2}</th>
                        </tr>
                        }
                    })
                    
                }
                 {
                    info.map((it,i)=>{
                        if(it.day=="Thusday"){
                            return  <tr key={i}>
                            <th>Thusday</th>
                            <th>{it.am9}</th>
                            <th>{it.am10}</th>
                            <th>{it.am11}</th>
                            <th>{it.am12}</th>
                            <th>{it.am2}</th>
                        </tr>
                        }
                    })
                    
                }
               
            </tbody>
        </table>
        <form onSubmit={update} className={pr.tabs}>
            <p style={{textAlign:'center',fontWeight:'bolder',marginTop:'5px'}}>Add or Update Student Class</p>
            <p style={{textAlign:'center'}}>Select Semester</p>
            <select name='year' value={year} required onChange={setval} >
                <option value="1-1">1-1</option>
                <option value="1-2">1-2</option>
                <option value="2-1">2-1</option>
                <option value="2-2">2-2</option>
                <option value="3-1">3-1</option>
                <option value="3-2">3-2</option>
                <option value="4-1">4-1</option>
                <option value="4-2">4-2</option>
            </select>
            <p style={{textAlign:'center'}}>Select Day</p>
            <select name='day' value={day} required onChange={setval}>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednessday">Wednessday</option>
                <option value="Thusday">Thusday</option>
            </select>
            <p>9 AM</p>
            <input type="text" name='am9' placeholder='Enter Class Name of 9 AM With Your Title' onChange={setval} />
            <p>10 AM</p>
            <input type="text" name='am10' placeholder='Enter Class Name of 10 AM With Your Title' onChange={setval} />
            <p>11 AM</p>
            <input type="text" name='am11' placeholder='Enter Class Name of 11 AM With Your Title' onChange={setval}/>
            <p>12 PM</p>
            <input type="text" name='am12' placeholder='Enter Class Name of 12 PM With Your Title' onChange={setval}/>
            <p>2 PM</p>
            <input type="text" name='am2' placeholder='Enter Class Name of 2 PM With Your Title' onChange={setval} />
            <button type='submit'>Update Class</button>
        </form>
     </div>
     <ToastContainer position="top-center"/>
    </div>
  )
}
