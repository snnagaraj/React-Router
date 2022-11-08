import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import About from '../About/About'

const Profile = () => {
    // const Params=useParams();
    // console.log(Params,"params");
    const navigate=useNavigate();
    const goToSecond=()=>{
      navigate('/About')
    }
  return (
    <div className='profile-page'>
        <h1>Profile</h1>
        <p>This is a profile page</p>
        <button onClick={()=>goToSecond()}></button>
    </div>
  )
}

export default Profile