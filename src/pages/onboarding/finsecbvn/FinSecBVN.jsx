import React from 'react'
import SignNav from '../../../components/signnav/SignNav'
import './finsecbvn.css'
import { Link } from 'react-router-dom'

const FinSecBVN = () => {
  return (
    <>
        <SignNav />
        <div className="finsec_bvn-steps">
            <div className="finsec_bvn-step">
                <p>Know Your Leaders</p>
                <span>STEP ONE</span>
            </div>
        </div>
        <div className="finsec_bvn">
            <div className="finsec_bvn-container">
                <div className="finsec_bvn-title">
                    <h1>Fin. Sec. BVN</h1>
                    <p>Welcome back, input your info to continue</p>
                </div>
                <div className="finsec_bvn-input">
                    <div className="finsec_bvn-code">
                        <p>Fin. Sec. BVN</p>
                        <div className="finsec_bvn-input_field">
                            <input type="text" placeholder='Enter Fin Sec BVN' />
                        </div>
                    </div>
                </div>
                <div className="finsec_bvn-button">
                    <button><Link to="/president_info" style={{textDecoration:"none", color:"inherit"}}>Continue</Link></button>
                </div>
                <p className='finsec_bvn-check'>Dial *560# to check your BVN</p>
            </div>
        </div>
    </>
  )
}

export default FinSecBVN