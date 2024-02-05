import SubBanner from "@/components/common/sub-banner";
import SubContentsMenus from "@/components/common/sub-contents-menus";
import {
  EXPERTY_SUBCONTENTS,
  INTRODUCTION_SUBCONTENTS,
} from "@/constants/subcontents";
import React from "react";

export default function ExpertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}

      <SubBanner imageClassName="experty_banner" />

      <SubContentsMenus subcontents={EXPERTY_SUBCONTENTS} />
    </div>
  );
}
