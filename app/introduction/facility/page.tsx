import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import { FACILITY_SECTIONS } from "@/constants/facilities";
import { INTRODUCTION_MENUS } from "@/constants/nav-menues";
import consulting2 from "@/public/photo/consulting-room1.jpeg";
import { Metadata } from "next";
import FacilitySection from "./facility-section";
import { NAME } from "@/constants/general-info";

export const metadata: Metadata = {
  title: "시설소개",
  description: `${NAME} 시설소개`,
};

export default function FacilityPage() {
  return (
    <main>
      <Banner
        image={consulting2}
        upperRoute="병원 소개"
        subRoute="시설 소개"
        subMenus={INTRODUCTION_MENUS}
      />

      <Container>
        <div className="space-y-10 pt-10 pb-12">
          {FACILITY_SECTIONS.map((section, index) => (
            <FacilitySection
              key={index}
              {...section}
              index={index}
              lastIndex={FACILITY_SECTIONS.length - 1}
            />
          ))}
        </div>
      </Container>

      <SubBanner imageClassName="facility_subbanner" />
    </main>
  );
}
