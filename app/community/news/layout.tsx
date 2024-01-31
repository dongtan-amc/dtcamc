import Banner from "@/components/common/banner";
import { COMMUNITY_SUBMENUS } from "@/constants/nav-menues";
import noticeBanner from "@/public/unsplash/notice-banner.jpg";
import React from "react";

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Banner
        image={noticeBanner}
        upperRoute="커뮤니티"
        subRoute="병원소식"
        subMenus={COMMUNITY_SUBMENUS}
      />
      {children}
    </div>
  );
}
