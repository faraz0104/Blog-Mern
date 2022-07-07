import React from "react";
import "./SinglePost.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];// fetching data using id

  const [post, setPost] = useState({});
  const ImgFol = "http://localhost:4000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);// whnever the path changes

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleChange=async()=>
  {
    try{
            await axios.put(`/posts/${post._id}`,{
              username:user.username,title,desc
            })  
            window.location.replace("/");
            alert("Updated successfully")
    }catch(err){

    }
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={ImgFol + post.photo} alt="" />
        )}
        {update ? ( 
          <input type="text" value={title} className="updateInput"  onChange={(e) => setTitle(e.target.value)} />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdate(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        {update ? (
          <textarea
            className="updateInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="UpdateDesc">{post.desc}</p>
        )}

        {
          update ? 
            <button className="UpdateButton" onClick={handleChange} >Update</button> : ""
          
        }
    
      </div>
    </div>
  );
};

export default SinglePost;
