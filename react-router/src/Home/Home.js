import React from 'react'
import Profile from '../Profile/Profile'
import './Home.css'
import { Link , useNavigate} from 'react-router-dom'
import About from '../About/About'

const Home = () => {
    const navigate=useNavigate();
    const goToAbout=()=>{
      navigate('About')
    }

    const goToProfile=()=>{
      navigate('Profile')
    }

    const goToProduct=()=>{
      navigate({
        path:"Product",
        search:"?id=5687&name=product"
      })
    }
  return (
    <div className='home-page'>
        <h1>HOME</h1>
        <p>This is an home page</p>
        <Link to={"Profile/5"}>GO TO PROFILE</Link>
        <Link to={"Product? id=5687&name=product"}>Go To Product</Link>
        <button onClick={()=> goToAbout()}>GO TO About</button>
        <button onClick={()=>goToProfile()}>Go To Profile</button>
        <button onClick={()=>goToProduct()}>Go To Product</button>
    </div>
    
  )
}

export default Home