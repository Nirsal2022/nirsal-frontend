import React from 'react'
import SignNav from '../../../components/signnav/SignNav'
import './presidentbvn.css'

const PresidentBVN = () => {
  return (
    <>
        <SignNav />
        <div className="pres_bvn">
            <div className="pres_bvn-container">
                <div className="pres_bvn-kyl">
                    <p>Know Your Leaders</p>
                    <div><p>STEP ONE</p></div>
                </div>
                <div className="pres_bvn-contain">
                    <div className="pres_bvn-title">
                        <h1>President BVN</h1>
                        <p>Welcome back, input your info to continue</p>
                    </div>
                    <div className="pres_bvn-input">
                        <p>President BVN</p>
                        <div className="pres_bvn-field">
                            <input type="text" placeholder='Enter President BVN'/>
                        </div>
                    </div>
                    <div className="pres_bvn-button">
                        <button>Login</button>
                        <p>Dial *560# to check your BVN</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PresidentBVN