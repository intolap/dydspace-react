import React from 'react'

export default function Slider() {
  return (
    <div>
        <div className="wrapper">
            <div className="content-holder"> 
                <div className="fs-gallery-wrap home-slider fl-wrap full-height">
                    <div className="slide-progress-container">
                        <div className="slide-progress-content">
                        <div className="slide-progress-warp">
                            <div className="slide-progress" styles="{{width: 100%; transition: width 5000ms ease 0s;}}"></div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-container swiper-container-horizontal" >
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="3">
                                <div className="bg" data-bg="assets/images/slider1.jpg" data-scrollax="{{properties: { translateY:'250px' }}}" styles="{{background-image: url('assets/images/slider1.jpg');}}"></div>
                                <div className="hero-wrap alt" >
                                <div className="hero-item">
                                    <h2>Design by Comfort <br/> and relaxation</h2>
                                </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="3">
                                <div className="bg" data-bg="assets/images/slider2.jpg" data-scrollax="{{properties: { translateY:'250px' }}}" styles="{{background-image: url('assets/images/slider2.jpg');}}"></div>
                                <div className="hero-wrap alt">
                                <div className="hero-item">
                                    <h2>Design by Comfort <br/> and relaxation</h2>
                                </div>
                                </div> 
                            </div>                    
                        </div>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <span className="swiper-pagination-bullet">01</span>
                        <span className="swiper-pagination-bullet">02</span>
                    </div>
                    <div className="sw-button swiper-button-next"><i className="fas fa-chevron-up"></i></div>
                    <div className="sw-button swiper-button-prev"><i className="fas fa-chevron-down"></i></div>
                    <div className="footer-social">
                        <ul>
                            <li><a href="#" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-instagram-square"></i></a></li>
                        </ul>
                        <div className="fixed-title"><span>Follow Us</span></div>
                    </div>
                </div>
                <div className="mobile-com">
                    <div className="sw-button swiper-button-next"><i className="fas fa-chevron-up"></i></div>
                    <div className="sw-button swiper-button-prev"><i className="fas fa-chevron-down"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}
