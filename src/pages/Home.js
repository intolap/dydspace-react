import React, { useState, useEffect }  from 'react';

import Header from '../Header'
import Slider from './HomeParts/Slider'
import Footer from '../Footer'
import TalkToDesigner from './HomeParts/TalkToDesigner'
import Welcome from './HomeParts/Welcome'
import Cta from './HomeParts/Cta'
import Stats from './HomeParts/Stats'
import Creations from './HomeParts/Creations'
import ShopNow from './HomeParts/ShopNow'
import Testimonials from './HomeParts/Testimonials'
import WorkProcess from './HomeParts/WorkProcess'
import Brands from './HomeParts/Brands'

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [acfData, setAcfData] = useState(false);
  
  useEffect(() => {
      fetch("https://dydspace.com/wp-json/wp/v2/pages/2/?acf_format=standard")
          .then(res => res.json())
          .then(
              (data) => {
                  setIsLoaded(true);
                  setAcfData(data['acf']);
                  // console.log(data);
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              }
          )
  }, [])
  
  if (error) {
    console.log(error);
    // return <div>Error: {error.message}</div>;
    return '';
  } else if (!isLoaded) {
    console.log('Loading Home page...');
    // return <div>Loading...</div>;
    return '';
  } else {
    // console.log(acfData);
    return (
      <div>
          <Header />
          <Slider />        
          <TalkToDesigner />
          <Welcome data={acfData}/>
          <Cta data={acfData}/>
          <Stats data={acfData}/>
          <Creations data={acfData}/>
          {/* <ShopNow /> */}
          <Testimonials />
          <WorkProcess data={acfData}/>
          <Brands data={acfData}/>
          <Footer />        
      </div>
    )
  }
}
