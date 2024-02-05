import Container from "@/components/common/container";
import { Metadata } from "next";
import Posts from "../posts";

export const metadata: Metadata = {
  title: "병원소식",
};

export default function NewsPage() {
  return (
    <Container>
      <div className="min-h-[50vh]">
        <Posts folderPath="markdown/news/" type="news" />
      </div>
    </Container>
  );
}
