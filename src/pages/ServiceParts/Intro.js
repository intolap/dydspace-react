import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    const data = this.props.data;
    // console.log(data);
    if(data.video_url!==''){
      return (
      <>
      <section className="our-history">
        <div className="container">
          <div className="feature-content feature-content-slump"></div>
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-1" data-aos="fade-down" data-aos-duration="1000">
              <div className="feature-content-text">
              <h2 className="section-header" dangerouslySetInnerHTML={{ __html: data.page_title }}></h2>
                <p>{data.page_subtitle}</p>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2" data-aos="fade-down" data-aos-duration="1000">
              <div className="about-content-image">
                <iframe style={{width: '100%', height: '360px'}} src={data.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-art-image feature-image-top-left-art-two"> <img src="../assets/images/jt-pointer.png" alt=""/> </div>
        <div className="feature-art-image feature-art-image-bottom-two"> <img src="../assets/images/jt-pointer2.png" alt=""/> </div>
      </section>
      </>
      )
    }else{
      return (
      <>
      <section className="wc features" data-aos="fade-down" data-aos-duration="1000">
        <div className="container">
            <div className="feature-content feature-content-ai">
            <div className="row">
                <div className="col-12 no-padding">
                <div className="feature-content-text" dangerouslySetInnerHTML={{ __html: data.page_subtitle }}></div>
                </div>
            </div>
            </div>
        </div>
        <div className="sales-count-image sales-right-count-image"> 
            <img loading="lazy" src="/inc/assets/images/jt-pointer2.png" alt=""/> 
        </div>
      </section>
      </>
      )
    }
  }
}
