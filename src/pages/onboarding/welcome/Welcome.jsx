import React from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../../components/signnav/SignNav'
import './welcome.css'

const Welcome = () => {
  return (
    <>
        <SignNav />
        <div className="welcome">
            <div className="welcome-steps">
                <p>Welcome</p>
                <span>STEP ONE</span>
            </div>
            <div className="welcome-container">
                <div className="welcome-header">
                    <p>ILLUSTRATION HERE</p>
                </div>
                <div className="welcome-details">
                    <h3>Welcome Letter</h3>
                    <p>AGC Setup completed and payment verified, Please view your letter below</p>
                </div>
                <div className="welcome-button">
                    <button>View Letter</button>
                    <button><Link to="/dashboard_home" style={{textDecoration:"none", color:"inherit"}}>Continue</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Welcome