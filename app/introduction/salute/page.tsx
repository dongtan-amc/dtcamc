import Banner from "@/components/common/banner";
import Paragraph from "./paragraph";

export default function SalutePage() {
  return (
    <main>
      <Banner
        imageClassName="salute_banner"
        title="인사말"
        subTitle="병원소개 > 인사말"
      />

      <Paragraph />
    </main>
  );
}
