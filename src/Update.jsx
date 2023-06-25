import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Update = () => {
    {const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = values;
      const data = { name, email, password };
      const result = await axios.post("http://localhost:8087/api/users/", data, { withCredentials: true });
      console.log(result.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='App bg-primary'>
      <div className='register bg-white p-3 rounded w-25'>
        <Form inline onSubmit={handleSubmit} className='form'>
          <h3>Update Page</h3>

          <Input type="text" name="name" label="Name" className="mr-3" onChange={handleChange} />
          <Input type="email" name="email" label="Email" onChange={handleChange} />
          <Input type="password" name="password" label="Password" onChange={handleChange} />

          <Button type="submit" color="success" className="font-weight-bold">Update</Button>
          <Link to="/login">LOGIN</Link>
        </Form>
      </div>
    </div>
  );
}
}
export default Update