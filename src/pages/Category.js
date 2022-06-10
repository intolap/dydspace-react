import React, { useState, useEffect, Suspense }  from 'react';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../globals/ErrorBoundary';
import Loading from '../globals/Loading';
import SideBar from '../globals/SideBar';

const InnerBanner = React.lazy(()=>import('../globals/InnerBanner'))

function makeTitle(slug) {
    var words = slug.split('-');

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
}

export default function Category() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [acfData, setAcfData] = useState(false);
  var striptags = require('striptags');
  useEffect(() => {
      fetch("https://dydspace.com/wp-json/wp/v2/posts/?_embed&acf_format=standard&filter[posts_per_page]=-1")
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
    const slug = window.location.pathname.split('/')[2];
    var acfDataStatic = {acf:{page_title:'Category: '+makeTitle(slug),page_subtitle:'What and how we do about our services.',banner_image:'../../assets/images/inner-banner.jpg'}};
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading />}>
          <InnerBanner data={acfDataStatic}/>
          <section className="blog-section-ct">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8 mb-4">
                  <div className="left-jk">
                    {acfData.map((item,i) => {
                        // console.log(item.categories_names.find(c => c.slug === slug))
                        // console.log(item);
                        if(undefined === item.categories_names.find(c => c.slug === slug))return true;

                      var d = new Date(item.date);
                      return (
                        <div key={i} className="blog-ct-contain">
                          <h2>{item.title.rendered}</h2>
                          <div className="blog-picture">
                            <a href={'../../blog/'+item.slug+'/'}>
                              <img src={item['_embedded']['wp:featuredmedia'][0]['source_url'].toString()} alt=""/>
                            </a>
                            <h3 className="date-k">{d.getDate()} <span>{month[d.getMonth()]}</span> </h3>
                          </div>
                          <p dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}></p>
                          <div className="reading-box">
                            <a href={'../../blog/'+item.slug+'/'} className="reading-55">Continue Reading</a>
                            <p>
                              <strong>Posted in</strong> 
                              {item.categories_names && item.categories_names.map((category,j) => {
                                return <> <a key={j} href={'/category/'+category.slug+'/'} rel="category tag">{category.name}</a>, </>
                              })} 
                              | <strong>Tagged in</strong> 
                              {item.tags_names && item.tags_names.map((tag,k) => {
                                return <> <a key={k} href={'/tag/'+tag.slug+'/'} rel="category tag">{tag.name}</a>, </>
                              })}
                              </p>
                            <a href="#" className="leave">Leave a comment</a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                    <div className="right-rd-section">
                      <SideBar data={acfData} from={'blog'}/>
                    </div>
                </div>
              </div>
            </div>
            <div className="feature-art-image feature-image-top-left-art-two"> <img src="../assets/images/jt-pointer.png" alt=""/> </div>
            <div className="sales-count-image sales-right-count-image"> <img src="../assets/images/jt-pointer2.png" alt=""/> </div>
          </section>
        </Suspense>
      </ErrorBoundary>
    )
  }
}