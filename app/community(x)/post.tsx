import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { getPostContents, getPostsMetadata } from "@/lib/utils";
import logo from "@/public/main-logo.png";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Post({
  slug,
  folderPath,
  route,
}: {
  slug: string;
  folderPath: string;
  route: string;
}) {
  // 해당 경로에 있는 모든 파일들 slug의 배열
  const postsMetadata = getPostsMetadata(folderPath);
  const slugs = postsMetadata.map((post) => post.slug);

  // 현재 경로(slug)가 slugs에 포함되지 않은 경우 not found page로 이동
  if (!slugs.includes(slug)) {
    notFound();
  }

  const contents = getPostContents(slug, folderPath);

  return (
    <div className="pt-10 pb-12">
      <Container>
        <h2 className="font-bold text-xl text-center w-full flex justify-center pb-4">
          {contents.data.title}
        </h2>
        <div className="border-t pt-2 px-4">
          <div className="flex items justify-between items-center relative">
            <div className="flex items-center gap-2">
              <Image alt="profile" src={logo} unoptimized width={40} />
              <p>{contents.data.author}</p>
            </div>

            <div className="flex items-center gap-4 z-10">
              <p>{contents.data.date}</p>
              <Link href={`/community/${route}`}>
                <Button size="icon" variant="outline">
                  <HamburgerMenuIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <article className="prose max-w-7xl min-h-[50vh] py-10">
          <Markdown>{contents.content}</Markdown>
        </article>
      </Container>
    </div>
  );
}
