import { IconType } from "react-icons/lib";
import Container from "./container";
import SubContents from "./sub-contents";

export default function SubContentsMenus({
  subcontents,
}: {
  subcontents: {
    title: string;
    description: string;
    Icon: IconType;
    href: string;
  }[];
}) {
  return (
    <div className="lg:h-[560px] mask bg-center py-4">
      <Container>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 items-center justify-center h-full">
          {subcontents.map((contents) => (
            <SubContents {...contents} key={contents.title} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
