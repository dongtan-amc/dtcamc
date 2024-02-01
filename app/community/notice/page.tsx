import Container from "@/components/common/container";
import Posts from "../posts";

export default function NoticePage() {
  return (
    <Container>
      <div className="min-h-[50vh]">
        <Posts folderPath="markdown/notice/" type="notice" />
      </div>
    </Container>
  );
}
