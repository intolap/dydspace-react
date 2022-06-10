import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Parallax extends Component {
  render() {
    const data = this.props.data;
    const url = new URL(data.acf.get_started_link);
    
    return (
        <section className="ft-backgt" style={{backgroundImage: "url("+data.acf.banner_bg_image+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-offset-4 ">
                    <div className="of-right-cl">
                        <h2 className="section-header-two"> <span className="text-56">{data.acf.banner_heading} </span> <br/>{data.acf.banner_subheading} </h2>
                        <Link to={url.pathname} className="btn-cd">Get Started</Link> </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
