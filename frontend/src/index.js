import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
// import Login from './routes/Login';
import Register from './routes/Register';
import Login from './routes/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// //load .env file
// const dotenv = require('dotenv');
// dotenv.config()

//setup axios global config
const axios = require('axios').default;
const API_HOST = process.env.REACT_APP_BACKEND_HOST
const API_PORT = process.env.REACT_APP_BACKEND_PORT
axios.defaults.baseURL = `http://${window.location.hostname}:${API_PORT}/api`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} /> 
        <Route path='/app' element={<App></App>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

