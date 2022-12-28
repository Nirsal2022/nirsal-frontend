import React, {useState} from 'react'
import SignNav from '../../components/signnav/SignNav'
import './resetpass.css'
import {Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'


const ResetPass = () => {
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
        <div className='resetpass'>
            <div className="resetpass_container">
                <div className="resetpass_title">
                    <h1>Reset Password</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="resetpass_input">
                    <div className="resetpass_input-pass">
                        <p>New Password</p>
                        <div className="reset-password_field">
                            <input type={type} placeholder='Create password' />
                            <span onClick={showToggle}><Icon icon={icon} size={20} /></span>
                        </div>
                    </div>
                    <div className="resetpass_input-pass">
                        <p>Confirm Password</p>
                        <div className="reset-password_field">
                            <input type={type} placeholder='Confirm password' />
                            <span onClick={showToggle}><Icon icon={icon} size={20} /></span>
                        </div>
                    </div>
                    <div className="resetpass_button">
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResetPass