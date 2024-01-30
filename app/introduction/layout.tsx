import SubContentsMenus from "@/components/common/sub-contents-menus";
import { INTRODUCTION_SUBCONTENTS } from "@/constants/constants";
import React from "react";

export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <SubContentsMenus subcontents={INTRODUCTION_SUBCONTENTS} />
    </div>
  );
}
