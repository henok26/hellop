import React from 'react';
import {useState} from 'react'
import Employee from './components/Employee'
import './index.css'
import {v4 as uuidv4} from 'uuid'
export default function App(){
 
  let role2="manager";
const [role,setRole]=useState('dev');
 const [employees,setEmployees]=useState(
  [
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  ]
 )
  return(   


 <div>
     <h1 className="text-4xl font-bold  underline">
      Hello world!
    </h1>
  <input type='text' onChange={(e)=>{
    console.log(e.target.value)
    setRole(e.target.value)}}/>

<div className='flex flex-wrap justify-center'>
 
{employees.map((employee)=>{
  console.log(employee);
  return(
  <Employee
  key={uuidv4()}
   name={employee.name} 
   role={employee.role} 
   img={employee.img}/>)

})}


  </div>
  </div>
  )
 
  
  
}





