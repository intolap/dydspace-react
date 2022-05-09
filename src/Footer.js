import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>
        <footer>
            <div className="container">
                <div className="row">
                <div className="col-sm-4 col-mg-4 col-lg-4 " >
                    <div className="footer-logo"><img src="assets/images/footer-logo.png"></img></div>
                    <div className="social-icons"> <a href="#" target="_blank" className="facebook"><i className="fab fa-facebook-square"></i></a> <a href="#" className="twitter"><i className="fab fa-twitter-square"></i></a> <a href="#" className="google-plus"><i className="fab fa-instagram-square"></i></a> </div>
                </div>
                <div className="col-sm-8 col-mg-8 col-lg-8">
                    <ul className="footer-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><a href="#">Shop </a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="copyright">©2021 Interior Design.com</div>
                </div>
                </div>
            </div>
            <a className="up" href="#"></a>
            </footer>
            
    </div>
  )
}
