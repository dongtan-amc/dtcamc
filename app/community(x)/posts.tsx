import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getPostsMetadata } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";

export default function Posts({
  type,
  folderPath,
}: {
  type: "notice" | "news" | "case";
  folderPath: string;
}) {
  // 마크다운 파일들의 메타정보들을 가져옴
  const postsMetadata = getPostsMetadata(folderPath);
  const importantPosts = useMemo(
    () => postsMetadata.filter((post) => post.important),
    [postsMetadata]
  );
  const normalPosts = useMemo(
    () => postsMetadata.filter((post) => !post.important),
    [postsMetadata]
  );

  return (
    <div className="min-h-[50vh]">
      <Table className="mt-10 mb-12">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-primary font-bold text-nowrap">
              번호
            </TableHead>
            <TableHead className="text-center text-primary font-bold text-nowrap">
              제목
            </TableHead>
            <TableHead className="text-center text-primary font-bold text-nowrap">
              작성자
            </TableHead>
            <TableHead className="text-center text-primary font-bold text-nowrap">
              등록일
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {importantPosts.map((post) => (
            <TableRow key={post.title} className="font-bold bg-olive-drab-50">
              <TableCell className="text-center">중요</TableCell>
              <TableCell>
                <Link href={`${type}/${post.slug}`}>{post.title}</Link>
              </TableCell>
              <TableCell className="text-center">{post.author}</TableCell>
              <TableCell className="text-center">{post.date}</TableCell>
            </TableRow>
          ))}
          {normalPosts.map((post, index) => (
            <TableRow key={post.title}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell>
                <Link href={`${type}/${post.slug}`}>{post.title}</Link>
              </TableCell>
              <TableCell className="text-center">{post.author}</TableCell>
              <TableCell className="text-center text-nowrap">
                {post.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
