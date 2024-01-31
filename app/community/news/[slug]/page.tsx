import { getPostsMetadata } from "@/lib/utils";
import Post from "../../post";

export function generateStaticParams() {
  const posts = getPostsMetadata("markdown/news/");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SingleNewsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <Post filePath="markdown/news" slug={slug} route="news" />;
}
