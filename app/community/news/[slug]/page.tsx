import Post from "../../post";

export default function SingleNewsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <Post filePath="markdown/news" slug={slug} route="news" />;
}
