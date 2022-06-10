import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'
import logo from '../footer-logo.png'
import SocialIcons from './SocialIcons';

export default function Footer() {
  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuItems, setMenuItems] = useState(false);

    useEffect(() => {
        fetch("https://dydspace.com/wp-json/dydspace-core/menu/31")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMenuItems(data);
                    // console.log(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    // return false;

    if (error) {
        console.log(error);
        // return <div>Error: {error.message}</div>;
        return '';
    } else if (!isLoaded) {
        return '';
    } else {
      var dateObj = new Date();
      var year = dateObj.getUTCFullYear();

        return (
          <footer>
            <div className="container">
                <div className="row">
                  <div className="col-sm-4 col-mg-4 col-lg-4 " >
                      <div className="footer-logo"><img src={logo} alt="DydSpace - Interior Design Studio"/></div>
                      <div className="social-icons">
                        <SocialIcons location="footer"/>
                      </div>
                  </div>
                  <div className="col-sm-8 col-mg-8 col-lg-8">
                      <ul className="footer-menu">
                        {menuItems.map((menu, i) => {
                          const url = new URL(menu['url']);
                          // return <li key={i}><Link to={url.pathname}>{menu['title']}</Link></li>
                          return <li key={i}><a href={url.pathname}>{menu['title']}</a></li>
                        })}
                      </ul>
                      <div className="copyright">©{year} DydSpace - Interior Design Studio</div>
                  </div>
                </div>
            </div>
            <button className="up"></button>
          </footer>
        )
    }
}
