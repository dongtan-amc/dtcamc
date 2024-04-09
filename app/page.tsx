import CommunitySection from "@/components/sections/community/community-seection";
import Landing from "@/components/sections/landing/landing";
import MapSection from "@/components/sections/map/map-section";
import MoreSection from "@/components/sections/more/more-section";
import SubjectSection from "@/components/sections/subject/subject-section";

export default function Home() {
  return (
    <>
      <Landing />
      <MoreSection />
      <SubjectSection />
      <CommunitySection />
      <MapSection />
      {/* <ExpertiesSection /> */}
      {/* <FacilitySection /> */}
      {/* <CasesSection /> */}
      {/* <SubContentsMenus subcontents={HOME_SUBCONTENTS} /> */}
      {/* <Sitemap /> */}
    </>
  );
}
