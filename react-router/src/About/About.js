import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from '../Profile/Profile';
import './About.css'

function About (){
  const navigate=useNavigate();

  const goToMain=()=>{
    navigate("/Home")
  }
  return (
    <div className='about-page'>
       <h1>About</h1>
       <p>This is about section</p>
       <Link to="/Profile"></Link>
       <button onClick={()=>goToMain()}>Go To Home</button>
    </div>
  )
}

export default About