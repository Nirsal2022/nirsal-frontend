import React from 'react'
import DashNav from '../../../components/dashnav/DashNav'
import DashSidebar from '../../../components/dashsidebar/DashSidebar'
import './dashaccount.css'
import {RiArrowDropRightLine} from 'react-icons/ri';
import ProfileImg from '../../../images/president.png'

const DashAccount = () => {
  return (
    <>
        <DashNav />
        <div className="dash_account">
            <DashSidebar />
            <div className="dash_account-container">
                <div className="dash_account-inputs">
                    <div className="dash_account-input_header">
                        <h3>User Account</h3>
                        <p>
                            All the information about this admin user can be seen & edited 
                            here, ensure to Save Changes when you make an alteration t 
                            anyinformation on this page.
                        </p>
                    </div>
                    <div className="dash_account-input_email">
                        <p>Email Address</p>
                        <div className="dash_account-email">
                            <input type="text" placeholder='abuadekunle@yahoo.com'/>
                        </div>
                    </div>
                    <div className="dash_account-input_details">
                        <div className="dash_account-input_name">
                            <p>First Name</p>
                            <div className="dash_account-name">
                                <input type="text" placeholder='Abu Chiroma'/>
                            </div>
                        </div>
                        <div className="dash_account-input_name">
                            <p>Last Name</p>
                            <div className="dash_account-name">
                                <input type="text" placeholder='Adekunle'/>
                            </div>
                        </div>
                    </div>
                    <div className="dash_account-input_details">
                        <div className="dash_account-input_name">
                            <p>Phone Number</p>
                            <div className="dash_account-name">
                                <input type="phone" placeholder='+234 | 8123456789'/>
                            </div>
                        </div>
                        <div className="dash_account-input_name">
                            <p>Date of Birth</p>
                            <div className="dash_account-name">
                                <input type="date"/>
                            </div>
                        </div>
                    </div>
                    <div className="dash_account-input_details">
                        <div className="dash_account-input_name">
                            <p>Street Name</p>
                            <div className="dash_account-name">
                                <input type="text" placeholder='Plot 1286 Zone A Apo Resettlement'/>
                            </div>
                        </div>
                        <div className="dash_account-input_location">
                            <div className="dash_account-town">
                                <p>Town/City</p>
                                <div className="dash_account-name">
                                    <input type="text" placeholder='Abuja'/>
                                </div>
                            </div>
                            <div className="dash_account-town">
                                <p>State</p>
                                <div className="dash_account-name">
                                    <input type="text" placeholder='Federal Capital...'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dash_account-input_details">
                        <div className="dash_account-input_name">
                            <p>Role</p>
                            <div className="dash_account-name">
                                <input type="text" placeholder='Super admin'/>
                            </div>
                        </div>
                        <div className="dash_account-input_name">
                            <p>AGC</p>
                            <div className="dash_account-name">
                                <input type="text" placeholder='AGC-0997201'/>
                            </div>
                        </div>
                    </div>
                    <div className="dash_account-more_info">
                        <p>Show Additional Information <RiArrowDropRightLine className='dash_account-icon' size='20' /></p>
                    </div>
                    <div className="dash_account-button">
                        <button>Save Changes</button>
                    </div>
                </div>
                <div className="dash_account-profile">
                    <img src={ProfileImg} alt="" />
                    <div className="dash_account-profile_details">
                        <h3>Abu C. Adekunle</h3>
                        <div className="dash_account-profile_role">
                            <p>BVN: 123456789078</p>
                            <p>Admin</p>
                        </div>
                    </div>
                    <hr />
                    <div className="dash_account-profile_email">
                        <p>abubakarkabiru@yahoo.com</p>
                        <div className="dash_account-profile_number">
                            <p>04th April 1983</p>
                            <p>+234 816 454 2233</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashAccount