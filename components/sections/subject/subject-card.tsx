import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { type IconType } from "react-icons/lib";

export default function SubjectCard({
  title,
  subtitle,
  icon: Icon,
  hash,
  bg,
}: {
  title: string;
  subtitle: string;
  icon: IconType;
  hash: string;
  bg: string;
}) {
  return (
    <div
      className={`border pt-[130px] pb-[100px] text-white`}
      style={{ background: bg }}
    >
      <div className="flex flex-col items-center gap-10 px-10 text-center">
        <Icon size={60} />
        <h2 className="text-[30px] font-bold">{title}</h2>
        <p className="text-[21px]">{subtitle}</p>

        <Link href={hash}>
          <Button
            size="icon"
            className="rounded-full bg-transparent border hover:bg-transparent"
          >
            <ArrowDownIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}
