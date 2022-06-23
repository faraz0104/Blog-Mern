import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitlesSm">React & Node</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
        <img className='headerImg' src="https://img.freepik.com/free-photo/neutral-abstract-texture-simple-background_53876-102511.jpg?w=2000" alt="des" />
    </div>
  )
}

export default Header