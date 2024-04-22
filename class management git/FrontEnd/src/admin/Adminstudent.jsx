import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import ads from "./admin.module.css"
import Adminheader from './Adminheader';
export default function Adminstudent() {
    let [id,sid]=useState("");
    let [password,spassrword]=useState("");
    let [name,sname]=useState("");
    let [hall,shall]=useState("");
    let [email,semail]=useState("");
    let [phone,sphone]=useState("");
    let [home,shome]=useState("");
    let setval=(e)=>{
        if(e.target.name=="id"){
            sid(e.target.value);
        }
        else if(e.target.name=="password"){
            spassrword(e.target.value);
        }
        else if(e.target.name=="name"){
            sname(e.target.value);
        }
        else if(e.target.name=="hall"){
            shall(e.target.value);
        }
        else if(e.target.name=="email"){
            semail(e.target.value);
        }
        else if(e.target.name=="phone"){
            sphone(e.target.value);
        }
        else if(e.target.name=="home"){
            shome(e.target.value);
        }
        
    }
    let add=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3002/newstudentadd",{
            id,password,name,home,hall,email,phone
        })
        .then((res)=>{
            if(res.data.ok){
                toast('New Student successfully Added', {
                    position: "top-center"
                    });
               
            }
            else{
                toast.warn('Student Already Added', {
                    position: "top-center"
                    });
               
            }
        })
    }

    let [npassword,snpassword]=useState('');
    let [nemail,snemail]=useState("");
    let [nphone,snphone]=useState('');
    let [csemester,scsemester]=useState("");
    let [nresult,snresult]=useState("");
    let [nsemester,snsemester]=useState("");
    let [delid,sdelid]=useState("");
    let [oid,soid]=useState("");
    let usetval=(e)=>{
        if(e.target.name=="npassword"){
            snpassword(e.target.value);
        }
        else if(e.target.name=="nemail"){
            snemail(e.target.value);
        }
        else if(e.target.name=="nphone"){
            snphone(e.target.value);
        }
        else if(e.target.name=="csemester"){
            scsemester(e.target.value);
        }
        else if(e.target.name=="nsemester"){
            snsemester(e.target.value);
        }
        else if(e.target.name=="oid"){
            soid(e.target.value);
        }
        else if(e.target.name=="nresult"){
            snresult(e.target.value);
            
        }
        else if(e.target.name=="delid"){
           sdelid(e.target.value);
            
        }
        
    }
    let deletes=(e)=>{
        e.preventDefault();
        axios.patch("http://localhost:3002/studentdelete",{
            id:delid
        })
        .then((res)=>{
            if(res.data.ok){
                toast.success('Successfully Deleted The Student',{
                    position:'top-center'
                })
            }
            else{
                toast.warn('Student did not found',{
                    position:'top-center'
                })
            }
        })
    }
    let update=(e)=>{
        e.preventDefault();
       
        axios.post("http://localhost:3002/studentupdateadmin",{
            id:oid,
            password:npassword,
            email:nemail,
            phone:nphone,
            currentsemester:nsemester,
            osemester:csemester,
            result:nresult
        })
        .then((res)=>{
            if(res.data.ok){
                toast('Student Information Succesfully Updated', {
                    position: "top-center"
                    });
                    
            }
            else{
                toast('There might be error or student not found', {
                    position: "top-center"
                    });
            }
        })
    }
    let [picid,spicid]=useState("");
    let [image,simage]=useState(null);
    let setpic=(e)=>{
       if(e.target.name=='picid'){
        spicid(e.target.value);
       }
       else{
        simage(e.target.files[0]);
       }
    }
    let uppic=(e)=>{
        e.preventDefault();
        let formdata=new FormData();
        formdata.append('image',image);
        formdata.append('picid',picid);
        axios.post('http://localhost:3002/uploadstudentpic',formdata)
        .then((res)=>{
            if(res.data.ok){
                toast('Picture Uploaded Successfully', {
                    position: "top-center"
                    });
            }
            else{
                toast('There might be error or student not found', {
                    position: "top-center"
                    });
            }
        })
    }
  return (
    <div>
        <Adminheader/>
        <div className={ads.mains}>
        <form className={ads.adds} onSubmit={add}>
            <p style={{textAlign:'center'}}>Add New Student</p>
        <input type="text" required name="id" onChange={setval} placeholder='Enter student Id' />
         <input type="text" required name="password" onChange={setval} placeholder='Enter Student password'/>
         <input type="text" required name="name" onChange={setval} placeholder='Enter Student Name' />
         <input type="text"required name="hall" onChange={setval} placeholder='Enter Student Hall' />
         <input type="text"required name="home" onChange={setval} placeholder='Enter Student Home District' />
         <input type="text"required name="email" onChange={setval} placeholder='Enter Student Email' />
         <input type="text"required name="phone" onChange={setval} placeholder='Enter Student Phone' />
         <button type='submit'>Add New Student</button>
        </form>
          <form className={ads.adds} onSubmit={uppic}>
          <p style={{textAlign:'center'}}>Upload Student Picture</p>
            <input type="text" name="picid"onChange={setpic} placeholder='Enter Student Id'/>
            <input type="file" name='pic' onChange={setpic} placeholder='Choose Picture Of Student' />
            <button type='submit'>Upload Pic</button>
          </form>
          <form onSubmit={update}  className={ads.adds}>
          <p style={{textAlign:'center'}}>Upadte Student Information</p>
          <input type="text" name='oid' onChange={usetval} placeholder='Enter Student id'/>
            <input type="text" name='npassword' onChange={usetval} placeholder='Enter New Password'/>
            <input type="email" name='nemail' onChange={usetval} placeholder='Enter New Email'/>
            <input type="text" name='nphone' onChange={usetval} placeholder='Enter New Phone Number'/>
            <p style={{textAlign:'center'}}>Result of the Semester</p>
            <select name='csemester' onChange={usetval} id="">
                <option value="1-1">1-1</option>
                <option value="1-2">1-2</option>
                <option value="2-1">2-1</option>
                <option value="2-2">2-2</option>
                <option value="3-1">3-1</option>
                <option value="3-2">3-2</option>
                <option value="4-1">4-1</option>
                <option value="4-2">4-2</option>
            </select>
            <input type="text" name='nresult' onChange={usetval} placeholder='Enter The Result'/>
            <p style={{textAlign:'center'}}>Migrate To Other Semester</p>
            <select name='nsemester' onChange={usetval} id="">
                <option value="1-1">1-1</option>
                <option value="1-2">1-2</option>
                <option value="2-1">2-1</option>
                <option value="2-2">2-2</option>
                <option value="3-1">3-1</option>
                <option value="3-2">3-2</option>
                <option value="4-1">4-1</option>
                <option value="4-2">4-2</option>
            </select>
             <button type='submit'>Update</button>
          </form>
          <form onSubmit={deletes} className={ads.adds}>
          <p style={{textAlign:'center'}}>Delete Student Information</p>
            <input type="text" name='delid' placeholder='Enter Student Id for Delete' onChange={usetval} />
            <button type='submit'>Delete Student</button>
          </form>
        </div>
        
        <ToastContainer position="top-center"/>
    </div>
  )
}
