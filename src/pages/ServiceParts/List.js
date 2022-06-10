import React from 'react'
import { Link } from 'react-router-dom';

export default function List(props) {
  // console.log(props);
  // return false;
  var striptags = require('striptags');
  return (
    <section className="our-history">
      <div className="container">
      {props.data.map((item,i) => {
        // console.log(item);
        // return true;
          return (
            <div key={i} className="feature-content feature-content-slump" style={{marginBottom: '80px'}}>
              <div className="row">
                <div className="col-lg-4 col-md-4 order-1 order-lg-1" data-aos="fade-down" data-aos-duration="1000">
                  <div className="about-content-image">
                    <img src={item['_embedded']['wp:featuredmedia'][0]['source_url'].toString()} alt=""/>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 order-2 order-lg-2" data-aos="fade-down" data-aos-duration="1000">
                  <div className="feature-content-text">
                    <h2 className="section-header-services">{item['title']['rendered']}</h2>
                    <p>{striptags(item['content']['rendered']).replace(/^(.{10}[^\s]*).*/, "$1")}</p>
                    <Link to={"/services/"+item['slug']} className="button button-black">See more designs</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="feature-art-image feature-image-top-left-art-two"> <img src="../assets/images/jt-pointer.png" alt=""/></div>
      <div className="feature-art-image feature-art-image-bottom-two"> <img src="../assets/images/jt-pointer2.png" alt=""/></div>
    </section>
  )
}