import { Button } from "@/components/ui/button";
import { cn, getPostsMetadata } from "@/lib/utils";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function CommunityBoard() {
  const news = getPostsMetadata("markdown/news/").slice(0, 5);
  const notices = getPostsMetadata("markdown/notice/").slice(0, 5);

  return (
    <div className="flex w-full pt-4 rounded-2xl">
      <div className="bg-olive-drab-900 flex-1 p-10 pb-24 rounded-l-xl">
        <div className="text-2xl flex items-center justify-between pb-10 text-slate-50">
          <h2 className="text-2xl font-bold">공지사항</h2>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full text-olive-drab-900 hover:text-white hover:bg-olive-drab-900 border-2"
          >
            <PlusIcon />
          </Button>
        </div>
        <Posts posts={notices} category="notice" theme="primary" />
      </div>

      <div className="bg-white flex-1 p-10 text-olive-drab-900 rounded-r-xl">
        <div className="text-2xl flex items-center justify-between pb-10 ">
          <h2 className="text-2xl font-bold">병원소식</h2>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-olive-drab-900 text-white hover:text-olive-drab-900 hover:bg-white border-2 border-olive-drab-800"
          >
            <PlusIcon />
          </Button>
        </div>
        <Posts posts={news} category="news" theme="light" />
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
        "flex flex-col gap-4 divide-y"
      )}
    >
      {posts.map((notice) => (
        <li key={notice.slug}>
          <Link
            href={`/community/${category}/${notice.slug}`}
            className="flex items-center justify-between mt-4 py-2"
          >
            <p>{notice.title}</p>
            <p>{notice.date}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
