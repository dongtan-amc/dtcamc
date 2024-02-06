import { CASES } from "@/constants/cases";
import useDebounce from "@/hooks/useDebouce";
import naverBlog from "@/public/icons/navar-blog.png";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import NoResult from "./no-result";

export default function CasesGrid({
  searchKeyword,
}: {
  searchKeyword: string;
}) {
  const debouncedSearchKeyword = useDebounce(searchKeyword, 500);

  const filteredCase = useMemo(
    () =>
      CASES.filter((singleCase) =>
        singleCase.title
          .toUpperCase()
          .includes(debouncedSearchKeyword.toUpperCase())
      ),
    [debouncedSearchKeyword]
  );

  if (filteredCase.length === 0) {
    return <NoResult />;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-12 pt-10 gap-12">
      {filteredCase.map((singleCase) => (
        <li key={singleCase.link}>
          <Link
            href={singleCase.link}
            target="_blank"
            className="flex justify-center"
          >
            <div>
              <Image
                alt={`${singleCase.title} image`}
                src={singleCase.image}
                width={290}
                height={290}
                className="rounded-lg"
              />

              <div className="flex items-center gap-2 pt-2">
                <Image alt="naver blog" src={naverBlog} width={24} />
                <h2 className="text-lg font-bold text-slate-950">
                  {singleCase.title}
                </h2>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
