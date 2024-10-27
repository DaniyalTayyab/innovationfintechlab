import Banner from "../../sections/common/banner";
import SectionAboutCompany4 from "../../sections/IT solutions/mission-vision/section-about-company4";
import SectionOurInfo2 from "../../sections/IT solutions/mission-vision/section-our-info2";
import SectionTeam1 from "../../sections/home/index2/section-team1";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function MissionVisionPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.mission} />
            <SectionAboutCompany4 />
            <SectionOurInfo2/ >
            <SectionTeam1 />
        </>
    )
}

export default MissionVisionPage;