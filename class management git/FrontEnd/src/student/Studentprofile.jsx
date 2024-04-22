import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Studentheader from './Studentheader';
import bb from './student.module.css'
export default function Studentprofile() {
    let {id}=useParams();
   let [info,sinfo]=useState({});
    useEffect(()=>{
      axios.post("http://localhost:3002/studentinfo",{
        id:id
      })
      .then((res)=>{
        sinfo(res.data);
        console.log(res.data);
      })
    },[])
  return (
    <div>
    <Studentheader sid={id}/>
    <div className={bb.profile}>
        <img src={`http://localhost:3002/${info.image}`} alt="" />
        <h5>Student Information</h5>
        <table>
            <tbody>
            <tr>
                <th >Student Name: </th>
                <td >{info.name}</td>
            </tr>
            <tr>
                <th >Student Id: </th>
                <td>{info.id}</td>
            </tr>
            <tr>
                <th >Student Email: </th>
                <td >{info.email}</td>
            </tr>
            <tr>
                <th >Student Phone: </th>
                <td >{info.phone}</td>
            </tr>
            <tr>
                <th >Student Address: </th>
                <td >{info.home}</td>
            </tr>
            <tr>
                <th >Student Hall: </th>
                <td >{info.hall}</td>
            </tr>
            <tr>
                <th >Student Current Semester: </th>
                <td >{info.currentsemester}</td>
            </tr>
            </tbody>
           
        </table>
    </div>
    </div>
  )
}
