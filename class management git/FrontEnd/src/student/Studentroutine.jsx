import React, { useEffect, useState } from 'react'
import Studentheader from './Studentheader'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import stt from './student.module.css'

export default function Studentroutine() {
    let {id}=useParams();
    let [nfo,snfo]=useState({});
    let [info,sinfo]=useState([]);
    useEffect(()=>{
        axios.post("http://localhost:3002/studentinfo",{
        id:id
      })
      .then((res)=>{
          snfo(res.data);
          console.log(res.data);
          axios.post("http://localhost:3002/studentclassinforoutine",{
            year:res.data.currentsemester
        })
        .then((res)=>{
            sinfo(res.data);
            console.log(res.data);
        })
      })
       
    },[]);
  return (
    <div>
        <Studentheader sid={id}/>
        <div style={{height:'40px'}}></div>
        <div>
        <h3 style={{textAlign:'center'}}>Class Routine</h3>
        <table className={stt.tab}>
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


        </div>
    </div>
  )
}
