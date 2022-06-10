import React, { useState, useEffect }  from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonials() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [testimonials, setTestimonials] = useState();
    
    useEffect(() => {
        fetch("https://dydspace.com/wp-json/wp/v2/testimonials/?acf_format=standard")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setTestimonials(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
    // console.log(testimonials);
    if (error) {
        console.log(error);
        // return <div>Error: {error.message}</div>;
        return '';
    } else if (!isLoaded) {
        // console.log('Loading Testimonials...');
        // return <div>Loading...</div>;
        return '';
    } else {
        var striptags = require('striptags');
        return (
            <section className="features-sc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="st-customers"> <span>See What Our </span> <h6>Customers are Saying</h6> </div>
                        </div>
                        <div className="col-md-7">
                            <div className="testi-wraper">
                                <OwlCarousel className='owl-theme' id="owl-carousel-testi" responsiveClass slideBy nav responsive={{
                                    0:{
                                        items:1,
                                        nav:true
                                    },
                                    600:{
                                        items:1,
                                        nav:false
                                    },
                                    1000:{
                                        items:1,
                                        nav:true,
                                        loop:false
                                    }
                                }}>
                                    {testimonials.map((item, i) => {
                                    return (
                                        <div key={i} className="item">
                                            <div className="testi-monial-sec">
                                                <p>{striptags(item['acf']['comment'])}</p>
                                                <div className="testi-icon"> <img src={(item['acf']['image']==='')?'https://picsum.photos/200/300?random='+{i}:item['acf']['image'].toString()} alt=""/> </div>
                                                <h6>{item['acf']['full_name']}</h6>
                                                <em>(Posted {item['date'].split('T')[0]})</em>
                                            </div>
                                        </div>
                                    );
                                    })}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
