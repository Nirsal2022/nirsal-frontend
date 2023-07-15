import React from 'react'
import './dashactive.css'
import DashNav from '../../../components/dashnav/DashNav'
import DashSidebar from '../../../components/dashsidebar/DashSidebar'
import {RiSearchLine, RiArrowDropRightLine, RiArrowDropLeftLine} from 'react-icons/ri';

const DashActive = () => {
  return (
    <>
        <DashNav />
        <div className="dashactive">
            <DashSidebar />
            <div className="dashactive_container">
                <div className="dashactive_container-log">
                    <div className="dashactive_container-header">
                        <h3>All Users</h3>
                        <div className="dashactive_container-input">
                            <div className="dashactive_search">
                                <RiSearchLine color='#B0B0B0' size='20'/>
                                <input type="text" placeholder='Search data' />
                            </div>
                            <select>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="dashactive_container-value">
                        <p className='dashactive-number'>#</p>
                        <p className='dashactive_activity'>Activity</p>
                        <p className='dashactive-user'>User</p>
                        <p className='dashactive-date'>Date</p>
                        <p className='dashactive-action'>Action</p>
                    </div>
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>1</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>2</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>3</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>4</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>5</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>6</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>7</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>8</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>9</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_container-detail">
                        <p className='dashactive-number'>10</p>
                        <p className="dashactive_activity">New user account created</p>
                        <p className='dashactive-user'>Ali Chidi Ogunleye</p>
                        <p className='dashactive-date'>Yesterday</p>
                        <p className="dashactive-action">UNDO</p>
                    </div>
                    <hr />
                    <div className="dashactive_pages">
                        <div className="dashactive_page-number">
                            <p>Rows per page</p>
                            <select>
                                <option>10</option>
                            </select>
                        </div>
                        <div className="dashactive_page-button">
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

export default DashActive