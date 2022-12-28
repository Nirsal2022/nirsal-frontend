import React from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../components/signnav/SignNav'
import './notification.css'

const Notification = () => {
  return (
    <>
        <SignNav />
        <div className="notification">
            <div className="notification_container">
                <div className="notification_code"></div>
                <div className="notification_title">
                    <h1>Check your Mailbox</h1>
                    <p>Welcome back, input your info to continue</p>
                </div>
                <div className="notification_button">
                    <button><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Back to Login</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Notification