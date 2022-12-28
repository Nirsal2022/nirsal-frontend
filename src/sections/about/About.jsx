import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about_title">
            <h1>Eligibility Criteria</h1>
            <p>
                Subject to abligor(s) ability to meet financial parter 
                institutions credit assessment criteria, the obligor 
                must demonstrate capacity for production or supply of 
                input products and/or services  which includes the evidence of:
            </p>
        </div>
        <div className="about_content">
            <div className="about_content-container">
                <p>1.</p>
                <p>Demonstration of requisite experience in trading within the pre-upstream segment of the value chain. </p>
            </div>
            <div className="about_content-container">
                <p>2.</p>
                <p>Evidence of capability to timely deliver quality input product/service in at competitive price. </p>
            </div>
            <div className="about_content-container">
                <p>3.</p>
                <p>Adequate Stocks of Products or Service Delivery Systems. </p>
            </div>
            <div className="about_content-container">
                <p>4.</p>
                <p>Inventory and Tracking Process or Systems. </p>
            </div>
            <div className="about_content-container">
                <p>5.</p>
                <p>Security of Input Items, Equipment and Facility. </p>
            </div>
        </div>

    </div>
  )
}

export default About