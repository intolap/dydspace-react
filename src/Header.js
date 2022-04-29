import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="container">
        <nav id="mainNav" className="navbar mainNav navbar-expand-lg navbar-light"> 
            <Link to="/" className="navbar-brand"><img src="assets/images/logo-m.png" alt="Ootliers"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"> <Link to="/" className="nav-link active" href=""><span>Home</span></Link> </li>
                <li className="nav-item"> <Link to="/about"  className="nav-link" href=""><span>About</span></Link> </li>
                <li className="nav-item"> <a className="nav-link" href=""><span>Shop</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href=""><span>Work</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href=""><span>Contact</span></a> </li>
            </ul>
            </div>
            <ul className="footer_social_icons ">
                <li> <a href="" target="_blank"><i className="fas fa-shopping-cart"></i></a> </li>
                <li> <a href="" target="_blank"><i className="fas fa-user"></i></a> </li>
            </ul>
            <ul className="navbar-action-button">
                <li className="navbar-action-item">
                    <a href="" className="button button-white-outline">Consult Now</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
