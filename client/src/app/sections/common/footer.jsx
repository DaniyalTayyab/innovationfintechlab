import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";

function Footer() {
    return (
        <>
            <footer style={{height: 'unset'}} className="site-footer footer-dark">
                {/* FOOTER BLOCKES START */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* ABOUT COMPANY */}
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix p-b15">
                                        <NavLink to="/index" className="sx-text-primary"><ItodoImage style={{width: "200px"}} src="images/ftech-logo.png" alt="finntech" /></NavLink>
                                    </div>
                                    <p>Empowering your business. Cutting-edge IT services tailored for success. Experience excellence with our expert team.</p>
                                    <div className="widget_about-call-section">
                                        <div className="sx-f-call-icon"><i className="flaticon-telephone" /></div>
                                        <div className="sx-f-call-section">
                                            <span>Contact us 24/7</span>
                                            <a href="tel:+55(990)66622">+55 (990) 666 22</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* EXPLORE LINKS */}
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 col">
                                <div className="widget widget_services">
                                    <h4 className="sx-f-title">Explore Links</h4>
                                    <ul>
                                        <li><NavLink to="/services">Our Services</NavLink></li>
                                        <li><NavLink to="/portfolio">Our Portfolio</NavLink></li>
                                        <li><NavLink to="/contact-us">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* USEFUL LINK */}
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 col">
                                <div className="widget widget_services">
                                    <h4 className="sx-f-title">Useful Links</h4>
                                    <ul>
                                        <li><NavLink to="/mission">Mission &amp; Vision</NavLink></li>
                                        <li><NavLink to="/why-choose-us">Why Choose Us</NavLink></li>
                                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* SOLUTIONS */}
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 col footer-col-3">
                                <div className="widget widget_info">
                                    <h4 className="sx-f-title">Solutions</h4>
                                    <ul>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-phone" />
                                            </div>
                                            <div className="widget-info-detail">
                                                <a href="tel:+55(66633)2566">+ 55 ( 66633 ) 25 66</a>
                                                <a href="tel:+55(66633)2577">+ 55 ( 66633 ) 25 77</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-email" />
                                            </div>
                                            <div className="widget-info-detail">
                                                <p>info@inntechlab.com</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-maps-and-flags" />
                                            </div>
                                            <div className="widget-info-detail">
                                                <p>88 Broklyn Golden Road Street New York. USA</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* CONTACT US */}
                        </div>
                    </div>
                </div>
                <div className="sx-f-bottom-section">
                    <div className="sx-f-social">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/">
                                    <i className="flaticon-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <i className="flaticon-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/">
                                    <i className="flaticon-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <i className="flaticon-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sx-f-copy">
                        © {new Date().getFullYear()} by <NavLink to="/index">Innovation Fintech Lab.</NavLink> All rights reserved.
                    </div>
                </div>
                {/* FOOTER COPYRIGHT */}
            </footer>

        </>
    )
}

export default Footer;