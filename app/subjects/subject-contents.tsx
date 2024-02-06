import { StaticImageData } from "next/image";
import CategoryContents from "./category-contents";

export default function SubjectContents({
  categories,
}: {
  categories: {
    categoryName: string;
    image: StaticImageData;
    imageDescription: string;
    intro: string;
    description: string;
    tags: string[];
  }[];
}) {
  return (
    <div className="pt-8">
      <ul className="space-y-10">
        {categories.map((element) => (
          <li
            key={element.categoryName}
            className="rounded-xl ring-1 ring-primary"
            id={element.categoryName}
          >
            <CategoryContents {...element} />
          </li>
        ))}
      </ul>
    </div>
  );
}
