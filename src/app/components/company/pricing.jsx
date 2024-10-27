import Banner from "../../sections/common/banner";
import SectionPricing2 from "../../sections/company/pricing/section-pricing2";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionWhyChooseUs3 from "../../sections/home/index3/section-why-choose-us3";
import { bannerData } from "../../../globals/banner";
import { video } from "../../../globals/data";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function PricingPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.pricing} />
            <SectionPricing2 />
            <SectionAboutCompany1 />
            <SectionWhyChooseUs3 />
        </>
    )
}

export default PricingPage;