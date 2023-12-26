import React from 'react';
import {useState} from 'react'
import Employee from '../components/Employee'
import '../index.css'
import {v4 as uuidv4} from 'uuid'
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header'
export default function Employees(){
 
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
 function updateEmployee(id, newName, newRole) {
  const updatedEmployees = employees.map((employee) => {
    if (id === employee.id) {
      return { ...employee, name: newName, role: newRole };
    }
    return employee;
  });
  setEmployees(updatedEmployees);
  console.log('updateEmployee inside of app.js');
}

function newEmployee(name, role, img) {
  const newEmployee = {
    id: uuidv4(), // Invoke uuidv4 as a function to generate a new UUID
    name: name,
    role: role,
    img: img,
  };
  setEmployees([...employees, newEmployee]);
}



return (
  <div className=''>
   
    <div className='flex flex-wrap justify-center'>
    {employees.map((employee)=>{

const editEmployee= (
  <EditEmployee 
  id={employee.id}
  name={employee.name} 
  role={employee.role} 
  updateEmployee={updateEmployee}
  />
  );

        return (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            editEmployee={editEmployee}
          />
        );
      })}
    </div>
    <AddEmployee newEmployee={newEmployee} />
  </div>
);
}





