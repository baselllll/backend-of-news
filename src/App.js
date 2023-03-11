import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginUser from './compontents/LoginUser'
import RegisterUser from './compontents/RegisterUser'
import UsersData from './compontents/UsersData'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<LoginUser/>}/>
          <Route exact path="/register" element={<RegisterUser/>}/>
          <Route exact path="/users" element={<UsersData/>}/>
        </Routes>
    </Router>
  );
}

export default App;