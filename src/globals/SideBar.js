import React, { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from '../globals/ErrorBoundary';
import Loading from './Loading';

export default function SideBar(props) {
    // console.log(props.data);
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<Loading/>}>
            <div className="blog-about">
                <h2>About</h2>
                <p>DydSpace is offering not only outstanding design ideas but also great space planning. Being a sister concern of intoLAP, software development and digital agency in Kolkata, we provide high-end, technology-based, innovative interior design solutions. Our design solutions will not only make your space beautiful but also exclusive and significant that makes it look different from others. We have a team of best-in-class interior designers who can make your design ideas into reality.</p>
            </div>
            
            <div className="blog-about">
                <h2>Latest Posts</h2>
                <ul>
                    {props.data.map((item, i) => {
                        if(i>4)return false;
                        var link = '';
                        var d = new Date(item.date);
                        if(props.from==='single-blog'){
                            link = '../'+item.slug+'/';
                        }else{
                            link = item.slug+'/';
                        }
                        return (
                            <li key={i}><div className="number-box">{d.getDate()} <span>{month[d.getMonth()]}</span></div><h3><a href={link}>{item.title.rendered}</a></h3></li>
                        );
                    })}
                </ul>
            </div>
            
            {/* <div className="blog-about">
                <h2>Archives</h2>
                <ul>
                    <li>November 2015 (1)</li>
                    <li>October 2015 (2)</li>
                    <li>January 2014 (1)</li>
                    <li>December 2013 (2)</li>
                    <li>August 2013 (2)</li>
                </ul>
            </div> */}
        </Suspense>
    </ErrorBoundary>
  )
}
