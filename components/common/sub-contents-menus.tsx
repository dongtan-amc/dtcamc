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
    <div className="h-[560px] mask bg-center ">
      <Container>
        <div className="flex justify-between items-center h-full text-white">
          {subcontents.map((contents) => (
            <SubContents {...contents} key={contents.title} />
          ))}
        </div>
      </Container>
    </div>
  );
}
