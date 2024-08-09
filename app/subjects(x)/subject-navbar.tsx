import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function SubjectNavbar({
  setCategory,
  categories,
  subjectRoute,
}: {
  setCategory: Dispatch<SetStateAction<string>>;
  categories: {
    categoryName: string;
    image: StaticImageData;
    intro: string;
    description: string;
    tags: string[];
  }[];
  subjectRoute: string;
}) {
  return (
    <ul className="flex gap-4 overflow-auto scrollbar-hide pb-2">
      {categories.map((el) => (
        <li key={el.categoryName}>
          <Link href={`/subjects${subjectRoute}/#${el.categoryName}`}>
            <Button
              onClick={() => setCategory(el.categoryName)}
              className="bg-olive-drab-100 text-olive-drab-700 hover:bg-olive-drab-100/80 px-4 py-2 rounded-full font-bold"
            >
              {el.categoryName}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
