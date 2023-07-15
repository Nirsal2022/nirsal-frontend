import React from 'react'
import DashNav from '../../../components/dashnav/DashNav'
import {RiArrowDropRightLine} from 'react-icons/ri';
import './dashhome.css'
import DashSidebar from '../../../components/dashsidebar/DashSidebar';
import { Link } from 'react-router-dom';

const DashHome = () => {
  return (
    <>
        <DashNav />
        <div className="dashhome">
            <DashSidebar />
            <div className="dashhome_user">
                <div className="dashhome_user-section">
                    <div className="dashhome_user-all">
                        <div className="dashhome_user-allagc">
                            <p>All AGC</p>
                            <div className="dashhome_user-numbers">
                                <h3>28</h3>
                                <p>+8 NEW</p>
                            </div>
                        </div>
                        <div className="dashhome_user-allagc">
                            <p>All Users</p>
                            <div className="dashhome_user-numbers">
                                <h3>634</h3>
                                <p>+117 NEW</p>
                            </div>
                        </div>
                    </div>
                    <div className="dashhome_user-logs">
                        <div className="dashhome_user-top">
                            <p>Recent AGC</p>
                            <p>View All</p>
                        </div>
                        <div className="dashhome_user-tags">
                            <p className="dashhome_user-number">#</p>
                            <p className="dashhome_user-name">IGC Name</p>
                            <p className="dashhome_user-member">Members</p>
                            <p className="dashhome_user-status">Status</p>
                            <p className="dashhome_user-action">Action</p>
                        </div>
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">1</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">2</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">3</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">4</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">5</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">6</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">7</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                        <div className="dashhome_user-value">
                            <p className="dashhome_user-number">8</p>
                            <p className="dashhome_user-name">IGC 62430091</p>
                            <p className="dashhome_user-member">8</p>
                            <div className="dashhome_user-status"><span>Processing</span></div>
                            <p className="dashhome_user-action">View<RiArrowDropRightLine size='20'/></p>
                        </div>
                        <hr />
                    </div>
                    <button><Link to="/dashboard_home" style={{textDecoration:"none", color:"red"}}>Continue</Link></button>
                </div>
                <div className="dashhome_user-activity_log">
                    <h3>Activity Log</h3>
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                    <div className="dashhome_activity-log">
                        <p>09:45AM</p>
                        <div className="dashhome_activity-alert">
                            <p>New User Account created.</p>
                            <span>...</span>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </>
  )
}

export default DashHome