import React from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../../components/signnav/SignNav'
import './moremembers.css'

const MoreMembers = () => {
  return (
    <>
        <SignNav />
        <div className="more_members">
            <div className="more_members-step">
                <p>Know Your Leaders</p>
                <span>STEP ONE</span>
            </div>
        </div>
        <div className="more_members-section">
            <div className="more_members-container">
                <div className="more_members-title">
                    <h1>Add more members to IGC</h1>
                    <p>Please enter the member’s BVN in the field below and continue</p>
                </div>
                <div className="more_members-input">
                    <div className="more_members-code">
                        <p>Enter Name</p>
                        <div className="more_members-input_field">
                            <input type="text" placeholder='New Member Name' />
                        </div>
                    </div>
                    <div className="more_members-code">
                        <p>Enter BVN</p>
                        <div className="more_members-input_field">
                            <input type="text" placeholder='Enter member BVN' />
                        </div>
                    </div>
                    <div className="more_members-code">
                        <p>Enter Email</p>
                        <div className="more_members-input_field">
                            <input type="text" placeholder='Enter member Email' />
                        </div>
                    </div>
                </div>
                <div className="more_members-button">
                    <button><Link to="/member_review" style={{textDecoration:"none", color:"inherit"}}>Save & Continue</Link></button>
                </div>
                <p className='pres_bvn-check'>To Check BVN, Dial *560# on your Phone</p>
            </div>
        </div>
    </>
  )
}

export default MoreMembers