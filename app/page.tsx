import SubContentsMenus from "@/components/common/sub-contents-menus";
import CasesSection from "@/components/sections/cases/cases-section";
import CommunitySection from "@/components/sections/community/community-seection";
import ExpertiesSection from "@/components/sections/experties/experties-section";
import FacilitySection from "@/components/sections/facility/facility-section";
import Landing from "@/components/sections/landing/landing";
import MoreSection from "@/components/sections/more/more-section";
import Sitemap from "@/components/sections/sitemap/sitemap";
import SubjectSection from "@/components/sections/subject/subject-section";
import { HOME_SUBCONTENTS } from "@/constants/subcontents";

export default function Home() {
  return (
    <>
      <Landing />
      <MoreSection />
      <SubjectSection />
      {/* <ExpertiesSection /> */}
      {/* <FacilitySection /> */}
      {/* <CasesSection /> */}
      {/* <CommunitySection /> */}
      {/* <SubContentsMenus subcontents={HOME_SUBCONTENTS} /> */}
      {/* <Sitemap /> */}
    </>
  );
}
