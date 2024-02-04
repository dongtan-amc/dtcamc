import SubContentsMenus from "@/components/common/sub-contents-menus";
import CasesSection from "@/components/sections/cases/casesSection";
import CommunitySection from "@/components/sections/community/community-seection";
import FacilitySection from "@/components/sections/facility/facility-section";
import Landing from "@/components/sections/landing/landing";
import Sitemap from "@/components/sections/sitemap/sitemap";
import SubjectsSection from "@/components/sections/subjects/subjects";
import { HOME_SUBCONTENTS } from "@/constants/subcontents";

export default function Home() {
  return (
    <>
      <Landing />
      {/* <SubjectsSection /> */}
      <div className="h-screen bg-olive-drab-50"></div>
      <FacilitySection />
      <CasesSection />
      {/* <CommunitySection /> */}
      <SubContentsMenus subcontents={HOME_SUBCONTENTS} />
      {/* <Sitemap /> */}
    </>
  );
}
