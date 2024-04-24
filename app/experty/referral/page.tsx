import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import ReferralInfos from "./referral-infos";
import ReferralProcedures from "./referral-procedures";
import { NAME } from "@/constants/general-info";

export const metadata: Metadata = {
  title: "2차진료의뢰",
  description: `${NAME} 2차진료의뢰`,
};

export default function OperationPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="특성화 센터"
        subRoute="2차 진료 의뢰"
        subMenus={EXPERTY_SUBMENUS}
      />

      <Container>
        <ReferralInfos />
        <ReferralProcedures />
      </Container>
    </main>
  );
}
