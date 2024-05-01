import Container from "@/components/common/container";
import { NAME } from "@/constants/general-info";
import { Metadata } from "next";
import Cases from "./cases";

export const metadata: Metadata = {
  title: "케이스",
  description: `${NAME} 진료 케이스`,
};

export default function CasePage() {
  return (
    <main>
      {/* <Banner
        image={caseBanner}
        upperRoute="커뮤니티"
        subRoute="진료 케이스"
        subMenus={COMMUNITY_SUBMENUS}
      /> */}

      <Container>
        <Cases />
      </Container>
    </main>
  );
}
