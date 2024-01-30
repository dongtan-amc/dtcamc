import { StaticImageData } from "next/image";
import CategoryContents from "./category-contents";

export default function SubjectContents({
  category,
  categories,
}: {
  category: string;
  categories: {
    categoryName: string;
    image: StaticImageData;
    intro: string;
    description: string;
    tags: string[];
  }[];
}) {
  return (
    <div className="pt-10">
      <ul className="space-y-10">
        {categories.map((element) => (
          <li
            key={element.categoryName}
            className=" bg-golden-dream-50-50 rounded-xl ring-1 ring-primary"
            id={element.categoryName}
          >
            <CategoryContents {...element} />
          </li>
        ))}
      </ul>
    </div>
  );
}
