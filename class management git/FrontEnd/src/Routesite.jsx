import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Homepage from './Homepage';
import Loginpage from './Loginpage';
import Studentprofile from './student/Studentprofile';
import Teacherprofile from './teacher/Teacherprofile';
import Adminprofile from './admin/Adminprofile';
import Adminstudent from './admin/Adminstudent';
import Adminteacher from './admin/Adminteacher';
import Adminpersonal from './admin/Adminpersonal';
import Studentroutine from './student/Studentroutine';
import Studentsubmission from './student/Studentsubmission';
import Studentnotification from './student/Studentnotification';
import Studentresult from './student/Studentresult';
import Teacherrotine from './teacher/Teacherrotine';
import Teachersms from './teacher/Teachersms';
import Teachersubmission from './teacher/Teachersubmission';


export default function Routesite() {
  return (
    <div>
      
     
      
      
   
   
   
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/:id' element={<Loginpage/>}></Route>
      <Route path='/student/:id' element={ <Studentprofile/>}></Route>
      <Route path='/teacher/:id' element={ <Teacherprofile/>}></Route>
      <Route path='/teacher/rotine/:id' element={  <Teacherrotine/>}></Route>
      <Route path='/teacher/submission/:id' element={  <Teachersubmission/>}></Route>
      <Route path='/teacher/sms/:id' element={  <Teachersms/>}></Route>
      <Route path='/admin/:id' element={ <Adminprofile/>}></Route>
      <Route path='/admin/student' element={<Adminstudent/>}></Route>
      <Route path='/admin/teacher' element={<Adminteacher/>}></Route>
      <Route path='/admin/personal' element={<Adminpersonal/>}></Route>
      <Route path='/studentinfo/:id' element={ <Studentprofile/>}></Route>
      <Route path='/studentinfo/routine/:id' element={ <Studentroutine/>}></Route>
      <Route path='/studentinfo/submission/:id' element={ <Studentsubmission/>}></Route>
      <Route path='/studentinfo/notification/:id' element={  <Studentnotification/>}></Route>
      <Route path='/studentinfo/result/:id' element={  <Studentresult/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
