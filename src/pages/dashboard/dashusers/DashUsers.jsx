import React from 'react'
import './dashusers.css'
import DashNav from '../../../components/dashnav/DashNav'
import DashSidebar from '../../../components/dashsidebar/DashSidebar'
import {RiSearchLine, RiArrowDropRightLine, RiArrowDropLeftLine} from 'react-icons/ri';

const DashUsers = () => {
  return (
    <>
        <DashNav />
        <div className="dashusers">
            <DashSidebar />
            <div className="dashusers_container">
                <div className="dashusers_container-log">
                    <div className="dashusers_container-header">
                        <h3>All Users</h3>
                        <div className="dashusers_container-input">
                            <div className="dashusers_search">
                                <RiSearchLine color='#B0B0B0' size='20'/>
                                <input type="text" placeholder='Search data' />
                            </div>
                            <select>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="dashusers_container-value">
                        <p className='dashusers-number'>#</p>
                        <p className='dashusers_igc-name'>Name</p>
                        <p className='dashusers-email'>Email</p>
                        <p className='dashusers-agc'>AGC</p>
                        <p className='dashusers_role'>role</p>
                        <p className='dashusers-action'>Action</p>
                    </div>
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>1</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>2</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>3</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>4</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>5</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>6</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>7</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>8</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>9</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_container-detail">
                        <p className='dashusers-number'>10</p>
                        <p className="dashusers_igc-name">Chiroma Chukwuma Adekunle</p>
                        <p className='dashusers-email'>ccadekunle@yahoo.com</p>
                        <p className='dashusers-agc'>IGC 62430091</p>
                        <p className='dashusers_role'>Member</p>
                        <p className="dashusers-action">View Details</p>
                    </div>
                    <hr />
                    <div className="dashusers_pages">
                        <div className="dashusers_page-number">
                            <p>Rows per page</p>
                            <select>
                                <option>10</option>
                            </select>
                        </div>
                        <div className="dashusers_page-button">
                            <p>Showing 1-10 of 86</p>
                            <button><RiArrowDropLeftLine color='#B0B0B0' size='20'/></button>
                            <button><RiArrowDropRightLine color='#B0B0B0' size='20'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DashUsers