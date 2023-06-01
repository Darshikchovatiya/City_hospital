import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './containers/Home/Home.jsx'
import Departments from './containers/Departments/Departments';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Departments />
  </React.StrictMode>,
)
