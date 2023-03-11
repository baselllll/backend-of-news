import axios from "axios";
import React, { useState } from "react";
import './style.css'
import { useNavigate  } from 'react-router-dom';
function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [data_source_api, setDataSourceApi] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event){
    let t = null
    event.preventDefault();
    console.log("Input value:",email);
    console.log("Input value:",password);
    console.log("Input value:",name);
    console.log("Input value:",password_confirmation);
    console.log("Input value:",data_source_api);
    axios.post('http://127.0.0.1:8000/api/register', null, { params: {
        name,
        email,
        password,
        password_confirmation,
        data_source_api
      }})
      .then(response => t = response.data.token)
      .catch(err => console.warn(err));
       navigate('/login');
}
  return (
    <form onSubmit={handleSubmit}>
           <img src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-login-icon-button-126998484.jpg"/>
       <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter Name"
        type="text"
        name="name"
        required
      />
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
       <input
        value={password_confirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
        placeholder="Confirmation Password"
        type="password"
        name="password_confirmation"
        required
      />
      <select  onChange={e => setDataSourceApi(e.target.value)} value={data_source_api}>
        <option value="News_api">News From News API</option>
        <option value="BBC_News_api">News Of BBC API </option>
        <option value="bitcoin_news_us">News Of Bitcoin API</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );

}

export default RegisterUser;