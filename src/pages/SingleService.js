import React, { useState, useEffect, Suspense }  from 'react';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../globals/ErrorBoundary';
import Loading from '../globals/Loading';

const Intro = React.lazy(()=>import('./ServiceParts/Intro'))
const InnerBanner = React.lazy(()=>import('../globals/InnerBanner'))
const TalkToDesigner = React.lazy(()=>import('./HomeParts/TalkToDesigner'))

export default function SingleService(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [acfData, setAcfData] = useState(false);
  const [singlePost, setSinglePost] = useState(false);
  const { slug } = useParams();
  // console.log(props);
  // return false;
  useEffect(() => {
    fetch("https://dydspace.com/wp-json/wp/v2/services/?_embed&acf_format=standard")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                // setAcfData(data);
                // console.log(data);

                const currentPost = data.find((post) => post.slug === slug);
                // console.log(currentPost);

                if(undefined!==currentPost){
                  setSinglePost(currentPost);
                }
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
    var random_banner = singlePost['_embedded']['wp:featuredmedia'][0]['source_url'];
    // console.log(singlePost);
    var acfDataStatic = {acf:{page_title:singlePost.title.rendered,page_subtitle:'Our Services',banner_image:random_banner}};

    var introDataStatic = {page_title:singlePost.title.rendered,page_subtitle:singlePost.content.rendered,video_url:''};
    
    var designs = singlePost['acf']['designs'];
    //console.log(designs);

    return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading/>}>
          <InnerBanner data={acfDataStatic}/>
          <Intro data={introDataStatic}/>
          
          <section className="our-creations" data-aos="fade-down" data-aos-duration="1000" >
            <div className="container">
              <div className="row">
                <h4 className="bt-45-designs">{singlePost.title.rendered}</h4>
                <div className="ot-section">
                  <h2><span>All Our </span>Creations</h2>
                </div>
                <div className="category-list">
                  <div className="row">
                  {designs.map((item,i) => {
                    return (
                      <div key={i} className="col-sm-6 col-md-6 col-lg-6">
                        <div className="category-pic">
                          {(() => {
                              if(item.panorama!==''){
                                  return (
                                    <span className="icon-360">
                                      <a href="?property=${i}&show=360" title="360 degree view" data-img_url={item.panorama}><img src="../../assets/images/360.png" alt=""/></a>
                                    </span>
                                  );
                              }
                          })()}
                          <img src={item.design.url} alt=""/>
                        </div>
                      </div>
                    )
                  })}
                  </div>
                </div>
                {/* <a href="#" className="loder">Load More</a> */}
              </div>
            </div>
            <div className="feature-art-image feature-image-top-left-art-two">
              <img src="../../assets/images/jt-pointer.png" alt=""/>
            </div>
          </section>

          <TalkToDesigner/>       
        </Suspense>
      </ErrorBoundary>
    )
  }
}