import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import ScrollTopButton from "@/components/scroll-top-button";
import FloatingInfos from "@/components/common/floating-infos";
import MobileBottomButtons from "@/components/mobile-bottom-buttons";
import { NAME } from "@/constants/general-info";
import og from "@/public/icons/navar-blog.png";

const font = Nanum_Gothic({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: NAME,
    template: `%s - ${NAME} `,
  },
  description: "동탄 24시동물병원",
  keywords: [
    "동탄동물병원",
    "동물병원",
    "동탄24시동물병원",
    "24시동물병원",
    "강아지암",
    "고양이암",
    "고양이동물병원",
    "고양이전문병원",
    "강아지건강검진",
    "고양이건강검진",
    "강아지ct",
    "고양이ct",
    "동물병원ct",
    "강아지심장병",
    "고양이심장병",
    "강아지신부전",
    "고양이신부전",
    "강아지쿠싱증후군",
    "강아지마취",
    "고양이마취",
    "강아지치과",
    "강아지스케일링",
    "강아지치석제거",
    "고양이스케일링",
    "고양이구내염",
    "고양이치과",
    "강아지안과",
    "강아지녹내장",
    "고양이안과",
    "고양이녹내장",
    "강아지수혈",
    "고양이수혈",
    "강아지재활센터",
    "강아지미용",
    "강아지목욕",
  ],
  applicationName: `${NAME} 홈페이지`,
  category: "동물병원",
  classification: "동물병원",
  creator: "howoo",
  // verification: { google: "wY3QAZW61pL73SdqLV6UUTaurZT61xSioIaQYOilQ2o" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Navbar />
        <main className="break-keep">{children}</main>
        <Footer />
        <FloatingInfos />
        <ScrollTopButton />
        <MobileBottomButtons />
      </body>
    </html>
  );
}
