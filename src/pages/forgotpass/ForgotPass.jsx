import React from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../components/signnav/SignNav'
import './forgotpass.css'

const ForgotPass = () => {
  return (
    <>
        <SignNav />
        <div className="forgotpass">
            <div className="forgotpass_container">
                <div className="forgotpass_title">
                    <h1>Forgot Password</h1>
                    <p>Welcome back, input your info to continue</p>
                </div>
                <div className="forgotpass_input">
                    <p>Enter Email</p>
                    <div className="forgotpass_field">
                        <input type="text" placeholder='Enter your email address'/>
                    </div>
                </div>
                <div className="forgotpass_button">
                    <button><Link to="/notification" style={{textDecoration:"none", color:"inherit"}}>Login</Link></button>
                </div>
                <div className="forgotpass_login">
                    <p>Remembered Password? <span><a href="#login">Back to login</a></span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPass