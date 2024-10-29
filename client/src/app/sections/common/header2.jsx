import { NavLink, useLocation } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Header2() {
    const path = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [activeNav, setActiveNav] = useState('home');

    function handleActiveNav(nav) {
        setActiveNav(nav);
    }

    function toggleNavClass() {
        setIsActive(!isActive)
    }

    useEffect(()=>{
        loadScript("js/mobilenav.js")
    });

    useEffect(() => {
        if (path.pathname === '/') {
            setActiveNav('home');
        }
    }, [path, path.pathname]);

    return (
        <>
            <header className={"header-style2 site-header mobile-sider-drawer-menu full-navbar " + (isActive ? "active" : "")}>
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar">
                        <div className="container clearfix">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to="/">
                                        <ItodoImage style={{width: "200px"}} src="images/ftech-logo.png" alt="#" />
                                    </NavLink>
                                </div>
                            </div>
                            {/* NAV Toggle Button */}
                            <button id="mobile-side-drawer"
                                data-target=".header-nav"
                                data-toggle="collapse"
                                className="navbar-toggler collapsed"
                                onClick={toggleNavClass}
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar icon-bar-first" />
                                <span className="icon-bar icon-bar-two" />
                                <span className="icon-bar icon-bar-three" />
                            </button>
                            {/* MAIN NAVIGATION */}
                            <div className="header-nav navbar-collapse collapse d-flex justify-content-center collapse ">
                                <ul className=" nav navbar-nav ">
                                    <li className={`${activeNav === 'home' && 'active'}`} onClick={() => handleActiveNav('home')}>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className={`${activeNav === 'about' && 'active'}`} onClick={() => handleActiveNav('about')}>
                                        <NavLink to="/about-us">About Us</NavLink>
                                    </li>
                                    <li className={`${activeNav === 'portfolio' && 'active'}`} onClick={() => handleActiveNav('portfolio')}>
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                    </li>
                                    <li className={`${activeNav === 'contact' && 'active'}`} onClick={() => handleActiveNav('contact')}><NavLink to="/contact-us">Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header2;