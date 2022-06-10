import React, { Component } from 'react'

export default class AboutUs extends Component {  
  render() {
    const data = this.props.data;
    var striptags = require('striptags');
    return (
        <section className="our-history">
        <div className="container">
          <div className="feature-content feature-content-slump">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-1">
                <div className="feature-content-text">
                  <h2 className="section-header">{data.title.rendered}</h2>
                  {striptags(data.content.rendered)}
                </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-2">
                <div className="about-content-image"> <img src={data['_embedded']['wp:featuredmedia'][0]['source_url'].toString()} alt=""/> </div>
              </div>
              <div className="col-lg-12 order-3 order-lg-3">
                <div className="interior-table">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th width="15%"></th>
                          <th width="43%">DYDSPACE</th>
                          <th width="43%">Other Interior Designers</th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.acf.factors.map((item, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{item.heading}</th>
                            <td dangerouslySetInnerHTML={{ __html: item.first_column }}></td>
                            <td dangerouslySetInnerHTML={{ __html: item.second_column }}></td>
                          </tr>
                        );
                      })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-art-image feature-image-top-left-art-two"> <img src="../assets/images/jt-pointer.png" alt=""/> </div>
        <div className="feature-art-image feature-art-image-bottom-two"> <img src="../assets/images/jt-pointer2.png" alt=""/> </div>
      </section>
    )
  }
}
