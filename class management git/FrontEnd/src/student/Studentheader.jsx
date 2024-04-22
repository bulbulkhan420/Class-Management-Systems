import React, { useRef, useState } from 'react'
import { FaAlignJustify } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import adss from "./student.module.css"
import { NavLink } from 'react-router-dom';
import { MdCastForEducation } from "react-icons/md";
export default function Studentheader(props) {
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
        <FaAlignJustify onClick={toogle} className={adss.logo}/>
        </div>
       <div className={adss.option} ref={menubar}>
        <div><NavLink to={`/student/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><CgProfile style={{textAlign:'center',paddingBottom:'0px',marginBottom:'0px'}} />  About </NavLink></div>
        <div><NavLink to={`/studentinfo/routine/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><SiGoogleclassroom />  Class Routine</NavLink></div>
        <div><NavLink to={`/studentinfo/result/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><MdCastForEducation />  Result</NavLink></div>
        <div><NavLink to={`/studentinfo/submission/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><MdAssignmentAdd />  Submission</NavLink></div>
        <div><NavLink to={`/studentinfo/notification/${path}`} style={{textDecoration:'none',color:'aliceblue',textAlign:'center'}}><IoIosNotifications />  Notification</NavLink></div>
       </div>
    </div>
  )
}
