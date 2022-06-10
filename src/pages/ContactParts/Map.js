import React from 'react'
import SocialIcons from "../../globals/SocialIcons";

export default function Map() {
  return (
    <div className="wrapper-two map-only" data-aos="fade-down" data-aos-duration="1000" >
        <div className="about-kk">
            <div className="content-holder"> 
            <div className="inner-banner">
                <div className="text-cont">
                <h2>Contact Us</h2>
                <p>Reaching us has never been easier</p>
                </div>
                <div className="in-picture">
                <iframe title="DydSpace - Interior Design Studio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.832864413648!2d88.3972401144329!3d22.51045314092299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271881b4c4b7b%3A0xcf2ba195524d4fc8!2sDydSpace!5e0!3m2!1sen!2sin!4v1626670926728!5m2!1sen!2sin" style={{"width": "100%", "height": "400px", "border": "0"}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="adres-bk">
                <h2>How to reach us?</h2>
                <div className="nt-bk-name">
                    <h2>Call/ WhatsApp</h2>
                    <p>10am to 7pm (Monday to Saturday)</p>
                    <p>+91 8100183831</p>
                </div>
                <div className="nt-bk-name">
                    <h2>eMail - General Enquiries</h2>
                    <p>hello@dydspace.com</p>
                </div>
                <div className="nt-bk-name">
                    <h2>eMail - Careers Opportunities</h2>
                    <p>careers@dydspace.com</p>
                </div>
                {/* <div className="nt-bk-name">
                    <h2>For General Info</h2>
                    <p>General queries & franchise</p>
                    <p>hello@dydspace.com</p>
                </div>
                <div className="nt-bk-name">
                    <h2>Press Opportunities</h2>
                    <p>Media Queries</p>
                    <P>press@dydspace.com</P>
                </div> */}
                </div>
            </div>
            <div className="main-footer">
                <div className="footer-social">
                    <SocialIcons location="header"/>
                    <div className="fixed-title"><span>Follow Us</span></div>
                </div>
            </div>
            </div>
        </div>
        </div>   
  )
}