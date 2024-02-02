import SectionTitle from "@/components/common/section-title";
import CommunityBoard from "./community-board";
import Container from "@/components/common/container";

export default function CommunitySection() {
  return (
    <div className="bg-slate-950 py-20">
      <SectionTitle link="/community/notice" theme="dark" title="커뮤니티" />
      <Container>
        <CommunityBoard />
      </Container>
    </div>
  );
}
