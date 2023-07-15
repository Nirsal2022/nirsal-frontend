import React from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../../components/signnav/SignNav'
import './finalinfo.css'

const FinalInfo = () => {
  return (
    <>
        <SignNav />
        <div className="final_info">
            <div className="final_info-steps">
                <p>AGC Payment</p>
                <span>STEP ONE</span>
            </div>
            <div className="final_info-container">
                <div className="final_info-header">
                    <h3>Checkout IGC</h3>
                    <p>Please verify the details of your IGC</p>
                </div>
                <hr />
                <div className="final_info-details">
                    <div className="final_info-igc">
                        <p>IGC Name</p>
                        <p>AGC - 24</p>
                    </div>
                    <div className="final_info-igc">
                        <p>IGC Address</p>
                        <p>Address Location of IGC stated here</p>
                    </div>
                    <div className="final_info-igc">
                        <p>Members</p>
                        <p>Members</p>
                    </div>
                    <div className="final_info-igc">
                        <p>Type</p>
                        <p>Product or service</p>
                    </div>
                </div>
                <div className="final_info-price">
                    <p>Amount</p>
                    <h1>₦400</h1>
                </div>
                <div className="final_info-button">
                    <button><Link to="/welcome" style={{textDecoration:"none", color:"inherit"}}>Save & Continue</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FinalInfo