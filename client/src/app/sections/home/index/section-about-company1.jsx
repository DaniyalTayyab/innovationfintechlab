import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";
import SectionCounter1 from "./section-counter1";

function SectionAboutCompany1() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx1-content-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-media">
                                        <div className="sx-dot-bx"><ItodoImage src="images/about/dotted-pic.png" alt="" /></div>
                                        <div className="sx-ab-img-outer">
                                            <div className="sx-ab-img-section-1-wrap">
                                                <div className="sx-ab-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/left-pic.png")})` }} />
                                            </div>
                                            <div className="sx-ab-img-section-2">
                                                <ItodoImage src="images/about/p1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-content">
                                        <h2 className="sx-title">That's why we're list of favorites.</h2>
                                        <span className="sx-title-2">We leverage blockchain technology to deliver tailored solutions that drive efficiency and growth.</span>
                                        <p>There are many approaches to blockchain integration, but our expertise stands out. We prioritize transparency, security, and collaboration, helping businesses navigate the complexities of decentralized technology with ease.</p>
                                        <div className="progress">
                                            <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><span>95.00% Work Success</span></div>
                                        </div>
                                        <div className="row sx-about-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Custom solutions to enhance performance and drive innovation.</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p>Expert guidance to optimize your IT strategy and efficiency.</p>
                                            </div>
                                        </div>
                                        <div className="row sx-about-icon-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-mouse" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">IT Solution</span>
                                                        <span className="sx-icon-bx-title-info">02 Project</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-download" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">IT Consultant</span>
                                                        <span className="sx-icon-bx-title-info">04 Project</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COUNTER START */}
                        <SectionCounter1 />
                        {/* COUNTER  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany1;