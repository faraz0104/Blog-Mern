import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitlesSm">Blogs for Everyone </span>
            <span className="headerTitlesLg"><div>Read the Blogs from the trendings topics</div><button className='bbtn' >      <Link to="/write" style={{textDecoration:"none",color:"white"}}>Create New Blog</Link></button></span>
           
        </div>
        <img className='headerImg' src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/85/00/7057cbcecaa171b.jpg" alt="des" />
    </div>
  )
}

export default Header