import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import React, { Component, Suspense } from 'react'

import Header from './globals/Header'
import Footer from './globals/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import SingleService from './pages/SingleService'
import Loading from './globals/Loading'
import Page from './pages/Page'
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import Category from './pages/Category'
import Tags from './pages/Tags'

/* export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  getParams(){
    return useParams(); // inside your component
  }

  render() {
    const params = this.getParams();
    return (
      <Router>
        <>
        <Header/>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>  
            <Route path="/services/:slug" element={<SingleService props={params}/>}></Route>
            <Route path="/:slug" element={<Page />}></Route>
          </Routes>
        </Suspense>
        <Footer/>
        </>
      </Router>
    )
  }
} */


function App() {
  // const { slug } = useParams();
  const pathname = window.location.pathname.split('/');
  var slug = pathname.pop() || pathname.pop();  // handle potential trailing slash

  // console.log(slug);
  return (
    <Router>
      <>
      <Header/>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
          <Route path="/about/" element={<About />}></Route>
          <Route path="/services/" element={<Services />}></Route>  
          <Route path="/services/:slug/" element={<SingleService props={{slug:slug}}/>}></Route>
          <Route path="/contact/" element={<Contact />}></Route>
          <Route path="/:slug/" element={<Page loadPage={id => this.getPage(id)}/>}></Route>
          <Route path="/blog/" element={<Blog />}></Route>  
          <Route path="/blog/:slug/" element={<SingleBlog props={{slug:slug}}/>}></Route>
          <Route path="/category/:slug/" element={<Category props={{slug:slug}}/>}></Route>
          <Route path="/tag/:slug/" element={<Tags props={{slug:slug}}/>}></Route>
        </Routes>
      </Suspense>
      <Footer/>
      </>
    </Router>
  );
}

export default App;
