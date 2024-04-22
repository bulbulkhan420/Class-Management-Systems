import React, { useRef, useState } from 'react'
import { FaAlignJustify } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
import ad from "./admin.module.css"
import { NavLink } from 'react-router-dom';
export default function Adminheader() {
    let menubar=useRef();
    let [st,sst]=useState(true);
    let toogle=()=>{
       if(st){
        menubar.current.style.left="0%";
        sst(false);
       }
       else{
        menubar.current.style.left="-100%";
        sst(true);
       }
    }
  return (
    <div>
        <div className={ad.head}>
        <FaAlignJustify onClick={toogle} className={ad.logo}/>
        </div>
       <div className={ad.option} ref={menubar}>
        <div><NavLink to="/admin/student" style={{textDecoration:'none',color:'aliceblue'}}><PiStudentFill /> Student Update</NavLink></div>
        <div><NavLink to="/admin/teacher" style={{textDecoration:'none',color:'aliceblue'}}><GiTeacher /> Teacher Update</NavLink></div>
        <div><NavLink to="/admin/personal" style={{textDecoration:'none',color:'aliceblue'}}><FaGears /> Personal Update</NavLink></div>
       </div>
    </div>
  )
}
