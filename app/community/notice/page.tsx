import Container from "@/components/common/container";
import { Metadata } from "next";
import Posts from "../posts";

export const metadata: Metadata = {
  title: "공지사항",
};

export default function NoticePage() {
  return (
    <Container>
      <div className="min-h-[50vh]">
        <Posts folderPath="markdown/notice/" type="notice" />
      </div>
    </Container>
  );
}
