import React, { Component } from 'react'

export default class SocialIcons extends Component {
  render() {
    const data = this.props;
    // console.log(data.location);
    if(data.location==="header"){
      return (
        <ul>
          <li><a href="https://facebook.com/dydspace/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a></li>
          <li><a href="https://in.pinterest.com/dydspace/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-square"></i></a></li>
          <li><a href="https://www.instagram.com/dydspace/" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UC9PhCyV-CgdlRZKrtaZiRcQ" target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i></a></li>
        </ul>
      );
    }else if(data.location==="footer"){
      return (
        <>
          <a href="https://facebook.com/dydspace/" target="_blank" rel="noreferrer" className="facebook"><i className="fab fa-facebook-square"></i></a>
          <a href="https://in.pinterest.com/dydspace/" target="_blank" rel="noreferrer" className="twitter"><i className="fab fa-pinterest-square"></i></a>
          <a href="https://www.instagram.com/dydspace/" target="_blank" rel="noreferrer" className="google-plus"><i className="fab fa-instagram-square"></i></a>
          <a href="https://www.youtube.com/channel/UC9PhCyV-CgdlRZKrtaZiRcQ" target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i></a>
        </>
      );
    }else{
      return '';
    }
  }
}

