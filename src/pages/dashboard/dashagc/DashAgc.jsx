import React from 'react'
import DashNav from '../../../components/dashnav/DashNav'
import DashSidebar from '../../../components/dashsidebar/DashSidebar'
import './dashagc.css'
import {RiSearchLine, RiArrowDropRightLine, RiArrowDropLeftLine} from 'react-icons/ri';

const DashAgc = () => {
  return (
    <>
        <DashNav />
        <div className="dashagc">
            <DashSidebar />
            <div className="dashagc_container">
                <div className="dashagc_container-log">
                    <div className="dashagc_container-header">
                        <h3>All Input Geo co-op</h3>
                        <div className="dashagc_container-input">
                            <div className="dashagc_search">
                                <RiSearchLine color='#B0B0B0' size='20'/>
                                <input type="text" placeholder='Search data' />
                            </div>
                            <select>
                                <option>Filter</option>
                            </select>
                        </div>
                    </div>
                    <div className="dashagc_container-value">
                        <p className='dashagc-number'>#</p>
                        <p className='dashagc_igc-name'>IGC Name</p>
                        <p className='dashagc-member'>Members</p>
                        <p className='dashagc-status'>Status</p>
                        <p className='dashagc_pres-name'>President Name</p>
                        <p className='dashagc-date'>Date Created</p>
                        <p className='dashagc-action'>Action</p>
                    </div>
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>1</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>2</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>3</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>4</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>5</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>6</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>7</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>8</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>9</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_container-detail">
                        <p className='dashagc-number'>10</p>
                        <p className='dashagc_igc-name'>IGC 62430091</p>
                        <p className='dashagc-member'>8</p>
                        <div className='dashagc-status'>
                            <span>Processing</span>
                        </div>
                        <p className='dashagc_pres-name'>Abu C. Adekunle</p>
                        <p className='dashagc-date'>28th Dec. 2021</p>
                        <div className='dashagc-action'>
                            <p>View Details</p>
                            <span>Suspend</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashagc_pages">
                        <div className="dashagc_page-number">
                            <p>Rows per page</p>
                            <select>
                                <option>10</option>
                            </select>
                        </div>
                        <div className="dashagc_page-button">
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

export default DashAgc