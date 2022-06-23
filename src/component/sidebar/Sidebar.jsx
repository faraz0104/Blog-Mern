import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img  src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="abc" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis ut qui quo, quia cum tempore velit libero enim nostrum laborum aspernatur optio ad omnis porro illum. Aperiam, adipisci nesciunt!
        Qui est quis iste facilis dolorum ducimus sit deleniti laudantium architecto perspiciatis perferendis neque fuga odio, culpa, voluptatem praesentium, dolorem alias? Doloribus nulla id necessitatibus repudiandae maxime quod. Possimus, ducimus.</p>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life </li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Technology</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Weather</li>
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