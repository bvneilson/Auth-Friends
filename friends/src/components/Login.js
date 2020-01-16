import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth.js';

const Login = props => {

  const [credentials, setCredentials] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
    .then(res => {
      //console.log(res.data.payload);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/friends');
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

  if (isLoading) {
    return <div className="loader"></div>
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
