import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
// import Login from './routes/Login';
import Register from './routes/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login></Login>} />
        <Route path='/login' element={<Login></Login>} /> */}
        <Route path='/register' element={<Register></Register>} /> 
        <Route path='/app' element={<App></App>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

