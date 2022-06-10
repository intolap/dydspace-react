import React from 'react'
import { Link } from 'react-router-dom'

export default function Cta(props) {
    console.log(props);
  return (
    <section className="ft-backgt lazy" data-aos="fade-down" data-aos-duration="1000" style={{backgroundImage: "url("+props.data.acf['banner_bg_image']+")"}}>
        <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-offset-4 ">
                <div className="of-right-cl">
                    <h2 className="section-header-two"> <span className="text-56">{props.data.acf['banner_heading']} </span> <br/>
                    {props.data.acf['banner_subheading']}</h2>
                    <Link to="/get-started" className="btn-cd get-started">Get Started</Link>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}