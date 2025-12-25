import { NAME } from "@/constants/general-info";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

import FeeInfoPopup from "@/components/fee-info-popup";
import Footer from "@/components/footer";
import MobileBottomButtons from "@/components/mobile-bottom-buttons";
import Navbar from "@/components/navbar/navbar";
import ScrollTopButton from "@/components/scroll-top-button";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dtctamc.com"),
  title: NAME,
  description: "24시동탄시티동물의료센터",
  keywords: [
    "동탄시티동물병원",
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
    "강아지재활센터",
  ],
  applicationName: `24시${NAME} 홈페이지`,
  category: "동물병원",
  classification: "동물병원",
  creator: "howoo",
  verification: {
    other: {
      "naver-site-verification": "03cc0cb9f6b79e54b2cd62ecf6287c7db8e3fd6e",
    },
    google: "kCICzOgF-iOJ1DjKSZfn9ubgPKWdOrwj79Yq1XO0Yqs",
  },
};

const scdream = localFont({
  src: [
    {
      path: "./SCDream4.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./SCDream5.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./SCDream6.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./SCDream7.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./SCDream8.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./SCDream9.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <title>
          동탄 24시 시티동물병원 - CT·응급 진료 (24시동탄시티동물의료센터)
        </title>
        <meta
          name="description"
          content="동탄 최초 24시 진료 ‘시티동물병원’. CT·신장투석·정형외과 등 대학병원급 장비와 전문의 상주로 반려동물 응급·중증 케어를 제공합니다. 온라인 예약·카톡 상담."
        />
        <meta
          name="keywords"
          content="24시 동물병원,동탄 동물병원,시티동물병원,응급 동물병원,CT,투석,정형외과"
        ></meta>
        {/* --- Naver Premium Log (WCS) --- */}
        <Script
          id="naver-wcs-lib"
          src="https://wcs.naver.net/wcslog.js"
          strategy="afterInteractive"
        />
        <Script id="naver-wcs-init" strategy="afterInteractive">
          {`
            window.wcs_add = window.wcs_add || {};
            window.wcs_add["wa"] = "s_5203609c9751";
            if (typeof window.wcs !== "undefined") {
              if (typeof window.wcs.inflow === "function") window.wcs.inflow();
              if (typeof window.wcs_do === "function") window.wcs_do();
            }
          `}
        </Script>
        {/* --- /Naver Premium Log --- */}
      </head>
      <body className={`${scdream.className} antialiased`}>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_APP_JS_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RWR6CGRP6V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RWR6CGRP6V');
          `}
        </Script>

        <Navbar />
        <main className="min-h-screen break-keep">{children}</main>
        <Footer />

        <ScrollTopButton />

        <MobileBottomButtons />

        <Toaster />

        <FeeInfoPopup />
      </body>
    </html>
  );
}
