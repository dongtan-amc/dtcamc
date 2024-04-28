import CommunitySection from "@/components/sections/community/community-seection";
import FacilitySection from "@/components/sections/facility/facility-section";
import Landing from "@/components/sections/landing/landing";
import MapSection from "@/components/sections/map/map-section";
import MoreSection from "@/components/sections/more/more-section";
import SubjectSection from "@/components/sections/subject(x)/subject-section";

export default function Home() {
  return (
    <>
      <Landing />
      <MoreSection />
      <FacilitySection />
      {/* <SubjectSection /> */}
      <CommunitySection />
      <MapSection />
    </>
  );
}
