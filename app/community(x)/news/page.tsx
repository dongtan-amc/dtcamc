import Container from "@/components/common/container";
import { Metadata } from "next";
import Posts from "../posts";
import { NAME } from "@/constants/general-info";

export const metadata: Metadata = {
  title: "병원소식",
  description: `${NAME} 병원소식`,
};

export default function NewsPage() {
  return (
    <Container>
      <Posts folderPath="markdown/news/" type="news" />
    </Container>
  );
}
