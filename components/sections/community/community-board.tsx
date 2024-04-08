import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DAY_TIME,
  LATE_NIGHT_TIME,
  NIGHT_TIME,
  PHONE,
  SUNDAY_TIME,
} from "@/constants/general-info";
import { cn, getPostsMetadata } from "@/lib/utils";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function CommunityBoard() {
  const news = getPostsMetadata("markdown/news/").slice(0, 5);
  const notices = getPostsMetadata("markdown/notice/").slice(0, 5);

  return (
    <div className="flex flex-col lg:flex-row border">
      <div className="bg-white flex-1 p-5 text-olive-drab-900 border-r">
        <div className="flex items-center justify-between pb-2 lg:pb-4 ">
          <h2 className="text-lg font-bold">공지사항</h2>
          <Button
            asChild
            size="icon"
            variant="outline"
            className="rounded-full bg-olive-drab-900 text-white hover:text-olive-drab-900 hover:bg-white border border-primary"
          >
            <Link href="/community/notice">
              <PlusIcon />
            </Link>
          </Button>
        </div>
        <Posts posts={notices} category="notice" theme="light" />
      </div>

      <div className="bg-white flex-1 p-5 text-olive-drab-900">
        <div className="flex items-center justify-between pb-2 lg:pb-4 ">
          <h2 className="text-lg font-bold">병원소식</h2>
          <Button
            asChild
            size="icon"
            variant="outline"
            className="rounded-full bg-olive-drab-900 text-white hover:text-olive-drab-900 hover:bg-white border border-primary"
          >
            <Link href="/community/news">
              <PlusIcon />
            </Link>
          </Button>
        </div>
        <Posts posts={news} category="news" theme="light" />
      </div>

      <div className="bg-olive-drab-900 flex-1 p-5">
        <div className="text-slate-50">
          <h2 className="text-lg font-bold">상담 및 예약 문의</h2>

          <p className="text-4xl font-bold py-4">{PHONE}</p>

          <div className="flex flex-col gap-2">
            <p>주간진료 : {DAY_TIME}</p>
            <p>야간진료 : {NIGHT_TIME}</p>
            <p>일요일 : {SUNDAY_TIME}</p>
            <p className="text-sm py-2">{LATE_NIGHT_TIME}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Posts = ({
  theme,
  category,
  posts,
}: {
  theme: "primary" | "light";
  category: string;
  posts: {
    title: any;
    date: any;
    author: any;
    important: any;
    slug: string;
  }[];
}) => {
  return (
    <ul
      className={cn(
        theme === "primary" ? "text-slate-50" : "text-olive-drab-900",
        "flex flex-col divide-y"
      )}
    >
      {posts.map((notice) => (
        <li key={notice.slug}>
          <Link
            href={`/community/${category}/${notice.slug}`}
            className=" flex justify-between py-2 gap-2"
          >
            <p className="text-sm">{notice.title}</p>
            <p className="text-nowrap text-xs">{notice.date}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
