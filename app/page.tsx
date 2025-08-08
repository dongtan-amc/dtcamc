import BiliarySection from "@/components/sections/biliary/biliary-section";
import CTSection from "@/components/sections/ct/ct-section";
import DialysisSection from "@/components/sections/dialysis/dialysis-section";
import EmploymentSection from "@/components/sections/employment/employment-section";
import InfoSection from "@/components/sections/info/info-section";
import IntroSection from "@/components/sections/intro/intro-section";
import LandingSection from "@/components/sections/landing/landing-section";
// import MapSection from "@/components/sections/map/map-section"; // 2. 기존 MapSection import는 삭제합니다.
import OnncologySection from "@/components/sections/oncology/oncology-section";
import OrthopedicSection from "@/components/sections/orthopedic/orthopedic-section";
import ToolsSection from "@/components/sections/tools/tools-section";
import VetSection from "@/components/sections/vets/vet-section";

import dynamic from 'next/dynamic'; // 1. dynamic을 import 합니다.

// 3. dynamic import로 MapSection을 새로 정의합니다.
const MapSection = dynamic(
  () => import('@/components/sections/map/map-section'),
  {
    ssr: false, // 서버에서는 렌더링하지 않도록 설정
    loading: () => <div style={{ width: '100%', height: '680px', backgroundColor: '#f0f0f0' }} />
  }
);

export default function Home() {
  return (
    <>
      <LandingSection />
      <IntroSection />
      <VetSection />
      <OrthopedicSection />
      <BiliarySection />
      <DialysisSection />
      <OnncologySection />
      <CTSection />
      <ToolsSection />
      <MapSection />
      <InfoSection />
      <EmploymentSection />
    </>
  );
}
