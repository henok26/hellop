import React from 'react';
import {useState} from 'react'
import Employee from './components/Employee'
import './index.css'
import {v4 as uuidv4} from 'uuid'
export default function App(){
 
  // let role2="manager";
// const [role,setRole]=useState('');
 const [employees,setEmployees]=useState(
  [
    {id:1 ,name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:2 ,name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:3,name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:4,name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:5,name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:6,name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:7,name:"henok",role:"developer",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:8,name:"henok",role:"develops",img:"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  ]
 )
 function updateEmployee(id ,newName,newRole){
  const updatedEmployees=employees.map((employee)=>{
if(id == employee.id){
  return{...employee,name:newName,role:newRole}
}
return employee;
  });
  setEmployees(updatedEmployees)
  console.log('updateEmployee inside of app.js')
 }
  return(   


 <div>
  


<div className='flex flex-wrap justify-center'>
 
{employees.map((employee)=>{
  console.log(employee);
  return(
  <Employee

  key={employee.id}
  id={employee.id}
   name={employee.name} 
   role={employee.role} 
   img={employee.img}
   updateEmployee={updateEmployee}
   />)

})}


  </div>
  </div>
  )
 
  
  
}





