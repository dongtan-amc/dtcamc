import BiliarySection from "@/components/sections/biliary/biliary-section";
import ClinicSection from "@/components/sections/clinic/clinic-section";
import CTSection from "@/components/sections/ct/ct-section";
import DialysisSection from "@/components/sections/dialysis/dialysis-section";
import EmploymentSection from "@/components/sections/employment/employment-section";
import InfoSection from "@/components/sections/info/info-section";
import IntroSection from "@/components/sections/intro/intro-section";
import LandingSection from "@/components/sections/landing/landing-section";
import OrthopedicSection from "@/components/sections/orthopedic/orthopedic-section";
import RefferalSection from "@/components/sections/refferal/refferal-section";
import ToolsSection from "@/components/sections/tools/tools-section";
import VetSection from "@/components/sections/vets/vet-section";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ClinicSection />
      <IntroSection />
      <VetSection />
      <InfoSection />
      <OrthopedicSection />
      <BiliarySection />
      <DialysisSection />
      <CTSection />
      <RefferalSection />
      <ToolsSection />
      <EmploymentSection />
    </>
  );
}
