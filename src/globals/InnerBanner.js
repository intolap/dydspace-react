import React, { Component } from 'react'
import SocialIcons from './SocialIcons';

export default class InnerBanner extends Component {
  render() {
    const data = this.props.data;
    return (
        <div className="wrapper-two">
        <div className="about-kk">
          <div className="content-holder"> 
            <div className="inner-banner">
              <div className="text-cont">
                <h2>{data.acf.page_title}</h2>
                <p>{data.acf.page_subtitle}</p>
              </div>
              <div className="in-picture"> <img src={data.acf.banner_image} alt=""/> </div>
            </div>
            <div className="about-jk">
              <div className="main-footer">
                <div className="footer-social">
                  <SocialIcons location="header"/>
                  <div className="fixed-title"><span>Follow Us</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
