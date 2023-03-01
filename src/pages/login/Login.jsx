import React, {useState} from 'react'
import SignNav from '../../components/signnav/SignNav'
import {Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(eyeOff)

    const showToggle = () => {
        if(type==='password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password')
        }
    }
  return (
    <div>
        <SignNav />
        <div className="login">
            <div className="login_container">
                <div className="login_title">
                    <h1>Login</h1>
                    <p>Welcome back, input your info to continue</p>
                </div>
                <div className="login_input">
                    <div className="login_input-pass">
                        <p>Email Address</p>
                        <div className="login_field">
                            <input type="text" placeholder='Enter your email'/>
                        </div>
                    </div>
                    <div className="login_input-pass">
                        <p>Password</p>
                        <div className="login_field">
                            <input type={type} placeholder='Enter password' />
                            <span onClick={showToggle}><Icon icon={icon} size={20} /></span>
                        </div>
                    </div>
                </div>
                <div className="login_pass-change">
                    <p><input type="checkbox" />Remember me</p>
                    <p><Link to="/forgotpass" style={{textDecoration:"none", color:"inherit"}}>Forgot Password?</Link></p>
                </div>
                <div className="login_button">
                    <button>Login</button>
                </div>
                <div className="login_sign-up">
                    <p>Don’t have an account? <span><Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Sign up here</Link></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login