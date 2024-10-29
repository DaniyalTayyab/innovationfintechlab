import Banner from "../../sections/common/banner";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function AboutUsPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.about} />
            <SectionAboutCompany1 />
            <SectionServices1 />
            <SectionWhyChooseUs4 />
        </>
    )
}

export default AboutUsPage;