import React from 'react'
// import TextField from '@mui/material/TextField';
// import SendIcon from '@mui/icons-material/Send';
// import Button from '@mui/material/Button';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
import {useState,useEffect} from 'react';
import './App.css';
// import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Form,Input,Button} from 'reactstrap';
import CircularJSON from 'circular-json';

function Register(){
  
const [values,setValues]=useState({
  name:'',
  email:'',
  password:''
})
const removeCircularReferences = (obj) => {
  const seen = new WeakSet();
  const removeCircular = (value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return undefined; // Remove circular reference
      }
      seen.add(value);
    }
    return value;
  };
  return JSON.parse(JSON.stringify(obj, removeCircular));
};

  // const validationSchema = yup.object({
  //   name: yup
  //   .string('Enter your Name')
  //   .required('Name is required'),
  //   email: yup
  //     .string('Enter your email')
  //     .email('Enter a valid email')
  //     .required('Email is required'),
  //   password: yup
  //     .string('Enter your password')
  //     .min(3, 'Password should be of minimum 8 characters length')
  //     .required('Password is required'),
  // });
  // const formik = useFormik({
  //   initialValues: {
  //     name:'',
  //     email: '',
  //     password: '',
  //         },
  //   validationSchema: validationSchema,
   
   
  //   },
  // );
  
const handleSubmit=(e)=>{
e.preventDefault();
const sanitizedValues = removeCircularReferences(values);
    axios.post("http://localhost:3000/register", sanitizedValues, {withCredentials: true })

.then(res=>console.log(res))
.then(err=>console.log(err))

}
  return (
    <div className='App bg-primary'>
      <div className=' register bg-white p-3 rounded w-25'>
     <Form inline onSubmit={handleSubmit} className='form'> 
     <h3>Register Page</h3>
     {/* <TextField id="name" 
     name="name"
     label="Name"
     onChange={(e)=>setValues({...values,name:e})}
     error={formik.touched.name && Boolean(formik.errors.name)}
     helperText={formik.touched.name && formik.errors.name}
     style={{ width: '1000px' }}
     />
     <TextField id="email" variant="outlined" 
     name="email"
     label="Email"
     onChange={(e)=>setValues({...values,email:e})}
     error={formik.touched.email && Boolean(formik.errors.email)}
     helperText={formik.touched.email && formik.errors.email}
     style={{ width: '1000px' }}
     />
     <TextField 
     id="password"
     name="password"
     label="password"
     type="password"
     onChange={(e)=>setValues({...values,password:e})}
     error={formik.touched.password && Boolean(formik.errors.password)}
     helperText={formik.touched.password && formik.errors.password}
     variant="outlined" 
     style={{ width: '1000px' }}/>
     <Button variant="contained" type="submit" endIcon={<SendIcon />}>
SignUp
</Button> */}

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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Input, Button } from 'reactstrap';
// import axios from 'axios';

// function Login() {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8081/register", values)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="App">
//       <Form inline onSubmit={handleSubmit} className='form'>
//         <h3>Register Page</h3>
//         <Input
//           type="text"
//           name="name"
//           label="Name"
//           className="mr-3"
//           onChange={handleChange}
//           value={values.name}
//         />
//         <Input
//           type="email"
//           name="email"
//           label="Email"
//           className="mr-3"
//           onChange={handleChange}
//           value={values.email}
//         />
//         <Input
//           type="password"
//           name="password"
//           label="Password"
//           onChange={handleChange}
//           value={values.password}
//         />
//         <Button type="submit" color="success" className="font-weight-bold">SignUp</Button>
//         <Link to="/login" color="success" className="font-weight-bold">LOGIN</Link>
//       </Form>
//     </div>
//   );
// }

// export default Login;

