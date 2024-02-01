import SubContentsMenus from "@/components/common/sub-contents-menus";
import Facility from "@/components/sections/facility/facility";
import Landing from "@/components/sections/landing/landing";
import Sitemap from "@/components/sections/sitemap/sitemap";
import { HOME_SUBCONTENTS } from "@/constants/subcontents";

export default function Home() {
  return (
    <>
      <Landing />
      {/* <Subjects /> */}
      <div className="h-screen bg-olive-drab-100"></div>

      <Facility />
      <div className="h-screen bg-olive-drab-100"></div>
      <SubContentsMenus subcontents={HOME_SUBCONTENTS} />
      <Sitemap />
    </>
  );
}
