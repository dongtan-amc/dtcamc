import fs from "fs";
import matter from "gray-matter";

// 해당 경로에 있는 포스트들의 정보를 추출
// 포스트들의 slug 배열 추출할때 사용
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

//  개별 포스트 내용 추출
export const getPostContents = (slug: string, folderPath: string) => {
    const file = `${folderPath}/${slug}.md`;

    const content = fs.readFileSync(file, "utf-8");

    const matterResult = matter(content);

    return matterResult;
};
