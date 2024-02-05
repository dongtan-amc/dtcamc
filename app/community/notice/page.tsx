import Container from "@/components/common/container";
import Posts from "../posts";
import { Metadata } from "next";

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
