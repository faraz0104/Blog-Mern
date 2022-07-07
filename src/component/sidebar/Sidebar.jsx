import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import img1 from "../abc/img1.jpg"

const Sidebar = () => {
  const [cat,setCat]=useState([])

  useEffect(()=>{
    const getCats =async ()=>{
      const res = await axios.get("/categories")
      setCat(res.data)
    }
    getCats()
  },[])
  return (
    <div className='sidebar'>
    <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img  src={img1} alt="abc" className='imgg'/>
        <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cat.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
             <li className="sidebarListItem">{c.name} </li>
            </Link>
           
          ))}
            

        </ul>
    </div>
    <div className="sidebarItem"></div>
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className=" sidebarIcon fab fa-facebook-square"></i>
        <i className=" sidebarIcon fab fa-twitter-square"></i>
        <i className="  sidebarIcon fab fa-instagram-square"></i>
        <i className=" sidebarIcon fab fa-pinterest-square"></i>
    </div>
    </div>
  )
}

export default Sidebar