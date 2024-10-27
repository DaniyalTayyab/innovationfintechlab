import Banner from "../../../sections/common/banner";
import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { bannerData } from "../../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";

function PortfolioDetailPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.portfoliodetail} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t110 mobile-page-padding">
                <div className="container">
                    <div className="sx-pic-l">
                        <ItodoImage src="images/portfolio/large-pic.jpg" alt="image" />
                    </div>
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head left">
                            <div className="sx-head-s-title">Branding Design</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">Visit Our planned modern IT Solution farm.</h2>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="sx-our-service-info m-b30">
                            <p>Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulum iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quis
                                nunc, vitae rutrum libero. Duis eget consectetur urna. Ut ut aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orci varius natoque penatibus et magnis dis parturient
                                ridiculus mus. Nam eget nisl non elit tempor dignissim nec non sapien.
                            </p>
                            <p>Nullam id ultricies tellus. Nulla tempor, elit ac maximus accumsan, urna arcu congue neque, non venenatis leo erat sed massa. Nam gravida porttitor quam sit amet vestibulum. Cras tincidunt mauris
                                rutrum. Duis tincidunt, nulla venenatis eleifend sollicitudin, lacus purus iaculis mauris, et hendrerit ex dolor ut nunc.
                            </p>
                            <div className="sx-about-icon-bx2-column sx-bg-light m-tb50">
                                <div className="row ">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-category" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Category:</span>
                                                <span className="sx-icon-bx-title-info">Workout</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-calendar" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Date:</span>
                                                <span className="sx-icon-bx-title-info">June 18, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-leaf" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Author:</span>
                                                <span className="sx-icon-bx-title-info">Fabronia Andreas</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="sx-icon-bx-6">
                                            <div className="sx-media sx-text-secondry">
                                                <i className="flaticon-image" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Class:</span>
                                                <span className="sx-icon-bx-title-info">Boxing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h2 className="sx-title">Our Success Journey We can Provide.</h2>
                                            <p>Nullam id ultricies tellus. Nulla tempor, elit ac maximus accumsan, urna arcu congue neque, non venenatis leo erat sed massa.
                                                amet vestibulum. Cras tincidunt mauris id nisl rutrum rutrum. Duis tincidunt, nulla venenatis eleifend sollicitudin, lacus purus iacul
                                                nunc. Maecenas ultrices lorem sed nulla scelerisque ornare. Aliquam quis orci sit amet arcu tincidunt euismod ac eget odio. Viva
                                                interdum arcu massa, sed tristique odio luctus id. Nulla a porttitor felis, sit amet volutpat ante.
                                            </p>
                                            <p>Maecenas at dui ut leo efficitur tempus. Mauris elementum elit sed ex finibus aliquet. Donec turpis turpis, facilisis ac ante quis,
                                                pulvinar nibh ut risus euismod blandit. Proin cursus neque eget risus accumsan placerat. Quisque sapien lorem, maximus id turpi
                                                Maecenas ac dolor eget massa condimentum aliquet. Duis eget nisi facilisis eros sagittis semper sed ac ligula.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/pic1.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sx-r-part-image-content-box">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="sx-r-part-content">
                                            <h3 className="sx-title">IT Solution Business Planning system.</h3>
                                            <p>Mauris porta ligula non blandit auctor. Vestibulum ut tortor ullamcorper lacus hendrerit vestibulum. Suspendisse eget lobortis pur
                                                interdum vehicula non quis velit. Nunc ac aliquet elit, a euismod augue. Sed posuere, lorem a aliquet ullamcorper, tellus elit orna
                                                nunc. Maecenas eget condimentum odio. Nunc mollis finibus nibh, ac tincidunt odio imperdiet non. Sed sit amet magna rhoncus,
                                                lacus. Vestibulum dignissim semper orci sed bibendum. Donec dapibus posuere risus, sit amet luctus quam rutrum id. Suspendis
                                                eu, placerat non diam. Aenean vitae magna a risus semper laoreet.</p>
                                            <p>Nullam vitae dui euismod, pulvinar mauris quis, sagittis ante. Pellentesque nec diam tincidunt, lobortis ligula eget, ultricies elit.
                                                luctus odio efficitur non. Suspendisse tincidunt sem ut dui tempus, sit amet tincidunt ante mattis. Cras interdum orci sit amet turpi
                                                consequat. Curabitur eu porttitor nibh, a condimentum enim. Mauris nec facilisis augue, in imperdiet mi.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="sx-r-part-media">
                                            <ItodoImage src="images/portfolio/pic2.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* SECTION CONTENT END  */}
            {/* OUR CASE STUDY SECTION */}
  
            {/* OUR CASE STUDY END */}
        </>
    )
}

export default PortfolioDetailPage;