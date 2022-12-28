import React from 'react'
import './verify.css'
import SignNav from '../../components/signnav/SignNav'
import { Link } from 'react-router-dom'

const Verify = () => {
  return (
    <>
        <SignNav />
        <div className='verify'>
            <div className="verify_container">
                <div className="verify_title">
                    <h1>Verify Email</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="verify_input">
                    <div className="verify_input-info">
                        <p>Simple Form</p>
                        <input type="text" placeholder='Verification code'/>
                    </div>
                    <div className="verify_button">
                        <button><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Sign up</Link></button>
                        <p>Didn’t get the code? <a href="#resend">Resend</a></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Verify