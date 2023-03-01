import React from 'react'
import SignNav from '../../../components/signnav/SignNav'
import './presidentbvn.css'

const PresidentBVN = () => {
  return (
    <>
        <SignNav />
        <div className="pres_bvn-steps">
            <div className="pres_bvn-step">
                <p>Know Your Leaders</p>
                <span>STEP ONE</span>
            </div>
        </div>
        <div className="pres_bvn">
            <div className="pres_bvn-container">
                <div className="pres_bvn-title">
                    <h1>President BVN</h1>
                    <p>Welcome back, input your info to continue</p>
                </div>
                <div className="pres_bvn-input">
                    <div className="pres_bvn-code">
                        <p>President BVN</p>
                        <div className="pres_bvn-input_field">
                            <input type="text" placeholder='Enter President BVN' />
                        </div>
                    </div>
                </div>
                <div className="pres_bvn-button">
                    <button>Login</button>
                </div>
                <p className='pres_bvn-check'>Dial *560# to check your BVN</p>
            </div>
        </div>
    </>
  )
}

export default PresidentBVN