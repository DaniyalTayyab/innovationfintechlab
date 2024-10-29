import { publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo1() {
    return (
        <>
            <div className="sx-mv-bx1-content-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx1-content">
                            <h2 className="sx-title">Our Vision</h2>
                            <span className="sx-title-2">Leading the Future of IT Services for Global Success</span>
                            <p>To be the leading IT service provider, recognized for our commitment to excellence, innovation, and sustainable growth, driving success for businesses worldwide through our expertise and dedication.</p>
                            <div className="progress">
                                <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '95%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}><span>95.00% Work Success</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-mv-bx1-media">
                            <div className="sx-dot-bx-right"><ItodoImage src="images/about/dotted-pic.png" alt="image" /></div>
                            <div className="sx-mv-img-outer">
                                <div className="sx-mv-img-section-2">
                                    <ItodoImage src="images/about/p1-1.jpg" alt="image" />
                                </div>
                                <div className="sx-mv-img-section-1-wrap">
                                    
                                    <div className="sx-mv-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/right-pic.jpg")})` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOurInfo1;