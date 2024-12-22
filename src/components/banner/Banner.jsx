import React, { useState } from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {

  const [banner, setBanner] = useState(true)

  return (

      <div className={banner === true ? "banner" : "hide"}>
        <p className='text'>Sign up and get 20% off to your first order. <span><b><Link>Sign Up Now</Link></b></span></p>
        <p className='x' onClick={() => setBanner(false)}>×</p>
      </div>
  )
}

export default Banner
