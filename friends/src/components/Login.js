import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth.js';

const Login = () => {

  const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      //this.props.history.push('/');
    }).catch(error => {
      console.log(error);
    })
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={login}>
      <label htmlFor='username'>Username: </label>
      <input type='text' name='username' value={credentials.username} onChange={handleChange} />
      <label htmlFor='password'>Password: </label>
      <input type='text' name='password' value={credentials.password} onChange={handleChange} />
      <input type='submit' value='Log In' />
    </form>
  )
}

export default Login;
