import React, { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import AllQuotes from './Components/Pages/AllQuotes'
// import Newqoutes from './Components/Pages/Newqoutes'
// import theme from './theme.module.css';
import Userdata from './components/Userdata';


import axios from 'axios';
const App = () => {

  const [userData , setUserData] = useState([]);

  useEffect( ()=>{
    let data2 = [];
    async function data1(){
      // console.log("YES I AM IN");
      let res = await axios.get('http://localhost:8000/Company_registration');
      setUserData([res.data.users]);
      // console.log([res.data.users]);
    }
    data1();
  },[]);
  return (
    <div>
      {
        userData.map(res => {
          console.log(res);
          return <Userdata res={res}></Userdata>
        })
      }
    </div>
  )
}

export default App