import { getPostsMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Post from "../../post";

export function generateStaticParams() {
  const posts = getPostsMetadata("markdown/notice/");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = ({
  params: { slug },
}: {
  params: { slug: string };
}): Metadata => {
  const posts = getPostsMetadata("markdown/notice/");
  const selectedPost = posts.find((post) => post.slug === slug);
  return {
    title: {
      absolute: selectedPost?.title,
    },
  };
};

export default function SingleNoticePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <Post filePath="markdown/notice" slug={slug} route="notice" />;
}
