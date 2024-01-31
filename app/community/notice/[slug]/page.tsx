import { getPostsMetadata } from "@/lib/utils";
import Post from "../../post";

export function generateStaticParams() {
  const posts = getPostsMetadata("markdown/notice/");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SingleNoticePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <Post filePath="markdown/notice" slug={slug} route="notice" />;
}
