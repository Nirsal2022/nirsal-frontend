import React, { useState } from 'react'
import './verify.css'
import SignNav from '../../components/signnav/SignNav'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Verify = () => {
    const [email, setEmail] = useState('')
    const [confirmationCode, setConfirmationCode] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = axios.post(`${process.env.REACT_APP_API_URI}/verify`, {
                email,
                confirmationCode
             });
             res.data && window.location.replace('/create-password')
        } catch (err) {
            setError(true)
        }
    }
  return (
    <>
        <SignNav />
        <div className='verify'>
            <form className="verify_container" onSubmit={handleSubmit}>
                <div className="verify_title">
                    <h1>Verify Email</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="verify_input">
                    <div className="verify_input-info">
                        <p>Simple Form</p>
                        <input 
                            type="text" 
                            placeholder='Email'
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="verify_input-info">
                        <p>Simple Form</p>
                        <input 
                            type="text" 
                            placeholder='Confirmation code'
                            onChange={e=>setConfirmationCode(e.target.value)}
                        />
                    </div>
                    <div className="verify_button">
                        <button type='submit'>
                            <Link to="/create-password" style={{textDecoration:"none", color:"inherit"}}>Sign up</Link>
                        </button>
                        <p>Didn’t get the code? <a href="#resend">Resend</a></p>
                    </div>
                    {error && <span style={{color:'red', marginTop:'10px'}}>something went wrong</span>}
                </div>
            </form>
        </div>
    </>
  )
}

export default Verify