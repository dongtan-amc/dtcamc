import SubContentsMenus from "@/components/common/sub-contents-menus";
import CasesSection from "@/components/sections/cases/casesSection";
import CommunitySection from "@/components/sections/community/community-seection";
import ExpertiesSection from "@/components/sections/experties/experties-section";
import FacilitySection from "@/components/sections/facility/facility-section";
import Landing from "@/components/sections/landing/landing";
import Sitemap from "@/components/sections/sitemap/sitemap";
import { HOME_SUBCONTENTS } from "@/constants/subcontents";

export default function Home() {
  return (
    <>
      <Landing />
      <ExpertiesSection />
      <FacilitySection />
      <CasesSection />
      <CommunitySection />
      <SubContentsMenus subcontents={HOME_SUBCONTENTS} />
      <Sitemap />
    </>
  );
}
