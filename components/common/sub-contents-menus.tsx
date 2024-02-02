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
        <div className="flex lg:flex-row gap-4 flex-col justify-between items-center h-full text-white">
          {subcontents.map((contents) => (
            <SubContents {...contents} key={contents.title} />
          ))}
        </div>
      </Container>
    </div>
  );
}
