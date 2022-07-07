import React from 'react'
import "./Post.css"
import {Link} from "react-router-dom"

const Post = ({post}) => {
  const ImgFol = "http://localhost:4000/images/"
  return (
    <div className='post'>
      {
        post.photo &&        <img className='postImg' src={ImgFol + post.photo} alt="" />
      }

       <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((c)=>(
              <span className="postCat">{c.name}</span>
            ))
          }
         
      
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link> 
       
        <hr/>
        <span className="postDate">1 hour ago</span>
       </div>
       <p className='postDesc'>{post.desc}</p>
    </div>
  )
}

export default Post