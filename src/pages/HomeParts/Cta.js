import React from 'react'
import { Link } from 'react-router-dom'

export default function Cta(props) {
  return (
    <section className="section-about-us-2 side-bg" >
        <div className="image-container" style={{backgroundImage: "url("+props.data['banner_image_one']+")"}}> </div>
        <div className="container">
            <div className="row">
                <div className="inner-padding" data-aos="fade-down" data-aos-duration="1000">
                    <div className="dream-k">
                        <h2 className="section-header"> <span className="text-52">{props.data['banner_heading_one']} </span> {props.data['banner_subheading_one']} </h2>
                        <p className="intro">{props.data['banner_text_one']}</p>
                        <Link to="/about" className="btn-ab">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
