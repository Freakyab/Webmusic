import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Login from "./loginPage/login/login"
import './components/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
  </React.StrictMode>,
)
