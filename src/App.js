import React from 'react';
import {useState} from 'react'
import Employee from './components/Employee'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header'
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


 function App(){
 return (

    <BrowserRouter>
     <Header>
    <Routes>
      <Route path='/employees' element={<Employees/>}/> 
      <Route path='/customers' element={<Customers/>}/>
    </Routes>
    </Header>
    </BrowserRouter>

 );
    

 

}

export default App;



