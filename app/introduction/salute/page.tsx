import Banner from "@/components/common/banner";
import Paragraph from "./paragraph";
import saluteBanner from "@/public/photo/entrance.jpeg";

export default function SalutePage() {
  return (
    <main>
      <Banner
        image={saluteBanner}
        title="인사말"
        subTitle="병원소개 > 인사말"
      />

      <Paragraph />
    </main>
  );
}
