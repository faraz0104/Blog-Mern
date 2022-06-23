import React from 'react'
import {Link} from "react-router-dom"
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitile">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your Email" />
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your Email" />
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegister'>
        <Link to="/register">Register</Link>

        </button>
    </div>
  )
}

export default Login