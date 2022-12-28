import React from 'react'
import './application.css'
import blender from '../../images/blender.png'
import input from '../../images/input.png'
import { Link } from 'react-router-dom'

const Application = () => {
  return (
    <div className='application' id='blender'>
        <h1>Application Options</h1>
        <div className="application_option">
            <div className="blender_input">
                <img src={blender} alt="" />
                <h1>Blenders</h1>
                <p>Blenders are individuals/companies who operate a fertilizer blending/seeds production plant, etc.</p>
                <button><Link to="/signup" style={{textDecoration:"none", color:"inherit"}}>Enroll Now</Link></button>
            </div>
            <div className="blender_input">
                <img src={input} alt="" />
                <h1>Input Suppliers</h1>
                <p>Input Suppliers are individuals or businesses that supply and distribute input products and pre-production services.</p>
                <button><Link to="/signup" style={{textDecoration:"none", color:"inherit"}}>Enroll Now</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Application