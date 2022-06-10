import React, { useState, useEffect, Suspense }  from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../globals/ErrorBoundary';
import Loading from '../globals/Loading';

const Intro = React.lazy(()=>import('./ServiceParts/Intro'))
const InnerBanner = React.lazy(()=>import('../globals/InnerBanner'))
const List = React.lazy(()=>import('./ServiceParts/List'))

export default function Services() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [acfData, setAcfData] = useState(false);
  
  useEffect(() => {
      fetch("https://dydspace.com/wp-json/wp/v2/services/?_embed&acf_format=standard")
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
    console.log(error);
    // return <div>Error: {error.message}</div>;
    return '';
  } else if (!isLoaded) {
    // console.log('Loading Home page...');
    return <Loading/>;
  } else {
    // console.log(acfData);
    var acfDataStatic = {acf:{page_title:'Services',page_subtitle:'See our service range',banner_image:'../assets/images/inner-banner.jpg'}};
    var introDataStatic = {page_title:'<span>Our</span> Services',page_subtitle:'DydSpace offers outstanding interior design services for both residential and commercial spaces. Being a sister concern of intoLAP a software development and digital agency in Kolkata, we provide high-end technology-based innovative interior design solutions. We provide not noly 2D but also 3D visuals for the design we create for you so that you have a complete feel of how you will live in our designed space. We have a team of best-in-class interior designers who can make your design ideas into reality.',video_url:'https://www.youtube.com/embed/2rxnsHro8gs'};
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading />}>
          <InnerBanner data={acfDataStatic}/>
          <Intro data={introDataStatic}/>
          <List data={acfData}/>
        </Suspense>
      </ErrorBoundary>
    )
  }
}