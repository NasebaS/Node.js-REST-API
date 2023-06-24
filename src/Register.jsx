import React from 'react'
import JSON from 'circular-json';
import {useState,useEffect} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Form,Input,Button} from 'reactstrap';
import CircularJSON from 'circular-json';
import { stringify } from 'flatted';


function Register(){
  
const [values,setValues]=useState({
  name:'',
  email:'',
  password:''
})

  
const handleSubmit= async e=>{
e.preventDefault();
try{
 await axios.post("http://localhost:8087/api/register/register",stringify(values), {withCredentials: true })
}
catch(err){
console.log(err)
}}
  return (
    <div className='App bg-primary'>
      <div className=' register bg-white p-3 rounded w-25'>
     <Form inline onSubmit={handleSubmit} className='form'> 
     <h3>Register Page</h3>
 

<Input type="text" label="Name" className="mr-3" onChange={(e)=>setValues({...values,name:e})}/>
<Input type="email" label="email" onChange={(e)=>setValues({...values,email:e})}/>
<Input type="password" label="password" onChange={(e)=>setValues({...values,password:e})}/>
<Button type="submit" color="success" className="font-weight-bold"  onClick={handleSubmit}>SignUp</Button>
<Link to="/login" >
  LOGIN
</Link>
     </Form>
     </div>
    </div>
  );
}

export default Register
