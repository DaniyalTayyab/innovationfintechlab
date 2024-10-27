import SectionSlider2 from "../../sections/home/index2/section-slider2";
import SectionAboutCompany2 from "../../sections/home/index2/section-about-company2";
import SectionServices2 from "../../sections/home/index2/section-services2";
import SectionCaseStudy2 from "../../sections/home/index2/section-case-study2";
import SectionTeam1 from "../../sections/home/index2/section-team1";
import SectionWhyChooseUs2 from "../../sections/home/index2/section-why-choose-us2";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Home2Page() {

    useEffect(() => {
        loadScript("js/custom.js")
    })

    return (
        <>
            <SectionSlider2 />
            <SectionAboutCompany2 />
            <SectionServices2 />
            <div className="sx-div-line" />
            <SectionCaseStudy2 />
            <SectionTeam1 />
            <SectionWhyChooseUs2 />
        </>
    )
}

export default Home2Page;