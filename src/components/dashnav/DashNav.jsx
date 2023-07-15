import React from 'react'
import Nav from '../../images/navimage.png'
import {RiSearchLine, RiNotification2Fill, RiArrowDownSLine} from 'react-icons/ri';
import './dashnav.css'

const DashNav = () => {
  return (
    <div className='dashnav'>
        <img src={Nav} alt="" />
        <div className="dashnav_items">
            <div className="dashnav_links">
                <p>Portal Home</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
            </div>
            <div className="dashnav_settings">
                <RiSearchLine className='dashnav_icon' color='#626262' size='27' />
                <RiNotification2Fill className='dashnav_icon' color='#626262' size='27' />
                <div className="dashnav_profile dashnav_icon"></div>
                <RiArrowDownSLine className='dashnav_icon' color='#626262' size='27' />
            </div>
        </div>
    </div>
  )
}

export default DashNav