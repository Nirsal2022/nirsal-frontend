import React from 'react'

import SignNav from '../../components/signnav/SignNav'
import './usertype.css'

import blender from '../../images/blender.png'
import input from '../../images/input.png'
import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward'
import {Icon} from 'react-icons-kit'
import { Link } from 'react-router-dom'

const UserType = () => {
  return (
    <>
        <SignNav />
        <div className="user_type">
            <div className="user_type-container">
                <div className="user_type-title">
                    <h1>Choose Application</h1>
                    <p>Please Complete the form below to continue</p>
                </div>
                <div className="user_type-types">
                    <div className="user_type-input">
                        <img src={input} alt="" />
                        <div className="user_input">
                            <h1>Input Supplier</h1>
                            <p>
                                Input Suppliers are individuals or businesses 
                                that supply and distribute input products and 
                                pre-production services.
                            </p>
                            <p><Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Continue</Link><Icon icon={ic_arrow_forward} size={20} /></p>
                        </div>
                    </div>
                    <div className="user_type-input">
                        <img src={blender} alt="" />
                        <div className="user_input">
                            <h1>Blender</h1>
                            <p>
                                Blenders are individuals/companies who operate 
                                input items production plant.
                            </p>
                            <p><Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Continue</Link><Icon icon={ic_arrow_forward} size={20} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserType