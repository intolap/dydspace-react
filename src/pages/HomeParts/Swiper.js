import React, { useState, useEffect }  from 'react';
import jQuery from 'jquery';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SocialIcons from '../../globals/SocialIcons';

export default function Swiper() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [slides, setSlides] = useState();
    
    useEffect(() => {
        fetch("https://dydspace.com/wp-json/wp/v2/home_slider/?_embed")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setSlides(data);
                    // console.log(slides);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
    // console.log(slides);
    if (error) {
        console.log(error);
        // return <div>Error: {error.message}</div>;
        return '';
    } else if (!isLoaded) {
        // console.log('Loading Slides...');
        // return <div>Loading...</div>;
        return '';
    } else {
        return (
            <>
            <div className="wrapper">
                <div className="content-holder"> 
                    <div className="fs-gallery-wrap home-slider fl-wrap full-height">                    
                        <Swiper 
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true, }}
                                onSwiper={(swiper) => {
                                    console.log(swiper);
                                    swiper.pagination.bullets.forEach(function(element, index, array){
                                        jQuery(element).html(index+1);
                                    });
                                }}
                                // onSlideChange={() => console.log('slide change')}
                        >                                
                            {slides.map((item, i) => {
                            return (
                                <SwiperSlide className="swiper-slide swiper-slide-next" data-swiper-slide-index="{i}" key={i}>
                                    <img src={item['_embedded']['wp:featuredmedia'][0]['source_url'].toString()} alt="" />
                                    <div className="hero-wrap alt" >
                                        <div className="hero-item">
                                            <h2>{item['title']['rendered'].replace("<br/>", "\n")}</h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                            })}
    
                            <span slot="container-start"></span>
                            <span slot="container-end"></span>
                            <span slot="wrapper-start"></span>
                            <span slot="wrapper-end"></span>
                        </Swiper>  
                    </div>
                    <div className="main-footer">
                        <div className="footer-social">
                            <SocialIcons location="header"/>
                            <div className="fixed-title"><span>Follow Us</span></div>
                        </div>
                    </div>
                </div>
            </div>
            </>
          );
    }

    
}
