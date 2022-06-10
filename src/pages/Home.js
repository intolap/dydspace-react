import React, { useState, useEffect, Suspense }  from 'react';
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from '../globals/ErrorBoundary';
import Loading from '../globals/Loading';

const ResponsiveCarousel = React.lazy(()=>import('./HomeParts/ResponsiveCarousel'))
const TalkToDesigner = React.lazy(()=>import('./HomeParts/TalkToDesigner'))
const Welcome = React.lazy(()=>import('./HomeParts/Welcome'))
const Cta = React.lazy(()=>import('./HomeParts/Cta'))
const Stats = React.lazy(()=>import('./HomeParts/Stats'))
const Creations = React.lazy(()=>import('./HomeParts/Creations'))
// const ShopNow = React.lazy(()=>import('./HomeParts/ShopNow'))
const Testimonials = React.lazy(()=>import('./HomeParts/Testimonials'))
const WorkProcess = React.lazy(()=>import('./HomeParts/WorkProcess'))
const Brands = React.lazy(()=>import('./HomeParts/Brands'))

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
    // console.log('Loading Home page...');
    return <Loading/>;
    // return '';
  } else {
    // console.log(acfData);
    return (
      <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading/>}>
          <ResponsiveCarousel/>
          <TalkToDesigner />
          <Welcome data={acfData}/>
          <Cta data={acfData}/>
          <Stats data={acfData}/>
          <Creations data={acfData}/>
          <Testimonials />
          {/* <ShopNow /> */}
          <WorkProcess data={acfData}/>
          <Brands data={acfData}/>
        </Suspense>
      </ErrorBoundary>
      </>
    )
  }
}
