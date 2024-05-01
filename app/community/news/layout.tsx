import React from "react";

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Banner
        image={newsBanner}
        upperRoute="커뮤니티"
        subRoute="병원소식"
        subMenus={COMMUNITY_SUBMENUS}
      /> */}
      {children}
    </div>
  );
}
