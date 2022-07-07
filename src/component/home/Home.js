import React, { useEffect, useState, } from 'react'
import Header from '../header/Header'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'
import "./Home.css"
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts,setPosts]=useState([])
  const {search} = useLocation()

  useEffect(()=>{
    const getData = async()=>{
     const res= await axios.get("/posts" +search)
    setPosts(res.data)
    }
    getData()
  },[search])
  return (
   <>
     <Header />
        <div className="home">
            <Posts posts={posts} />
            <Sidebar /> 
        </div>
       
   </>
      
    
  )
}

export default Home