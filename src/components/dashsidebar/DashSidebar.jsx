import React from 'react'
import {RiMenuFoldFill, RiFileCopyFill, RiUserFill, RiNotification2Fill, RiSettings3Fill, RiQuestionFill, RiDashboardFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './dashsidebar.css'

const DashSidebar = () => {
  return (
    <div className="dashhome_sidebar">
        <div className="dashhome_sidebar-header">
            <div className="dashhome_sidebar-username">
                <p>Abu C. Adekunle</p>
                <p>Super Admin</p>
            </div>
            <RiMenuFoldFill color='#00000' size='27' />
        </div>
        <div className="dashhome_sidebar-items">
            <div className="dashhome_sidebar-list">
                <RiDashboardFill className='dashhome_sidebar-icon' size='27' />
                <p><Link to="/dashboard_home" style={{textDecoration:"none", color:"inherit"}}>Dashboard</Link></p>
            </div>
            <div className="dashhome_sidebar-list">
                <RiFileCopyFill className='dashhome_sidebar-icon' size='27' />
                <p><Link to="/dashboard_home" style={{textDecoration:"none", color:"inherit"}}>All AGC</Link></p>
            </div>
            <div className="dashhome_sidebar-list">
                <RiUserFill className='dashhome_sidebar-icon' size='27' />
                <p>Users</p>
            </div>
            <div className="dashhome_sidebar-list">
                <RiNotification2Fill className='dashhome_sidebar-icon' size='27' />
                <p>Activity Log</p>
            </div>
            <div className="dashhome_sidebar-list">
                <RiSettings3Fill className='dashhome_sidebar-icon' size='27' />
                <p>Account</p>
            </div>
            <div className="dashhome_sidebar-list">
                <RiQuestionFill className='dashhome_sidebar-icon' size='27' />
                <p>Help</p>
            </div>
        </div>
    </div>
  )
}

export default DashSidebar