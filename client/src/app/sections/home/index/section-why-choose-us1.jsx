import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionWhyChooseUs1() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})` }}>
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <div className="sx-head-s-title">Why Choose Us</div>
                        <div className="sx-head-l-title">
                            <h2 className="sx-title">Our Work Services</h2>
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="sx-icon-bx-wrap">
                            <div className="row">
                                {/* Block one */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-data" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Public And Private Blockchain</h4></NavLink>
                                                <p>Roles and Differences</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Two */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-programmer" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Decentralized Crypto Vaults</h4></NavLink>
                                                <p>Securing Digital Assets</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Three */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-positive-review" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Non-Fungible Token And Marketplace</h4></NavLink>
                                                <p>NFTs and Marketplaces</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Four */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-profit" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Decentralized Apps (Dapps)</h4></NavLink>
                                                <p>Apps Without Central Control</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block Five */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-chart" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Decentralized (DeFi) Solutions</h4></NavLink>
                                                <p>Transforming Finance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block SIx */}
                                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-icon-bx-1">
                                        <div className="sx-icon-box-wraper">
                                            <div className="sx-icon-bx-icon ">
                                                <span className="sx-text-primary"><i className="flaticon-parking" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <NavLink to="/services/detail"><h4 className="sx-tilte">Web3 Cybersecurity & Audit</h4></NavLink>
                                                <p>Securing Decentralized Apps</p>
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

export default SectionWhyChooseUs1;