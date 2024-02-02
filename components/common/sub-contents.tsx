import Link from "next/link";
import { IconType } from "react-icons/lib";

export default function SubContents({
  title,
  description,
  Icon,
  href,
}: {
  title: string;
  description: string;
  Icon: IconType;
  href: string;
}) {
  const formattedDescription = { __html: description };
  return (
    <Link
      className="w-[280px] bg-slate-950 flex justify-center items-center h-[200px] lg:h-[400px] flex-col p-8 hover:bg-olive-drab-800 transition hover:scale-105 break-keep rounded-xl"
      href={href}
    >
      <Icon size={40} className="pb-4" />
      <p className="text-2xl pb-8">{title}</p>
      <p
        className="text-sm text-center"
        dangerouslySetInnerHTML={formattedDescription}
      ></p>
    </Link>
  );
}
