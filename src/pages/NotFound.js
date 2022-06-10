import React from 'react'

export default function NotFound() {
  return (
    <div className="contact-gh error-404 not-found" data-aos="fade-up" data-aos-duration="1000" >
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <header className="page-header">
                    {/* <h2 className="page-title text-center"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'dydspace' ); ?></h2> */}
                </header>

                <div className="page-content text-center">
                    <img width="400" src="./assets/images/404.png" alt=""/>
                    <h2 className="page-title text-center">Oops! That page can&rsquo;t be found.</h2>			
                    {/* <p><?php //esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'dydspace' ); ?></p> */}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
