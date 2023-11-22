
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Campaigns from './components/Pages/Campaigns/Campaigns';

import SignUpForm from './components/Pages/Signup/SignUpForm';
import Reg from './components/Pages/Registerdetails/Reg';
import ExamD from './components/Pages/ExamsD/ExamD';
import Dropdown from './components/Pages/selectd/selectd';

import Home from './components/Pages/Home/Home';
import HomePage from './HomePage/HomeP/HomeP';
import Selectds from './components/Pages/Selectds/selectds';
import Navigate from './components/Department/HomeD/HomeD';
import Sigform from './components/Department/LoginD/LoginD';
import { useEffect, useState } from 'react';
import ExamsD from './components/Pages/ExamsD/ExamD';
import Fogpsw from './components/Pages/Signup/forgotpsw';
import Resetpsw from './components/Pages/Signup/fogpswd2';




function App() {
 
  const [token,setToken] = useState (true)

  if (token){
    sessionStorage.setItem('token',token,JSON.stringify(token))
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  })
 
  return (
    <> 
     <BrowserRouter>
       <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<Campaigns/>}/>
            <Route path="/signin" element={""}/>
            <Route path="/signup" element={<SignUpForm />}/>
            <Route path="/cus" element={<Home/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="/exam" element={<ExamsD/>}/>
            <Route path="/select" element={<Dropdown/>}/>
            <Route path="/ds" element={<Selectds/>}/>
            <Route path="/LoginD" element={<Sigform setToken={setToken}/>}/>
            {token?<Route path="/department" element={<Navigate/>}/>:""}
            <Route path="/fogpsw" element={<Fogpsw/>}/>
            <Route path="/restpsw" element={<Resetpsw/>}/>
    
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
