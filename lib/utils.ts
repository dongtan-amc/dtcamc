import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import fs from "fs";
import matter from "gray-matter";

export const getPostsFileNames = (folderPath: string): string[] => {
  const files = fs.readdirSync(folderPath);
  const markdowns = files.filter((file) => file.endsWith(".md"));
  const slugs = markdowns.map((file) => file.replace(".md", ""));

  return slugs;
};

export const getPostContents = (slug: string, folderPath: string) => {
  const file = `${folderPath}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const getPostsMetadata = (folderPath: string) => {
  const files = fs.readdirSync(folderPath);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postsMetadata = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folderPath}${fileName}`, "utf-8");
    const {
      data: { title, date, author, important },
    } = matter(fileContents);
    return {
      title,
      date,
      author,
      important,
      slug: fileName.replace(".md", ""),
    };
  });
  return postsMetadata;
};

export const getPostMetadata = (slug: string, folderPath: string) => {
  const files = fs.readdirSync(folderPath);

  const fileContents = fs.readFileSync(`${folderPath}/${slug}.md`, "utf-8");

  const {
    data: { title, date, author },
  } = matter(fileContents);

  return {
    title,
    date,
    author,
  };
};
