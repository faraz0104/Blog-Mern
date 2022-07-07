import React, { useRef } from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import { Context } from '../../context/Context'
import "./Login.css"
import axios from "axios"

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch,isFetching} =useContext(Context)


  const handleSubmit= async (e)=>{
    e.preventDefault()
    dispatch({ type: "LOGIN_START" }); // when click button LOGIN_START ACTION TRIGEER
       try{
     const res = await axios.post("/auth/login",{
      username:userRef.current.value,
      password:passwordRef.current.value
     })
     // IF THERE IS RESit means it is scuccesful and dispatch login_succes
     dispatch({type: "LOGIN_SUCCESS",payload: res.data})
       }catch(err){
        dispatch({ type: "LOGIN_FAILURE" });
       }
          
  }

  console.log(isFetching)

  
  return (
    <div className='login'>
        <span className="loginTitile">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>username</label>
            <input className="loginInput" type="text" placeholder="Enter your usename..." 
            ref={userRef}
            />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password"
            ref={passwordRef}
            />
            <button className='loginButton' type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className='loginRegister'>
        <Link to="/register">Register</Link>

        </button>
    </div>
  )
}

export default Login