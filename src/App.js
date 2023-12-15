import React from 'react';
import {useState} from 'react'
import Employee from './components/Employee'
import './index.css'
export default function App(){
 
  let role2="manager";
const [role,setRole]=useState('dev');
  return(   


 <div>
     <h1 className="text-4xl font-bold  underline">
      Hello world!
    </h1>
  <input type='text' onChange={(e)=>{
    console.log(e.target.value)
    setRole(e.target.value)}}/>


  <Employee name="henok" role="intern"  />
  <Employee name="Abby" role={role}/>
  <Employee name="John" role={role2}/>
  </div>
  )
 
  
  
}

// import React from 'react';
// import Employee from './components/Employee'
// import { useState } from 'react';
// export default function App() {

  

//   const showEmployees=false;
//   const[role,setRole]=useState('dev');

//   return (
  
//     <div>
// <input type='text' onChange={(e)=>{console.log(e.target.value)
// // role=e.target.value
// setRole(e.target.value)
// }}/>
      
//       <Employee name="henok" role="intern" age="25"/>
//       <Employee name="dani" role={role}/>
//       <Employee name="beti"/>
      
      
      
//     </div>
//   );
// }




