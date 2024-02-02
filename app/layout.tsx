import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import ScrollTopButton from "@/components/scroll-top-button";
import FloatingInfos from "@/components/common/floating-infos";
import MobileBottomButtons from "@/components/mobile-bottom-buttons";

const font = Nanum_Gothic({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "동탄시티동물의료센터",
  description: "동산시티동물의료센터",
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
        <main>{children}</main>
        <Footer />
        <FloatingInfos />
        <ScrollTopButton />
        <MobileBottomButtons />
      </body>
    </html>
  );
}
