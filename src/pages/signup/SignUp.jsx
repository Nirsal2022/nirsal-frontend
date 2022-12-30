import React from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../components/signnav/SignNav'
import './signup.css'

const SignUp = () => {
  return (
    <>
        <div className="top">
            <SignNav />
        </div>
        <div className="signup">
            <div className="signup_container">
                <div className="signup_title">
                    <h1>Create Account</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="signup_input">
                    <p>Full Name</p>
                    <div className="signup_input-field">
                        <input type="text" id='name' placeholder='Enter Full Name ' />
                    </div>
                </div>
                <div className="signup_input">
                    <p>Email</p>
                    <div className="signup_input-field">
                        <input type="text" id='email' placeholder='Enter Email Address ' />
                    </div>
                </div>
                <div className="signup_input">
                    <p>Phone Number</p>
                    <div className="signup_input-field">
                        <input type="text" id='number' placeholder='Enter Phone Number ' />
                    </div>
                </div>
                <div className="signup_button">
                    <button id="button"><Link to="/setpass" style={{textDecoration:"none", color:"inherit"}}>Sign up</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp