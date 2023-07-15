import React from 'react'
import './overview.css'
import SignNav from '../../../components/signnav/SignNav'
import presImg from '../../../images/president.png'
import vPresImg from '../../../images/vPresident.png'
import finSec from '../../../images/finSec.png'
import { Link } from 'react-router-dom'

const Overview = () => {
  return (
    <>
        <SignNav />
        <div className="overview">
            <div className="overview_section">
                <div className="overview_header">
                    <p>Review AGC Leaders</p>
                    <span>STEP ONE</span>
                </div>
                <div className="overview_leaders">
                    <div className="overview_leader">
                        <img src={presImg} alt="" />
                        <div className="overview_leader-title">
                            <h4>Abu Okoye</h4>
                            <p>AGC President</p>
                        </div>
                    </div>
                    <div className="overview_leader">
                        <img src={vPresImg} alt="" />
                        <div className="overview_leader-title">
                            <h4>Abu Okoye</h4>
                            <p>AGC President</p>
                        </div>
                    </div>
                    <div className="overview_leader">
                        <img src={finSec} alt="" />
                        <div className="overview_leader-title">
                            <h4>Abu Okoye</h4>
                            <p>AGC President</p>
                        </div>
                    </div>
                </div>
                <div className="overview_button">
                    <button><Link to="/agc_info" style={{textDecoration:"none", color:"inherit"}}>Save & Continue</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Overview