import React from 'react'
import {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Form,Input,Button} from 'reactstrap';
import CircularJSON from 'circular-json';
import JSON from 'circular-json';
import { stringify } from 'flatted';

function Login(){
  
const [values,setValues]=useState({
  email:'',
  password:''
})
  
const handleSubmit= async e=>{
e.preventDefault();
try{
  await axios.post("http://localhost:8087/api/login/login",stringify(values), {withCredentials: true })
}
  catch(err){
    console.log(err)
  }


}
  return (
    <div className='App bg-primary'>
      <div className=' register bg-white p-3 rounded w-25'>
     <Form inline onSubmit={handleSubmit} className='form'> 
     <h3>Login Page</h3>
  

<Input type="email" label="email" onChange={(e)=>setValues({...values,email:e})}/>
<Input type="password" label="password" onChange={(e)=>setValues({...values,password:e})}/>
<Button type="submit" color="success" className="font-weight-bold"  onClick={handleSubmit}>Login</Button>
<Link to="/register" >
  CREATE AN ACCOUNT
</Link>
     </Form>
     </div>
    </div>
  );
}

export default Login


