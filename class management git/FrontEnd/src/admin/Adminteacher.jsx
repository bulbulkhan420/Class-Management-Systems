import React, { useEffect, useState } from 'react'
import Adminheader from './Adminheader'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tt from './admin.module.css'
export default function Adminteacher() {
    let [allteacher,sallteacher]=useState([{}]);
    let [st,sst]=useState(0);
    let [ntid,sntid]=useState("");
     let [teacher,steacher]=useState("");
     let [idtc,sidtc]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:3002/allteacher")
        .then((res)=>{
            sallteacher(res.data);
           sntid(res.data[0].id);
           steacher(res.data[0].id);
           sidtc(res.data[0].id);
        });
    },[st]);
    let [id,sid]=useState("");
    let [password,spassrword]=useState("");
    let [name,sname]=useState("");
    
    let [home,shome]=useState("");
    let [email,semail]=useState("");
    let [phone,sphone]=useState("");
    let [picid,spicid]=useState("");
    let [image,simage]=useState("");
    let [npassword,snpassword]=useState("");
    let [nphone,snphone]=useState("");
    let [nemail,snemail]=useState("");
   
     
    
   
    let [am9,sam9]=useState("");
    let [am10,sam10]=useState("");
    let [am11,sam11]=useState("");
    let [am12,sam12]=useState("");
    let [am2,sam2]=useState("");
    let [day,sday]=useState("Sunday");
   
    let setval=(e)=>{
        if(e.target.name=='id'){
            sid(e.target.value);
        }
        else if(e.target.name=='password'){
            spassrword(e.target.value);
        }
        else if(e.target.name=='name'){
            sname(e.target.value);
        }
        else if(e.target.name=='home'){
            shome(e.target.value);
        }
        else if(e.target.name=='email'){
            semail(e.target.value);
        }
        else if(e.target.name=='phone'){
            sphone(e.target.value);
        }
        else if(e.target.name=='picid'){
            spicid(e.target.value);
        }
        else if(e.target.name=='image'){
            simage(e.target.files[0]);
        }
        else if(e.target.name=='npassword'){
            snpassword(e.target.value);
        }
        else if(e.target.name=='nphone'){
           snphone(e.target.value);
        }
        else if(e.target.name=='nemail'){
            snemail(e.target.value);
        }
        else if(e.target.name=='ntid'){
            sntid(e.target.value);
        }
        else if(e.target.name=='teacher'){
            steacher(e.target.value);
        }
        else if(e.target.name=='idtc'){
            sidtc(e.target.value);
        }
        else if(e.target.name=='am9'){
            sam9(e.target.value);
        }
        else if(e.target.name=='am10'){
            sam10(e.target.value);
        }
        else if(e.target.name=='am11'){
            sam11(e.target.value);
        }
        else if(e.target.name=='am12'){
            sam12(e.target.value);
        }
        else if(e.target.name=='am2'){
            sam2(e.target.value);
        }
        else if(e.target.name=='day'){
            sday(e.target.value);
        }
    }
    let add=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3002/addteacheradmin",{
            id,password,name,home,email,phone
        })
        .then((res)=>{
            if(res.data.ok){
              toast.success('Successfully Added New Teacher',{
                position:'top-center'
              })
              sst(prev=>prev+1);
            }
            else{
                toast.warn('Teacher Already Exist',{
                    position:'top-center'
                })
            }
        })
    }
    let addpic=(e)=>{
        e.preventDefault();
        let formdata=new FormData();
        formdata.append('image1',image);
        formdata.append('picid',picid);
        axios.post("http://localhost:3002/teacherpic",formdata)
        .then((res)=>{
            if(res.data.ok){
                toast('Picture Uploaded Successfully',{
                    position:'top-center'
                })
            }
            else{
                toast('Account Not Found',{
                    position:'top-center'
                }) 
            }
        })
    }
    let upt=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3002/updateteacher",{
            id:ntid,
            password:npassword,
            email:nemail,
            phone:nphone
        })
        .then((res)=>{
            if(res.data.ok){
                toast('Information Updated Successfully',{
                    position:'top-center'
                })
            }
            else{
                toast('Teacher Id Not Found',{
                    position:'top-center'
                })
            }
        })
    }
   
    let delte=(e)=>{
        e.preventDefault();
        axios.delete("http://localhost:3002/teacherdel/"+teacher)
        .then((res)=>{
            if(res.data.ok){
                toast('Teacher Information Deleted Successfully',{
                    position:'top-center'
                })
                sst(prev=>prev+1);
            }
            else{
                toast('Teacher Id Not Found',{
                    position:'top-center'
                })
            }
        })
    }
    let tclass=(e)=>{
        e.preventDefault();
        
        axios.post('http://localhost:3002/teacherclassadd',{
            id:idtc,
            day,
            am9,
            am10,
            am11,
            am12,
            am2
        })
        .then((res)=>{
            if(res.data.ok){
                toast('Teacher Class Added Successfully',{
                    position:'top-center'
                })
            }
            else{
                toast('Teacher id Not found Or error occures',{
                    position:'top-center'
                })
            }
        })
    }
    
    
  return (
    <div>
        <Adminheader/>
        <div className={tt.mains}>
            <form onSubmit={add} className={tt.adds}>
            <p style={{textAlign:'center'}}>Add New Teacher</p>
                <input type="text" name='id' required onChange={setval} placeholder='Enter Teacher Id' />
                <input type="text" name='password' required onChange={setval} placeholder='Enter Teacher Password' />
                <input type="text" name='name' required onChange={setval} placeholder='Enter Teacher Name' />
                <input type="text" name='home' required onChange={setval} placeholder='Enter Teacher Home District'/>
                <input type="email" name='email' required onChange={setval} placeholder='Enter Teacher Email' />
                <input type="number" name='phone' required onChange={setval} placeholder='Enter Teacher Phone Number' />
                <button type='submit'>Add Teacher</button>
            </form>
            <form onSubmit={addpic} className={tt.adds}>
            <p style={{textAlign:'center'}}>Upload Teacher Picture</p>
                <input type="text" name='picid' required onChange={setval} placeholder='Enter Teacher Id' />
                <input type="file" required name='image' onChange={setval} />
                <button type='submit'>Upload Picture</button>
            </form>
            <form className={tt.adds} onSubmit={upt}>
            <p style={{textAlign:'center'}}>Update Teacher Information</p>
            <p style={{textAlign:'center',marginBottom:'0px'}}>Select Teacher</p>
            <select name="ntid" value={ntid} onChange={setval}>
                    {
                        allteacher.map((item,i)=>{
                            return <option key={i} value={item.id}>{item.name}</option>
                        })
                    } 
                </select>
                <input type="text" name='npassword' onChange={setval} placeholder='Enter New Password' />
                <input type="email" name='nemail' onChange={setval} placeholder='Enter New Email' />
                <input type="number" name='nphone' onChange={setval} placeholder='Enter New Number' />
                <button type='submit'>Update</button>
            </form>
            <form onSubmit={tclass} className={tt.adds}>
            <p style={{textAlign:'center'}}>Add Teacher Class Shedule</p>
            <p style={{textAlign:'center'}}>Select Teacher Id</p>
            <select name="idtc" value={idtc} onChange={setval}>
                    {
                        allteacher.map((item,i)=>{
                            return <option key={i} value={item.id}>{item.id}</option>
                        })
                    } 
                </select>
                <p style={{textAlign:'center'}}>Select Day</p>
                <select name="day" value={day} onChange={setval}>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednessday">Wednessday</option>
                    <option value="Thusday">Thusday</option>
                </select>
                <p>9 AM</p>
                <input type="text" name='am9' onChange={setval} placeholder='Enter The Subject and Teacher Title'/>
                <p>10 AM</p>
                <input type="text" name='am10' onChange={setval} placeholder='Enter The Subject and Teacher Title'/>
                <p>11 AM</p>
                <input type="text" name='am11' onChange={setval} placeholder='Enter The Subject and Teacher Title'/>
                <p>12 PM</p>
                <input type="text" name='am12' onChange={setval} placeholder='Enter The Subject and Teacher Title'/>
                <p>Lab class: 2 PM</p>
                <input type="text" name='am2' onChange={setval} placeholder='Enter The Subject and Teacher Title'/>
                <button type='submit'>Add Class</button>
            </form>
            <form  className={tt.adds} onSubmit={delte}>
            <p style={{textAlign:'center'}}>Delete Teacher Information</p>
                <select name="teacher" value={teacher} onChange={setval}>
                    {
                        allteacher.map((item,i)=>{
                            return <option key={i} value={item.id}>{item.name}</option>
                        })
                    } 
                </select>
                <button type='submit'>Delete</button>
            </form>
        </div>
        <ToastContainer position="top-center"/>
    </div>
  )
}
