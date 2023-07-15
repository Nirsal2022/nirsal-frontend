import React from 'react'
import { Link } from 'react-router-dom'
import SignNav from '../../../components/signnav/SignNav'
import './memreview.css'

const MemReview = () => {
  return (
    <>
        <SignNav />
        <div className="review">
            <div className="review_steps">
                <p>Review Members</p>
                <span>STEP ONE</span>
            </div>
            <div className="review_container">
                <div className="review_container-section">
                    <div className="review_members-header">
                        <p className='number'>#</p>
                        <p className="farmer">Farmer</p>
                        <p className="phone">Phone Number</p>
                        <p className="cross_guarantee">Cross Guarantee</p>
                        <p className="generate">Generate</p>
                    </div>
                    <div className='review_member'>
                        <p className='number'>1.</p>
                        <p className='farmer'>Abubakar Chiroma Adekunle</p>
                        <p className="phone phone-section">+234 812 345 6789</p>
                        <span className="cross_guarantee cross_guarantee-section">Unassigned</span>
                        <button className="generate generate_section"><Link to="/final_info" style={{textDecoration:"none", color:"inherit"}}>Send USSD</Link></button>
                    </div>
                    <hr />
                    <div className='review_member'>
                        <p className='number'>2.</p>
                        <p className='farmer'>Abubakar Chiroma Adekunle</p>
                        <p className="phone phone-section">+234 812 345 6789</p>
                        <span className="cross_guarantee cross_guarantee-section">Unassigned</span>
                        <button className="generate generate_section"><Link to="/final_info" style={{textDecoration:"none", color:"inherit"}}>Send USSD</Link></button>
                    </div>
                    <hr />
                    <div className='review_member'>
                        <p className='number'>3.</p>
                        <p className='farmer'>Abubakar Chiroma Adekunle</p>
                        <p className="phone phone-section">+234 812 345 6789</p>
                        <span className="cross_guarantee cross_guarantee-section">Unassigned</span>
                        <button className="generate generate_section"><Link to="/final_info" style={{textDecoration:"none", color:"inherit"}}>Send USSD</Link></button>
                    </div>
                    <hr />
                    <div className='review_member'>
                        <p className='number'>4.</p>
                        <p className='farmer'>Abubakar Chiroma Adekunle</p>
                        <p className="phone phone-section">+234 812 345 6789</p>
                        <span className="cross_guarantee cross_guarantee-section">Unassigned</span>
                        <button className="generate generate_section"><Link to="/final_info" style={{textDecoration:"none", color:"inherit"}}>Send USSD</Link></button>
                    </div>
                    <hr />
                    <div className='review_member'>
                        <p className='number'>5.</p>
                        <p className='farmer'>Abubakar Chiroma Adekunle</p>
                        <p className="phone phone-section">+234 812 345 6789</p>
                        <span className="cross_guarantee cross_guarantee-section">Unassigned</span>
                        <button className="generate generate_section"><Link to="/final_info" style={{textDecoration:"none", color:"inherit"}}>Send USSD</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MemReview