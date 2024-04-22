import React, { useEffect, useState } from 'react'
import home from "./main.module.css"
import { NavLink } from 'react-router-dom'
import Countup from 'react-countup'
import main2 from '../main2.jpg'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
export default function Homepage() {
   let [pic,spic]=useState(main2);
   let [text]=useTypewriter({
    words:['Welcome TO ICE Class Management System'],
    loop:{},
    deleteSpeed:0,
    typeSpeed:50
   })
    
  return (
    <div>
        <div className={home.head}>
           
        <h5> <NavLink style={{color:'aliceblue',textDecoration:'none'}} to={"student"}>Student Login</NavLink></h5>
        <h5> <NavLink style={{color:'aliceblue',textDecoration:'none'}} to={"teacher"}>Teacher Login</NavLink></h5>
        <h5> <NavLink style={{color:'aliceblue',textDecoration:'none'}} to={"admin"}>Admin Login</NavLink></h5>
          
        </div> 
        <div className={home.mainpic} style={{background:`url(${pic}) no-repeat`,backgroundSize:'cover'}}>
             <h1 style={{color:'aliceblue',backgroundColor:'blue',textAlign:'center',width:'100%'}}>{text}</h1>
             <Cursor/>
             <h1 style={{color:'black',backgroundColor:'gold',textAlign:'center',width:'100%'}}>Having Student: <Countup start={0} end={300} duration={5} delay={0}/>+</h1>
            
        </div>
    </div>
  )
}
