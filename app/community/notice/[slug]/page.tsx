import Post from "../../post";

export default function SingleNoticePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <Post filePath="markdown/notice" slug={slug} route="notice" />;
}
