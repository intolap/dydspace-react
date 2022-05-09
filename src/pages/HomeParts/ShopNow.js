import React from 'react'
import { Link } from 'react-router-dom'
export default function ShopNow() {
  return (
    <div>
        <section className="section-about-us-3 side-bg-2" >
            <div className="image-container"></div>
            <div className="container">
                <div className="row">
                <div className="inner-padding" data-aos="fade-right" data-aos-duration="1000">
                    <div className="dream-LR">
                    <h2 className="section-header"> <span className="text-52">Lorem ipsum dolor </span> Consectetur </h2>
                    <p className="intro-two">Maecenas scelerisque velit<br/>
                        elementum est vestibulum...</p>
                    <Link to="/" className="btn-ab-3">Shop Now</Link> </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
