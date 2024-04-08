import Container from "@/components/common/container";
import SectionTitle from "@/components/common/section-title";
import CommunityBoard from "./community-board";

export default function CommunitySection() {
  return (
    <div className="py-10 lg:py-20">
      <Container>
        <CommunityBoard />
      </Container>
    </div>
  );
}
