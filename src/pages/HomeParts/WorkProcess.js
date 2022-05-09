import React from 'react'

export default function WorkProcess(props) {
    // console.log(props.data);
    var striptags = require('striptags');
  return (
    <div>
        <section id="section-steps-4" data-aos="fade-down" data-aos-duration="1000">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                    <h2 className="style-5"><span>Our</span> WorkProcess</h2>
                </div>
                <div className="desktop-dp justify-content-center">
                    <div className="quisque-kl">
                        <div className="stepwizard">
                            <div className="stepwizard-row">
                            {props.data['process'].map((item,i) => {
                                var activeclass = (i===0)?"active":"";
                                return (
                                <div key={i} id={"layout_"+i} className="stepwizard-step">
                                    <p>{item['tab_title']}</p>
                                    <button type="button" className={"btn btn-primary btn-circle "+activeclass} ></button>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                    {props.data['process'].map((item,i) => {
                        return (
                        <div key={i} id={i} className="process-srt">
                            <h2>{item['bg_title']}</h2>
                            <div className="row">
                                <div className="col-sm-12 col-mg-6 col-lg-6">
                                <div className="about-us-lft-img"> <img src={item['image'].toString()} alt=""/> </div>
                                </div>
                                <div className="col-sm-12 col-mg-6 col-lg-6">
                                <div className="about-inn-text">
                                    <p>{striptags(item['description'])}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
                <div className="mobile-bp">
                    <div id="horizontalTab" >
                        <ul className="resp-tabs-list">
                        {props.data['process'].map((item,i) => {
                            return (
                                <li key={i}>{item['tab_title']}</li>
                            );
                        })}
                        </ul>
                        <div className="resp-tabs-container">
                            {props.data['process'].map((item,i) => {
                                return (
                                <div key={i}>
                                    <div className="resp-tabs-lft-img"> 
                                        <img src={item['image'].toString()} alt=""/> 
                                    </div>
                                    <p>{striptags(item['description'])}</p>
                                </div>
                                );
                            })} 
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
