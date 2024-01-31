import Container from "@/components/common/container";
import Posts from "../posts";

export default function NoticePage() {
  return (
    <Container>
      <Posts folderPath="markdown/notice/" type="notice" />
    </Container>
  );
}
