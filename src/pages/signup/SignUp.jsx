import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../components/signnav/SignNav'
import './signup.css'
import axios from 'axios'

const SignUp = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);            
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URI}/register`, {
                fullname,
                email,
                phone
            });
            res.data && window.location.replace('/verify')
        } catch (err) {
            setError(true);        
        }
    }
  return (
    <>
        <div className="top">
            <SignNav />
        </div>
        <div className="signup">
            <form className="signup_container" onSubmit={handleSubmit}>
                <div className="signup_title">
                    <h1>Create Account</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="signup_input">
                    <p>Full Name</p>
                    <div className="signup_input-field">
                        <input 
                            type="text" 
                            placeholder='Enter Full Name' 
                            onChange={e=>setFullname(e.target.value)}
                        />
                    </div>
                </div>
                <div className="signup_input">
                    <p>Email</p>
                    <div className="signup_input-field">
                        <input 
                            type="text" 
                            placeholder='Enter Email Address'
                            onChange={e=>setEmail(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="signup_input">
                    <p>Phone Number</p>
                    <div className="signup_input-field">
                        <input 
                            type="text"
                            placeholder='Enter Phone Number'
                            onChange={e=>setPhone(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="signup_button">
                    <button id="button" type='submit'>
                        <Link to='/verify' style={{textDecoration:'none', color:'inherit'}}>Login</Link>
                    </button>
                </div>
                {error && <span style={{color:'red', marginTop:'10px'}}>something went wrong!</span>}
            </form>
        </div>
    </>
  )
}

export default SignUp