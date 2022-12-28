import React, {useState} from 'react'
import SignNav from '../../components/signnav/SignNav'
import './setpass.css'
import {Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { Link } from 'react-router-dom'


const SetPass = () => {
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
    <>
        <SignNav />
        <div className='setpass'>
            <div className="setpass_container">
                <div className="setpass_title">
                    <h1>Create Password</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="setpass_input">
                    <div className="setpass_input-pass">
                        <p>New Password</p>
                        <div className="password_field">
                            <input type={type} placeholder='Create password' />
                            <span onClick={showToggle}><Icon icon={icon} size={20} /></span>
                        </div>
                    </div>
                    <div className="setpass_input-pass">
                        <p>Confirm Password</p>
                        <div className="password_field">
                            <input type={type} placeholder='Confirm password' />
                            <span onClick={showToggle}><Icon icon={icon} size={20} /></span>
                        </div>
                    </div>
                    <div className="setpass_button">
                        <button><Link to="/verify" style={{textDecoration:"none", color:"inherit"}}>Continue</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SetPass