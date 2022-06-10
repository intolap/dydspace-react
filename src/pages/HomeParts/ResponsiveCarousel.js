import React, { useState, useEffect }  from 'react';
import SocialIcons from '../../globals/SocialIcons';
import AwesomeSlider from 'react-awesome-slider';
// import withCaption from 'react-awesome-slider/dist/captioned';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';
// import ErrorFallback from '../../globals/ErrorBoundary';
// import 'react-awesome-slider/dist/captioned.css';
// const CaptionedSlider = withCaption(AwesomeSlider);

export default function ResponsiveCarousel() {
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
        /* if(Math.random() > 0.5){
          return new Error('Test error boundary');
        } */

        return (
          <div className="wrapper">
            <div className="content-holder"> 
              <div className="fs-gallery-wrap home-slider fl-wrap full-height">
              <AwesomeSlider
                mobileTouch={true}
                cssModule={AwsSliderStyles}
                infinite={true}
                bullets={false}
              >
              {slides.map((item, i) => {
                return (
                  <div key={i} data-src={item['_embedded']['wp:featuredmedia'][0]['source_url'].toString()}>
                    <div className="hero-wrap alt" >
                      <div className="hero-item">
                          <h2>{item['title']['rendered'].replace("<br/>", "\n")}</h2>
                      </div>
                    </div>
                  </div>
                )  
              })}
              </AwesomeSlider>
              </div>
              <div className="main-footer">
                <div className="footer-social">
                    <SocialIcons location="header"/>
                    <div className="fixed-title"><span>Follow Us</span></div>
                </div>
              </div>
            </div>
          </div>
        )
  }
}