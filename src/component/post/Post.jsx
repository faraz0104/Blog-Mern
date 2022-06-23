import React from 'react'
import "./Post.css"

const Post = () => {
  return (
    <div className='post'>
       <img className='postImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosG5jod6OqOpVBdiHCc2Hl7iK2JO0Jo8r_A&usqp=CAU" alt="" />
       <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur.</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
       </div>
       <p className='postDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate quo asperiores expedita praesentium alias. Corrupti facilis molestias distinctio illo accusantium impedit neque. Cupiditate natus, commodi pariatur facilis ipsa quidem?
       Nihil, doloribus quae ad natus magni ullam? Libero, minus explicabo? Sint repudiandae nisi asperiores architecto inventore, assumenda repellat a repellendus blanditiis illo vel perspiciatis aliquid aut esse nesciunt mollitia et.
       Assumenda aliquam eligendi quas illum quidem sed doloremque dolores cupiditate libero dolorum, sint, sapiente numquam totam maxime distinctio a, officiis fugit molestiae corrupti? Totam illum modi ex tenetur atque quas.</p>
    </div>
  )
}

export default Post