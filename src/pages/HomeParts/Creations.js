import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

export default function Creations() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [services, setServices] = useState();
    
    useEffect(() => {
        fetch("https://dydspace.com/wp-json/wp/v2/services/?_embed")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setServices(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
    // console.log(services);
    if (error) {
        console.log(error);
        return '';
    } else if (!isLoaded) {
        // console.log('Loading Services...');
        return '';
    } else {
        return (
            <section className="features-sc">
                <div className="container">
                    <div className="row">
                        <h1 className="section-header" data-aos="fade-down" data-aos-duration="1000"> <span className="text-52">Our Latest </span> <br/>Creations </h1>
                        {services.map((item, i) => {
                            var direction = (i%2===0)?'sales-left-count-image':'sales-right-count-5-image';
                            var cornerimg = (i%2===0)?'jt-pointer3.png':'jt-pointer4.png';
                            return (
                            <div key={i} className="sevr-section" data-aos="fade-down"  data-aos-duration="1000">
                                <div className="pic-box"> 
                                    <img src={item['_embedded']['wp:featuredmedia'][0]['source_url'].toString()} className="img-responsive" alt=""/> 
                                </div>
                                <div className="serv_main">
                                    <h2>{item['title']['rendered'].replace("Design", "")}</h2>
                                    <a href={item['link']} className="btn-ab-two">View More</a> 
                                </div>
                                <div className={'sales-count-image '+direction}> 
                                    <img src={'/assets/images/'+cornerimg} alt=""/> 
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
                <div className="creations-section"> <Link to="/services" className="btn-cr-tt">View All Creations</Link> </div>
            </section>
            
        )
    }
}
