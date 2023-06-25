import React from 'react'
import {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Form,Input,Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function Login(){
  
const [values,setValues]=useState({
  email:'',
  password:''
})
const navigate=useNavigate()
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { email, password } = values;
    const data = { email, password };
   const result= await axios.post("http://localhost:8087/api/login/login", data, { withCredentials: true });
  console.log(result.data)
  } catch (err) {
    console.log(err.response.data);
  }
};

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};

  return (
    <div className='App bg-primary'>
      <div className=' register bg-white p-3 rounded w-25'>
     <Form inline onSubmit={handleSubmit} className='form'> 
     <h3>Login Page</h3>
  

<Input type="email" name="email" label="email" onChange={handleChange}/>
<Input type="password" name="password" label="password" onChange={handleChange}/>
<Button type="submit" color="primary" className="font-weight-bold"  onClick={handleSubmit}>Login</Button>
<Button type="submit" color="success" className="font-weight-bold"  onClick={()=>navigate('/update')}>Update</Button>
<Link to="/register" >
  CREATE AN ACCOUNT
</Link>
     </Form>
     </div>
    </div>
  );
}

export default Login


