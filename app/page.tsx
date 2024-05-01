import BiliarySection from "@/components/sections/biliary/biliary";
import CTSection from "@/components/sections/ct/ct";
import DialysisSection from "@/components/sections/dialysis/dialysis";
import EmploymentSection from "@/components/sections/employment/employment";
import InfoSection from "@/components/sections/info/info";
import IntroSection from "@/components/sections/intro/intro";
import LandingSection from "@/components/sections/landing/landing";
import OrthopedicSection from "@/components/sections/orthopedic/orthopedics";
import RefferalSection from "@/components/sections/refferal/refferal";
import SubjectSection from "@/components/sections/subject/subject";
import ToolsSection from "@/components/sections/tools/tools";

export default function Home() {
  return (
    <>
      <LandingSection />
      <SubjectSection />
      <IntroSection />
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
