import React, { useEffect, useState } from 'react'
import Studentheader from './Studentheader'
import { useParams } from 'react-router-dom'
import re from "./student.module.css"
import axios from 'axios';
export default function Studentresult() {
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
    },[]);
    
  return (
    <div>
      <Studentheader sid={id}/>
      <div className={re.profile}>
      <h5>{info.name}'s Result</h5>
        <table>
            <tbody>
            <tr>
                <th >Level 1 Semester 1: </th>
                <td >{info.result11}</td>
            </tr>
            <tr>
                <th >Level 1 Semester 2: </th>
                <td>{info.result12}</td>
            </tr>
            <tr>
                <th >Level 2 Semester 1: </th>
                <td >{info.result21}</td>
            </tr>
            <tr>
                <th >Level 2 Semester 2: </th>
                <td >{info.result22}</td>
            </tr>
            <tr>
                <th >Level 3 Semester 1: </th>
                <td >{info.result31}</td>
            </tr>
            <tr>
                <th >Level 3 Semester 2: </th>
                <td >{info.result32}</td>
            </tr>
            <tr>
                <th >Level 4 Semester 1: </th>
                <td >{info.result41}</td>
            </tr>
            <tr>
                <th >Level 4 Semester 2: </th>
                <td >{info.result42}</td>
            </tr>
            </tbody>
           
        </table>
      </div>
    </div>
  )
}
