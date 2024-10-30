import ItodoImage from "../../../elements/itodo-img";

function SectionAboutCompany2Inner() {
    return (
        <>
            <div className="sx-about-bx3-content-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-media">
                            <div className="sx-dot-bx1"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-dot-bx2"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-ab3-img-outer">
                                <div className="sx-ab3-media">
                                    <ItodoImage src="images/about/p2.jpg" alt="media" />
                                </div>
                            </div>
                            <div className="sx-ab-circle-box">
                                <div className="sx-ab-circle-box-content">
                                    <span className="sx-exp">10 Years Experience</span>
                                    <div className="sx-exp-title-outer">
                                        <span className="sx-exp-title-1">It</span>
                                        <span className="sx-exp-title-2">Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-content">
                            <h2 className="sx-title">Our Mission</h2>
                            <span className="sx-title-2">Empowering Businesses with Innovative IT Solutions</span>
                            <p>To deliver innovative and efficient IT solutions that empower businesses to achieve their goals, ensuring seamless operations and growth through cutting-edge technology and exceptional customer service.</p>
                            <div className="row sx-about-icon-bx3-column">
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-incoming-call" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Contact Phone</span>
                                            <span className="sx-icon-bx-title">+971-50-8326364</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-email-1" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Contact Mail</span>
                                            <span className="sx-icon-bx-title">info@inntechlab.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hilite-title text-left p-l50 text-uppercase">
                <strong>About Us</strong>
            </div>
        </>
    )
}

export default SectionAboutCompany2Inner;