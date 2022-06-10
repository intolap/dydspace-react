import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-m.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        // console.log(props.data.yoast_head);
        this.state = {
            error: null,
            isLoaded: false,
            menuItems: [],
            // yoast_head: props.data.yoast_head,
            pages: null
        };
    }

    componentDidMount() {
        /* var pHead = document.getElementsByTagName('head')[0];
        pHead.innerHTML = pHead.innerHTML + this.state.yoast_head; */
        
        fetch("https://dydspace.com/wp-json/dydspace-core/menu/30")
            .then(res => res.json())
            .then(
                (data) => {
                    // console.log(data);
                    this.setState({
                        isLoaded: true,
                        menuItems: data,
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

            fetch("https://dydspace.com/wp-json/wp/v2/pages")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        pages: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, menuItems, pages } = this.state;
        // console.log(menuItems);
        if (error) {
            console.log(error);
            return '';
        } else if (!isLoaded) {
            return '';
        } else {
            return (
                <div className="header">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo">
                                <Link to="/" className="navbar-brand">
                                    <img src={logo} alt="DydSpace - Interior Design Studio"/>
                                </Link>
                            </div>
                            <div className="header-rt">
                                <div className="menu-container">
                                    <nav className="navbar navbar-expand-lg">
                                    
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                        {menuItems.map((menu, i) => {
                                            //returns the current url minus the domain name
                                            const pathname = window.location.pathname;
                                            // console.log(pathname+' '+menu.url);
                                            const url = new URL(menu['url']);
                                            const activeClass = (url.pathname===pathname)?' current-menu-item':'';
                                            
                                            // const has_children = hasChildren(menu, 'menu_item_parent', menu['ID']);
                                            // console.log(menu.children);
                                            const has_children = (menu.children===undefined)?false:true;
                                            // console.log(menu.ID+' '+has_children);
                                            const childClass = (has_children)?' dropdown menu-dropdown-icon':'';
                                            const childAClass = (has_children)?' dropdown-toggle':'';    
                                            
                                            return ( 
                                                <li key={i} className={"nav-item"+activeClass+childClass}>
                                                    {/* <Link to={url.pathname} className={"nav-link"+childAClass}><span>{menu['title']}</span></Link> */}
                                                    <a href={url.pathname} className={"nav-link"+childAClass}><span>{menu['title']}</span></a>
                                                    {(() => {
                                                        if(has_children){
                                                            return (
                                                                <ul className="dropdown-menu normal-dropdown" aria-labelledby="navbarDropdown">
                                                                    {menu.children.map((submenu, i) => {
                                                                        var urlSub = new URL(submenu['url']);
                                                                        return (
                                                                        <li key={i} id={submenu['ID']}>
                                                                            {/* <Link className="dropdown-item" to={urlSub.pathname}><span>{submenu['title']}</span></Link> */}
                                                                            <a className="dropdown-item" href={urlSub.pathname}><span>{submenu['title']}</span></a>
                                                                        </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            );
                                                        }
                                                    })()}
                                                </li>
                                            );
                                        })}
                                            {/* <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Category 1
                                                </a>
                                                <div className="dropdown-menu normal-dropdown" aria-labelledby="navbarDropdown">
                                                    <a class="dropdown-item" href="#">Link 1</a>
                                                    <a class="dropdown-item" href="#">Link 2</a>
                                                    <a class="dropdown-item" href="#">Link 3</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Category 2
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <span className="text-uppercase text-white">Category 2</span>
                                                                <ul className="nav flex-column">
                                                                    <li className="nav-item">
                                                                    <a className="nav-link active" href="#">Active</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                    <a className="nav-link" href="#">Link item</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                    <a className="nav-link" href="#">Link item</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            
                                                            <div className="col-md-4">
                                                                <ul className="nav flex-column">
                                                                    <li className="nav-item">
                                                                    <a className="nav-link active" href="#">Active</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                    <a className="nav-link" href="#">Link item</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                    <a className="nav-link" href="#">Link item</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            
                                                            <div className="col-md-4">
                                                                <a href="">
                                                                <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt="" className="img-fluid"/>
                                                                </a>
                                                                <p className="text-white">Short image call to action</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */}
                                        </ul>
                                        {/* <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                                        </form> */}
                                    </div>


                                    </nav>
                                    <ul className="footer_social_icons ">
                                        <li><a href="/cart" target="_blank"><i className="fa fa-shopping-cart"></i></a></li>
                                        <li><a href="/my-account" target="_blank"><i className="fa fa-user"></i></a></li>
                                    </ul>
                                </div>
                                <div className="menu-right">
                                    <ul className="navbar-action-button">
                                        <li className="navbar-action-item">
                                            <Link to="/get-started/" className="button button-white-outline" >Consult Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
  }
}

/* function hasChildren(array, columnName, mapWith){
    var element = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index][columnName] == mapWith){
            element++;
        }
    }
    return element;
}
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            menuItems: [],
        };
    }
    
    registerDiv(el) {
        el.addEventListener('mouseenter', () => {            
            Array.from(document.querySelectorAll('.normal-sub'))
            .forEach(e => e.removeAttribute('style'));

            el.nextSibling.setAttribute("style", "display: block")
        });
    }

    componentDidMount() {
        fetch("https://dydspace.com/wp-json/dydspace-core/menu/30")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        menuItems: data
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
        
            // var loadScript = function (src) {
            //     var tag = document.createElement('script');
            //     tag.async = false;
            //     tag.src = src;
            //     var body = document.getElementsByTagName('body')[0];
            //     body.appendChild(tag);
            //   }
          
            //   loadScript('assets/js/megamenu.js');
    }
  
    render() {
        const { error, isLoaded, menuItems } = this.state;
        
        if (error) {
            console.log(error);
            return '';
        } else if (!isLoaded) {
            return '';
        } else {
            return (
                <div className="header">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo">
                                <Link to="/" className="navbar-brand">
                                    <img src={process.env.PUBLIC_URL+"/assets/images/logo-m.png"} alt="DydSpace - Interior Design Studio"/>
                                </Link>
                            </div>
                            <div className="header-rt">
                                <div className="menu-container">
                                    <div className="menu">
                                        <a href='#' className='menu-mobile'></a>
                                        <ul id="menu-header-menu">
                                        {menuItems.map((menu, i) => {
                                            if(menu['menu_item_parent'] > 0)return;

                                            //returns the current url minus the domain name
                                            const pathname = window.location.pathname 

                                            const url = new URL(menu['url']);
                                            const activeClass = (url.pathname==pathname)?' current-menu-item':'';
                                            
                                            var has_children = hasChildren(menuItems, 'menu_item_parent', menu['ID']);
                                            const childClass = (has_children>0)?' menu-dropdown-icon':'';
                                            
                                            return ( 
                                                <li key={i} className={"menu-item"+activeClass+childClass}>
                                                    <Link to={url.pathname} className="nav-link" ref={(has_children)?this.registerDiv:null}><span>{menu['title']}</span></Link>
                                                    {(() => {
                                                        if(has_children){
                                                            return <ul className="normal-sub">
                                                                {menuItems.map((submenu, i) => {
                                                                    if(submenu['menu_item_parent'] == menu['ID']){
                                                                        var urlSub = new URL(submenu['url']);
                                                                        return (
                                                                        <li key={i} id={submenu['ID']}>
                                                                            <Link className="nav-link" to={urlSub.pathname}><span>{submenu['title']}</span></Link>
                                                                        </li>
                                                                        );
                                                                    }
                                                                })}
                                                            </ul>
                                                        }
                                                    })()}
                                                </li>
                                            );
                                        })}
                                        </ul>
                                    </div>

                                    <ul className="footer_social_icons ">
                                        <li><a href="/cart" target="_blank"><i className="fa fa-shopping-cart"></i></a></li>
                                        <li><a href="/my-account" target="_blank"><i className="fa fa-user"></i></a></li>
                                    </ul>
                                </div>
                            
                                <div className="menu-right">
                                    <ul className="navbar-action-button">
                                        <li className="navbar-action-item">
                                            <a href="" className="button button-white-outline" >Consult Now</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
} */

/* import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

function hasChildren(array, columnName, mapWith){
    var element = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index][columnName] == mapWith){
            element++;
        }
    }
    return element;
}

export default function Header() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuItems, setMenuItems] = useState(false);

    useEffect(() => {
        fetch("https://dydspace.com/wp-json/dydspace-core/menu/30")
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
        return (
            <div className="header">
                <div className="container">
                    <div className="header-wrap">
                        <div className="logo">
                            <Link to="/" className="navbar-brand"><img src="assets/images/logo-m.png" alt="Ootliers"/></Link>
                        </div>
                        <div className="header-rt">
                            <div className="menu-container">
                                <div className="menu">
                                    <ul id="menu-header-menu">
                                    {menuItems.map((menu, i) => {
                                        if(menu['menu_item_parent'] > 0)return;

                                        //returns the current url minus the domain name
                                        const pathname = window.location.pathname 

                                        const url = new URL(menu['url']);
                                        const activeClass = (url.pathname==pathname)?' current-menu-item':'';
                                        
                                        var has_children = hasChildren(menuItems, 'menu_item_parent', menu['ID']);
                                        const childClass = (has_children>0)?' menu-dropdown-icon':'';
                                        
                                        return ( 
                                            <li key={i} className={"menu-item"+activeClass+childClass}>
                                                <Link to={url.pathname} className="nav-link"><span>{menu['title']}</span></Link>
                                                <ul className="normal-sub" styles="display: none;">
                                                    {menuItems.map((submenu, i) => {
                                                        if(submenu['menu_item_parent'] == menu['ID']){
                                                            var urlSub = new URL(submenu['url']);
                                                            return (
                                                            <li key={i} id={submenu['ID']}>
                                                                <Link className="nav-link" to={urlSub.pathname}><span>{submenu['title']}</span></Link>
                                                            </li>
                                                            );
                                                        }
                                                    })}
                                                </ul>   
                                            </li>
                                        );
                                    })}
                                    </ul>
                                </div>

                                <ul className="footer_social_icons ">
                                    <li><a href="/cart" target="_blank"><i className="fa fa-shopping-cart"></i></a></li>
                                    <li><a href="/my-account" target="_blank"><i className="fa fa-user"></i></a></li>
                                </ul>
                            </div>
                        
                            <div className="menu-right">
                                <ul className="navbar-action-button">
                                    <li className="navbar-action-item">
                                        <a href="" className="button button-white-outline" >Consult Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} */
