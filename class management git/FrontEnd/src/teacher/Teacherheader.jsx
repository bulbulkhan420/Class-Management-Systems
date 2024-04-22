import React, { useRef, useState } from 'react'
import { FaAlignJustify } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import adss from "./teacher.module.css"
import { NavLink } from 'react-router-dom';
import { MdCastForEducation } from "react-icons/md";
export default function Teacherheader(props) {
    let menubar=useRef();
   
    let [st,sst]=useState(true);
   
    
        let path=props.sid;
        console.log(props.sid);
    
   
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
        <div className={adss.head}>
        <FaAlignJustify onClick={toogle} className={adss.logos}/>
        </div>
       <div className={adss.option} ref={menubar}>
        <div><NavLink to={`/teacher/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><CgProfile />  About </NavLink></div>
        <div><NavLink to={`/teacher/rotine/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><SiGoogleclassroom />  Routine</NavLink></div>
        <div><NavLink to={`/teacher/sms/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><MdCastForEducation />  Message Menu</NavLink></div>
        <div><NavLink to={`/teacher/submission/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><MdAssignmentAdd />  Submission</NavLink></div>
       
       </div>
    </div>
  )
}
