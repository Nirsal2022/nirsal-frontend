import React from 'react'
import SignNav from '../../../components/signnav/SignNav'
import './vpresidentbvn.css'
import { Link } from 'react-router-dom'

const VPresidentBVN = () => {
  return (
    <>
        <SignNav />
        <div className="vicePres_bvn-steps">
            <div className="vicePres_bvn-step">
                <p>Know Your Leaders</p>
                <span>STEP ONE</span>
            </div>
        </div>
        <div className="vicePres_bvn">
            <div className="vicePres_bvn-container">
                <div className="vicePres_bvn-title">
                    <h1>Vice President BVN</h1>
                    <p>Welcome back, input your info to continue</p>
                </div>
                <div className="vicePres_bvn-input">
                    <div className="vicePres_bvn-code">
                        <p>Vice President BVN</p>
                        <div className="vicePres_bvn-input_field">
                            <input type="text" placeholder='Enter VP BVN' />
                        </div>
                    </div>
                </div>
                <div className="vicePres_bvn-button">
                    <button><Link to="/finsec_bvn" style={{textDecoration:"none", color:"inherit"}}>Continue</Link></button>
                </div>
                <p className='vicePres_bvn-check'>Dial *560# to check your BVN</p>
            </div>
        </div>
    </>
  )
}

export default VPresidentBVN