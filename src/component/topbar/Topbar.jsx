import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "./Topbar.css"
import log2 from "../abc/log2.PNG"

const Topbar = () => {
  const {user,dispatch} = useContext(Context)

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='top'>
    <div className="topLeft">
        {/* <i className=" topIcon fab fa-facebook-square"></i>
        <i className=" topIcon fab fa-twitter-square"></i>
        <i className="  topIcon fab fa-instagram-square"></i>
        <i className=" topIcon fab fa-pinterest-square"></i> */}
        <img className='logImg' src={log2} about='' alt=" " />
        
        </div>
    <div className="topCenter">
      <ul className="topList">
        <li className='topListItem'><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Home</Link></li>
        <li className='topListItem'><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Contact</Link></li>
        <li className='topListItem'><Link to="/write" style={{textDecoration:"none",color:"inherit"}}>Write</Link></li>
        <li className='topListItem'onClick={handleLogout}>{ user && "Logout"}</li>
      </ul>
    </div>
    <div className="topRight">
    {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      <i className=" topSeachIcon fas fa-search"></i>
      
    </div>
    </div>
  )
}

export default Topbar