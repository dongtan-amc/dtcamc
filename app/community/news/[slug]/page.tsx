import { getPostsMetadata } from "@/lib/utils";
import Post from "../../post";
import { Metadata } from "next";

export function generateStaticParams() {
  const posts = getPostsMetadata("markdown/news/");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = ({
  params: { slug },
}: {
  params: { slug: string };
}): Metadata => {
  const posts = getPostsMetadata("markdown/news/");
  const selectedPost = posts.find((post) => post.slug === slug);
  return {
    title: {
      absolute: selectedPost?.title,
    },
  };
};

export default function SingleNewsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <Post filePath="markdown/news" slug={slug} route="news" />;
}
