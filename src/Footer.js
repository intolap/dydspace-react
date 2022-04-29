import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>
        <footer>
            <div class="container">
                <div class="row">
                <div class="col-sm-4 col-mg-4 col-lg-4 " >
                    <div class="footer-logo"><img src="assets/images/footer-logo.png"></img></div>
                    <div class="social-icons"> <a href="#" target="_blank" class="facebook"><i class="fab fa-facebook-square"></i></a> <a href="#" class="twitter"><i class="fab fa-twitter-square"></i></a> <a href="#" class="google-plus"><i class="fab fa-instagram-square"></i></a> </div>
                </div>
                <div class="col-sm-8 col-mg-8 col-lg-8">
                    <ul class="footer-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><a href="#">Shop </a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="copyright">©2021 Interior Design.com</div>
                </div>
                </div>
            </div>
            <a class="up" href="#"></a>
            </footer>
            
    </div>
  )
}
