import Banner from "@/components/common/banner";
import Paragraph from "./paragraph";

export default function SalutePage() {
  return (
    <main>
      <Banner
        imageClassName="salute_banner"
        subTitle="대표원장 인사말"
        title="인사말"
      />

      <Paragraph />
    </main>
  );
}
