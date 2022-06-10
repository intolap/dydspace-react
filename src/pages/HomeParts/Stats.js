import React from 'react'

export default function Stats(props) {
  return (
    <section className="features">
        <div className="container">
            <div className="row">
            {props.data['icon_set'].map((item,i) => {
                var direction = (i%2===0)?'up':'down';
                return (
                    <div key={i} className="col-lg-3 col-sm-6 col-12" data-aos={'fade-'+direction} data-aos-duration="1000">
                        <div className="de_count">
                            <div className="de_ct-center">
                                <div className="icon-55"><img src={item['icon_image']} alt={item['icon_vertical']}/></div>
                                <div className="count-hj">
                                <h3 className="counter-count">{item['icon_number']} </h3>
                                <em>{item['icon_unit']}</em> <span>{item['icon_vertical']}</span> </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
        <div className="feature-art-image feature-art-image-left-art"> <img src="assets/images/jt-pointer.png" alt=""/> </div>
    </section>
  )
}
