import React, { useState } from 'react'
import './vpresidentinfo.css'
import vPresImg from '../../../images/vPresident.png'
import NaijaStates from 'naija-state-local-government';
import SignNav from '../../../components/signnav/SignNav';
import { Link } from 'react-router-dom'

const VPresidentInfo = () => {
    const [getState, setState] = useState([]);

    const states = NaijaStates.states();
    const state = [...new Set(states.map(item => item.state))]
    const lgg = NaijaStates.lgas('Oyo').lgas
    console.log(lgg);

    const handleStates = (e) => {
        let areas = NaijaStates.lgas(e.target.value).lgas
        console.log(areas);
    }
    return (
        <>
            <SignNav />
            <div className='vPres_info'>
                <div className="vPres_bvn-info">
                    <img src={vPresImg} alt="President" className='pres_img' />
                    <div className="vPres_info-title">
                        <h3>Dele Kabiru <span>Vice President</span></h3>
                        <p>BVN: 123456789078</p>
                    </div>
                    <hr className='hrOne'/>
                    <div className="vPres_details">
                        <p>Email</p>
                        <p>abubakarkabiru@yahoo.com</p>
                    </div>
                    <hr />
                    <div className="vPres_details">
                        <p>Phone</p>
                        <p>+234 816 454 2233</p>
                    </div>
                    <hr />
                    <div className="vPres_details">
                        <p>Date of Birth</p>
                        <p>04th April 1983</p>
                    </div>
                    <hr />
                    <div className="vPres_details">
                        <p>Gender</p>
                        <p>Male</p>
                    </div>
                    <div className="vPres_bvn-modify">
                        <p>Not my BVN information?</p>
                        <button>Modify BVN</button>
                    </div>
                </div>
                <div className="vPres_contact-info">
                    <div className="vPres_contact-step">
                        <p>Know Your Leaders</p>
                        <span>STEP ONE</span>
                    </div>
                    <div className="vPres_contact-container">
                        <div className="vPres_contact-container_one">
                            <div className="vPres_address-line">
                                <div className="vPres_address-input">
                                    <p>Address Line 1</p>
                                    <div className="vPres_input_details">
                                        <input type="text" placeholder='Enter address line 1' />
                                    </div>
                                </div>
                                <div className="vPres_address-input">
                                    <p>Address Line 2</p>
                                    <div className="vPres_input_details">
                                        <input type="text" placeholder='Enter address line 2' />
                                    </div>
                                </div>
                            </div>
                            <div className="vPres_state">
                                <div className="vPres_state-info">
                                    <div className="vPres_state-input">
                                        <p>State</p>
                                        <select onChange={(e) =>handleStates(e)}>
                                            {states.map(items=> <option key={items} value={getState} >{items}</option>)}
                                        </select>
                                    </div>
                                    <div className="vPres_state-input">
                                        <p>LGA</p>
                                        <select></select>
                                    </div>
                                </div>
                                <div className="vPres_state-info">
                                    <div className="vPres_state-input">
                                        <p>Academic Qualification</p>
                                        <select></select>
                                    </div>
                                    <div className="vPres_state-input">
                                        <p>Experience</p>
                                        <select></select>
                                    </div>
                                </div>
                            </div>
                            <div className="vPres_questionnaire">
                                <div className="vPres_questionnaire-question">
                                    <h3>Questionnaire</h3>
                                </div>
                                <div className="vPres_questionnaire-question">
                                    <p>Has the President ever cordinated/mobilized a group of input suppliers?</p>
                                    <div className="vPres_questionnaire-value">
                                        <input type="radio" value='yes' /> <span>Yes</span>
                                        <input type="radio" value='no' /> <span>No</span>
                                    </div>
                                </div>
                                <div className="vPres_questionnaire-question">
                                    <p>Has the President successfully held a leadership position in a group?</p>
                                    <div className="vPres_questionnaire-value">
                                        <input type="radio" value='yes' /> <span>Yes</span>
                                        <input type="radio" value='no' /> <span>No</span>
                                    </div>
                                </div>
                                <div className="vPres_questionnaire-question">
                                    <p>Deos the President possess knowledge of supply-chain and inventory management?</p>
                                    <div className="vPres_questionnaire-value">
                                        <input type="radio" value='yes' /> <span>Yes</span>
                                        <input type="radio" value='no' /> <span>No</span>
                                    </div>
                                </div>
                                <div className="vPres_questionnaire-question">
                                    <p>Does the President possess excellent report writing skills?</p>
                                    <div className="vPres_questionnaire-value">
                                        <input type="radio" value='yes' /> <span>Yes</span>
                                        <input type="radio" value='no' /> <span>No</span>
                                    </div>
                                </div>
                                <div className="vPres_questionnaire-question">
                                    <p>Does the President use a smartphone (messaging applications e.g. Whatsapp?)</p>
                                    <div className="vPres_questionnaire-value">
                                        <input type="radio" value='yes' /> <span>Yes</span>
                                        <input type="radio" value='no' /> <span>No</span>
                                    </div>
                                </div>
                            </div>
                            <div className="vPres_businessInfo">
                                <div className="vPres_businessInfo-input">
                                    <h3>Business Information</h3>
                                </div>
                                <div className="vPres_businessInfo-input">
                                    <p>Business Name</p>
                                    <div className="vPres_input_details">
                                        <input type="text" placeholder='Enter Business name ' />
                                    </div>
                                </div>
                                <div className="vPres_businessInfo-input">
                                    <p>Business Type</p>
                                    <div className="vPres_input_details">
                                        <input type="text" placeholder='Please Choose' />
                                    </div>
                                </div>
                                <div className="vPres_businessInfo-input">
                                    <p>Business Address Line 1</p>
                                    <div className="vPres_input_details">
                                        <input type="text" placeholder='Enter address line 1' />
                                    </div>
                                </div>
                                <div className="vPres_businessInfo-input">
                                    <p>Business Address Line 2</p>
                                    <div className="vPres_input_details">
                                        <input type="text" placeholder='Enter address line 2' />
                                    </div>
                                </div>
                                <div className="vPres_businessInfo-input">
                                    <div className="vPres_businessInfo-cat">
                                        <p>Product Category</p>
                                        <div className="vPres_categories">
                                            <div><input type="checkbox" /> <span>Seed</span></div>
                                            <div><input type="checkbox" /> <span>Fertilizer</span></div>
                                            <div><input type="checkbox" /> <span>Herbicide</span></div>
                                            <div><input type="checkbox" /> <span>Bags</span></div>
                                            <div><input type="checkbox" /> <span>Pesticide</span></div>
                                            <div><input type="checkbox" /> <span>Insecticide</span></div>
                                            <div><input type="checkbox" /> <span>Equipment</span></div>
                                        </div>
                                    </div>
                                    <div className="vPres_businessInfo-cat">
                                        <p>Commodity Type</p>
                                        <div className="vPres_categories">
                                            <div><input type="checkbox" /> <span>Maize</span></div>
                                            <div><input type="checkbox" /> <span>Rice</span></div>
                                            <div><input type="checkbox" /> <span>Cassava</span></div>
                                            <div><input type="checkbox" /> <span>Wheat</span></div>
                                            <div><input type="checkbox" /> <span>Ginger</span></div>
                                            <div><input type="checkbox" /> <span>Sesame</span></div>
                                            <div><input type="checkbox" /> <span>Livestock</span></div>
                                            <div><input type="checkbox" /> <span>Acquaculture</span></div>
                                            <div><input type="checkbox" /> <span>Poultry</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vPres_state">
                                <h3>Supply Capacity</h3>
                                <div className="vPres_state-info">
                                    <div className="vPres_state-input">
                                        <p>Small Dropdown Form</p>
                                        <select onChange={(e) =>handleStates(e)}>
                                            {states.map(items=> <option key={items} value={getState} >{items}</option>)}
                                        </select>
                                    </div>
                                    <div className="vPres_state-input">
                                        <p>Small Dropdown Form</p>
                                        <select></select>
                                    </div>
                                </div>
                                <div className="vPres_state-info">
                                    <div className="vPres_state-input">
                                        <p>Small Dropdown Form</p>
                                        <select></select>
                                    </div>
                                    <div className="vPres_state-input">
                                        <p>Small Dropdown Form</p>
                                        <select></select>
                                    </div>
                                </div>
                            </div>
                            <div className="vPres_state">
                                <h3>Location (Lat. & Lon)</h3>
                                <div className="vPres_state-info">
                                    <div className="vPres_state-input">
                                        <p>Small Form</p>
                                        <select onChange={(e) =>handleStates(e)}>
                                            {states.map(items=> <option key={items} value={getState} >{items}</option>)}
                                        </select>
                                    </div>
                                    <div className="vPres_state-input">
                                        <p>Small Form</p>
                                        <select></select>
                                    </div>
                                </div>
                            </div>
                            <div className="vPres_button">
                                <button><Link to="/finsec_info" style={{textDecoration:"none", color:"inherit"}}>Save & Continue</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
}

export default VPresidentInfo