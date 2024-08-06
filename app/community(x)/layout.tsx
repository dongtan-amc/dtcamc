import SubBanner from "@/components/common/sub-banner";
import SubContentsMenus from "@/components/common/sub-contents-menus";
import { COMMUNITY_SUBCONTENTS } from "@/constants/subcontents";

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <SubBanner imageClassName="community_subbanner" />
      <SubContentsMenus subcontents={COMMUNITY_SUBCONTENTS} />
    </div>
  );
}
