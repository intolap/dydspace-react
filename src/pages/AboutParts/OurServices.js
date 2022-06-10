import React, { Component } from 'react'

export default class OurServices extends Component {
    
  render() {
    const data = this.props.data;

    return (
        <section className="features-sc" styles="padding-bottom:0px;">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="style-6"><span>Our Services</span> Include</h2>
                    </div>
                    {data.acf.service.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-sm-6 col-122">
                                <div className="de_count_two">
                                    <div className="why-cuz-icon-two"> <img src={item.service_icon} alt={item.service_name}/> </div>
                                    <h2>{item.service_name}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
  }
}
