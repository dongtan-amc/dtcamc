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
    [postsMetadata],
  );
  const normalPosts = useMemo(
    () => postsMetadata.filter((post) => !post.important),
    [postsMetadata],
  );

  return (
    <div className="min-h-[50vh]">
      <Table className="mb-12 mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="text-nowrap text-center font-bold text-primary">
              번호
            </TableHead>
            <TableHead className="text-nowrap text-center font-bold text-primary">
              제목
            </TableHead>
            <TableHead className="text-nowrap text-center font-bold text-primary">
              작성자
            </TableHead>
            <TableHead className="text-nowrap text-center font-bold text-primary">
              등록일
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {importantPosts.map((post) => (
            <TableRow key={post.title} className="bg-olive-drab-50 font-bold">
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
              <TableCell className="text-nowrap text-center">
                {post.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
