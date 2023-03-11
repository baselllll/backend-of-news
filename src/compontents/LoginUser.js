import axios from "axios";
import React, { Fragment, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import './style.css'
function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event){
    let t = null
    event.preventDefault();
    console.log("Input value:",email);
    console.log("Input value:",password);
    axios.post('http://127.0.0.1:8000/api/login', null, { params: {
        email,
        password
      }})
      .then(response => t = localStorage.setItem('token',response.data.token))
      .catch(err => console.warn(err));
      navigate('/users');
}
  return (
    <Fragment>
        
    <form onSubmit={handleSubmit}>
    <img src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-login-icon-button-126998484.jpg"/>

      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit">Submit</button>
      <a href="register">SignUp</a>
    </form>
    </Fragment>
    
  );

}

export default LoginUser;