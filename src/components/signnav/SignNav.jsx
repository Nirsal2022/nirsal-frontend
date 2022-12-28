import React from 'react'
import './signnav.css'
import logo from '../../images/navimage.png'

const SignNav = () => {
  return (
    <div className='sign_nav'>
        <div className="sign_nav-logo">
            <img src={logo} alt="Nirsal" />
        </div>
        <a href="#Home">Portal Home</a>
        <a href="#Home">About NIRSAL IGC</a>
    </div>
  )
}

export default SignNav