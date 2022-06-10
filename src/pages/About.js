import React, { useState, useEffect, Suspense }  from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../globals/ErrorBoundary';
import Loading from '../globals/Loading';

const InnerBanner = React.lazy(()=>import('../globals/InnerBanner'))
const AboutUs = React.lazy(()=>import('./AboutParts/AboutUs'))
const OurServices = React.lazy(()=>import('./AboutParts/OurServices'))
const Testimonials = React.lazy(()=>import('./HomeParts/Testimonials'))
const Parallax = React.lazy(()=>import('../globals/Parallax'))

export default function About() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [acfData, setAcfData] = useState(false);

  useEffect(() => {
      fetch("https://dydspace.com/wp-json/wp/v2/pages/133/?_embed&acf_format=standard")
          .then(res => res.json())
          .then(
              (data) => {
                  setIsLoaded(true);
                  setAcfData(data);
                  // console.log(data);
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              }
          )
  }, [])
  
  if (error) {
    // console.log(error);
    // return <div>Error: {error.message}</div>;
    return '';
  } else if (!isLoaded) {
    // console.log('Loading Home page...');
    return <Loading/>;
  } else {
    // console.log(acfData);
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading/>}>
          <InnerBanner data={acfData}/>
          <AboutUs data={acfData}/>
          <OurServices data={acfData}/>
          <Testimonials/>
          <Parallax data={acfData}/>
        </Suspense>
      </ErrorBoundary>
    )
  }
}
