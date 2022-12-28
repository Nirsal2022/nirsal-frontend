import React from 'react'
import './homeheader.css'
import headerImg from '../../images/header.png'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <div className="header" id='home'>
            <div className="header_content">
                <h1>Input Geo-Cooperative Enrollment Portal</h1>
                <p>
                    NIRSAL Input Geo-Cooperative (IGC) is a structured 
                    commodity finance that links actors in the pre-upstream 
                    segment of the agricultural value chain to financing 
                    opportunities under a structured agreement. 
                </p>
                <div className="header_content-btn">
                    <button><Link to="/usertype" style={{textDecoration:"none", color:"inherit"}}>Get Started</Link></button>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="header_image">
                <img src={headerImg} alt="Nirsal" />
            </div>
        </div>
  )
}

export default HomeHeader