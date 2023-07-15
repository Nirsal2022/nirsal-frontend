import React from 'react'
import './agcinfo.css'
import SignNav from '../../../components/signnav/SignNav'
import { Link } from 'react-router-dom'

const AGCInfo = () => {
  return (
    <>
        <SignNav />
        <div className="igc_info">
            <div className="igc_info-step">
                <p>Know Your Leaders</p>
                <span>STEP ONE</span>
            </div>
        </div>
        <div className="igc_info-section">
            <div className="igc_info-container">
                <div className="igc_info-title">
                    <h1>IGC Information</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="igc_info-input">
                    <div className="igc_info-code">
                        <p>Address Line 1</p>
                        <div className="igc_info-input_field">
                            <input type="text" placeholder='Enter address line 1' />
                        </div>
                    </div>
                    <div className="igc_info-code1">
                        <div className="igc_info-code2">
                            <p>Small Form</p>
                            <div className="igc_info-input_field">
                                <input type="text" placeholder='Small Form' />
                            </div>
                        </div>
                        <div className="igc_info-code2">
                            <p>Small Form</p>
                            <div className="igc_info-input_field">
                                <input type="text" placeholder='Small Form' />
                            </div>
                        </div>
                    </div>
                    <div className="igc_info-code1">
                        <div className="igc_info-code2">
                            <p>Small Form</p>
                            <div className="igc_info-input_field">
                                <input type="text" placeholder='Small Form' />
                            </div>
                        </div>
                        <div className="igc_info-code2">
                            <p>Small Form</p>
                            <div className="igc_info-input_field">
                                <input type="text" placeholder='Small Form' />
                            </div>
                        </div>
                    </div>
                    <div className="igc_info-code">
                        <p>Address Line 2</p>
                        <div className="igc_info-input_field">
                            <input type="text" placeholder='Enter address line 1' />
                        </div>
                    </div>
                </div>
                <div className="igc_info-button">
                    <button><Link to="/more_members" style={{textDecoration:"none", color:"inherit"}}>Save & Continue</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AGCInfo