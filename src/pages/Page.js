import React, { Component } from 'react'
import Loading from '../globals/Loading';
const InnerBanner = React.lazy(()=>import('../globals/InnerBanner'))
const TalkToDesigner = React.lazy(()=>import('./HomeParts/TalkToDesigner'))

export default class Page extends Component {      
    constructor(props) {
        super(props);
        // console.log(props.data.yoast_head);
        this.state = {
            error: null,
            isLoaded: false,
            // yoast_head: props.data.yoast_head,
        };
    }

    componentDidMount() {
        /* var pHead = document.getElementsByTagName('head')[0];
        pHead.innerHTML = pHead.innerHTML + this.state.yoast_head; */
        
        fetch("https://dydspace.com/wp-json/wp/v2/pages/?_embed&acf_format=standard&slug="+window.location.pathname)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
                /* const slug = window.location.pathname;
                const currentPage = data.find(e => '/'+e.slug+'/' === slug);
                console.log(currentPage); */
                this.setState({
                    isLoaded: true,
                    page: data[0]
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, page } = this.state;
        // console.log(page);
        if (error) {
            console.log(error);
            return '';
        } else if (!isLoaded) {
            return <Loading />;
        } else {
            var acfDataStatic = {acf:{page_title:page.acf.page_title,page_subtitle:page.acf.page_subtitle,banner_image:page.acf.banner_image}};
            return (
                <>
                <InnerBanner data={acfDataStatic}/>
                <div id={"post-"+page.id} className="contact-gh inner-content" style={{"marginTop": "50px"}} data-aos="fade-up" data-aos-duration="1000">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mx-auto" dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
                        </div>    
                    </div>
                </div>
                {/* <TalkToDesigner/> */}
                </>
            )
        }
    }
}