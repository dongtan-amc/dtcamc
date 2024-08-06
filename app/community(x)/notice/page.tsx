import Container from "@/components/common/container";
import { Metadata } from "next";
import Posts from "../posts";
import { NAME } from "@/constants/general-info";

export const metadata: Metadata = {
  title: "공지사항",
  description: `${NAME} 공지사항`,
};

export default function NoticePage() {
  return (
    <Container>
      <Posts folderPath="markdown/notice/" type="notice" />
    </Container>
  );
}
