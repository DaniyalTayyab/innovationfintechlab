import { NavLink } from "react-router-dom";

function SectionServices1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Our Services</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Sophisticated Knowledge For Rapidly Emerging Legal service of Our IT Solution!</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-our-services-bx">
                            <div className="row">
                                {/* Block one */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-security" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Product Engineering</h4>
                                                <p>Transforming your ideas into market-ready products. Our expert team delivers end-to-end solutions from concept to deployment, ensuring innovative and high-quality results.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="" className="site-button-circle">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Two */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-coding" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Blockchain Analytics</h4>
                                                <p>Harness the power of Blockchain Analytics to uncover insights from blockchain data, enhance decision-making, and drive growth through advanced analysis of transactions and trends.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="" className="site-button-circle active">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Three */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-service-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-service-bx-icon scale-in-center">
                                                <span className="sx-text-primary"><i className="flaticon-smart-contracts" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="sx-tilte">Creative Solutions</h4>
                                                <p>Empowering your brand with innovative and creative solutions. We deliver unique strategies and designs that captivate audiences and drive business success.</p>
                                                <div className="sx-center-btn">
                                                    <NavLink to="" className="site-button-circle">
                                                        <i className="fa fa-long-arrow-right" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionServices1;