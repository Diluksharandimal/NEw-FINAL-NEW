
import './App.css';
import { useEffect, useState } from 'react';
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

import ExamsD from './components/Pages/ExamsD/ExamD';
import Fogpsw from './components/Pages/Signup/forgotpsw';
import Resetpsw from './components/Pages/Signup/fogpswd2';
import Navigatescl from './components/School/components/Schomepge/main2';
import Applhome from './components/School/components/Applipge/Applhome';
import Frmproffile from './components/School/components/frmproffile/Frmproffile';
import Exhome from './components/School/components/Exampage/Exhome';
import Schedhome from './components/School/components/Schedpage/Schedhome';
import Camp from './components/School/components/Campaignpage/Camp';
import Payhome from './components/School/components/Paymentpage/Payhome';
import Payall from './components/School/components/payallpage/Payall';
import { Emailpro } from './components/School/components/email/emailpro';
import Conhome from './components/School/components/conexpge/Conhome';
import Exregister from './components/School/components/ExRegist/Exregister';
import Campall from './components/School/components/campallpage/Campall';





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
            <Route path="/school" element={<Navigatescl/>}/>
            <Route path="/regform" element={<Frmproffile/>}/>
            <Route path="/exm" element={<Exhome/>}/>
            <Route path="/appli" element={<Applhome/>}/>
            <Route path="/schedule" element={<Schedhome/>}/>
            <Route path="/camp" element={<Camp/>}/>
            <Route path="/pay" element={<Payhome/>}/>
            <Route path="/payll" element={<Payall/>}/>
            <Route path="/conx" element={<Conhome/>}/>
            <Route path="/exreg" element={<Exregister/>}/>
            <Route path="/campss" element={<Campall/>}/>
            


    
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
