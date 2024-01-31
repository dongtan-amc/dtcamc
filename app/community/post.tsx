import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { getPostContents, getPostMetadata } from "@/lib/utils";
import profile from "@/public/main-logo.png";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";

export default function Post({
  slug,
  filePath,
  route,
}: {
  slug: string;
  filePath: string;
  route: string;
}) {
  const contents = getPostContents(slug, filePath);
  const metadata = getPostMetadata(slug, filePath);
  return (
    <div className="pt-10 pb-12">
      <Container>
        <div className="border-b pb-4 px-4">
          <div className="flex items justify-between items-center relative">
            <div className="flex items-center gap-2">
              <Image alt="profile" src={profile} unoptimized width={40} />
              <p>{metadata.author}</p>
            </div>

            <h2 className="font-bold text-xl text-center absolute w-full flex justify-center">
              {metadata.title}
            </h2>

            <div className="flex items-center gap-4 z-10">
              <p>작성일 : {metadata.date}</p>
              <Link href={`/community/${route}`}>
                <Button>목록</Button>
              </Link>
            </div>
          </div>
        </div>

        <article className="prose pt-10 max-w-7xl">
          <Markdown>{contents.content}</Markdown>
        </article>
      </Container>
    </div>
  );
}
