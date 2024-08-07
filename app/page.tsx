import BiliarySection from "@/components/sections/biliary/biliary-section";
import CTSection from "@/components/sections/ct/ct-section";
import DialysisSection from "@/components/sections/dialysis/dialysis-section";
import EmploymentSection from "@/components/sections/employment/employment-section";
import InfoSection from "@/components/sections/info/info-section";
import IntroSection from "@/components/sections/intro/intro-section";
import LandingSection from "@/components/sections/landing/landing-section";
import MapSection from "@/components/sections/map/map-section";
import OnncologySection from "@/components/sections/oncology/oncology-section";
import OrthopedicSection from "@/components/sections/orthopedic/orthopedic-section";
import ToolsSection from "@/components/sections/tools/tools-section";
import VetSection from "@/components/sections/vets/vet-section";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-slate-700 text-white">
        동영상 혹은 슬라이드
      </div>
      {/* <LandingSection /> */}
      <IntroSection />
      {/* <VetSection /> */}
      {/* <OrthopedicSection /> */}
      {/* <BiliarySection /> */}
      {/* <DialysisSection /> */}
      {/* <OnncologySection /> */}
      {/* <CTSection /> */}
      {/* <ToolsSection /> */}
      {/* <MapSection /> */}
      {/* <InfoSection /> */}
      {/* <EmploymentSection /> */}
    </>
  );
}
