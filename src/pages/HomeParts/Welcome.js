import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome(props) {
    const beforAfter = props.data['before_after_images'][Math.floor(Math.random() * props.data['before_after_images'].length)];

  return (
    <>
        <section className="features" data-aos="fade-down" data-aos-duration="1000">
            <div className="container">
                <div className="feature-content feature-content-ai">
                <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-7 no-padding">
                    <div className="feature-content-text">
                        <h1 className="section-header"> <span className="text-52">{props.data['upper_heading']}</span> <br/>
                        {props.data['lower_heading']} </h1>
                        <p>{props.data['teaser_text']}</p>
                        <Link to='/about' className="button button-black"> Learn More</Link> </div>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <div className="twentytwenty-container shadow-soft">
                            <img src={beforAfter['before'].toString()} alt="before" className="img-responsive img-rounded" /> 
                            <img src={beforAfter['after'].toString()} alt="after" className="img-responsive img-rounded" /> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="sales-count-image sales-right-count-image"> 
                <img src="assets/images/jt-pointer2.png" alt="" /> 
            </div>
        </section>
    </>
  )
}
