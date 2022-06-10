import React, { Component } from 'react'
import Loading from '../globals/Loading';
import SideBar from '../globals/SideBar';
const InnerBanner = React.lazy(()=>import('../globals/InnerBanner'))
const TalkToDesigner = React.lazy(()=>import('./HomeParts/TalkToDesigner'))

export default class SingleBlog extends Component {      
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
        const slug = window.location.pathname.split("blog/")[1];
        // fetch("https://dydspace.com/wp-json/wp/v2/posts/?_embed&acf_format=standard&slug="+slug)
        fetch("https://dydspace.com/wp-json/wp/v2/posts/?_embed&acf_format=standard")
        .then(res => res.json())
        .then(
            (data) => {
                // console.log(data);
                const slug = window.location.pathname;
                const currentPost = data.find((post) => '/blog/'+post.slug+'/' === slug);
                // console.log(currentPost);
                this.setState({
                    isLoaded: true,
                    posts: data,
                    post: currentPost
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
        
        const { error, isLoaded, post } = this.state;
        // console.log(post);
        if (error) {
            console.log(error);
            return '';
        } else if (!isLoaded) {
            return <Loading />;
        } else {
            var acfDataStatic = {acf:{page_title:'Our Blog',page_subtitle:post.title.rendered,banner_image:'../../assets/images/inner-banner.jpg'}};
            return (
                <>
                <InnerBanner data={acfDataStatic}/>
                <section className="blog-section-ct">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-8 col-lg-8 mb-4">
                        <div className="left-jk">
                          <div id={"post-"+post.id} className="blog-ct-contain">
                              <h2>{post.title.rendered}</h2>
                              <div className="blog-picture">
                                <img src={post['_embedded']['wp:featuredmedia'][0]['source_url'].toString()} alt=""/>
                              </div>
                              <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
                              <div className="reading-box">
                                <p>
                                  <strong>Posted in</strong> 
                                  {post.categories_names && post.categories_names.map((category,j) => {
                                    return <> <a key={j} href={'/category/'+category.slug+'/'} rel="category tag">{category.name}</a>, </>
                                  })} 
                                  | <strong>Tagged in</strong> 
                                  {post.tags_names && post.tags_names.map((tag,k) => {
                                    return <> <a key={k} href={'/tag/'+tag.slug+'/'} rel="category tag">{tag.name}</a>, </>
                                  })}
                                </p>
                                <a href="#" className="leave">Leave a comment</a>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                        <div className="right-rd-section">
                          <SideBar data={this.state.posts} from={'single-blog'}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-art-image feature-image-top-left-art-two"> <img src="../assets/images/jt-pointer.png" alt=""/> </div>
                  <div className="sales-count-image sales-right-count-image"> <img src="../assets/images/jt-pointer2.png" alt=""/> </div>
                </section>
                {/* <TalkToDesigner/> */}
                </>
            )
        }
    }
}