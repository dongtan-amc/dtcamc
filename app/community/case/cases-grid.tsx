import { CASES } from "@/constants/cases";
import Image from "next/image";
import Link from "next/link";
import naverBlog from "@/public/icons/navar-blog.png";

export default function CasesGrid() {
  return (
    <ul className="grid grid-cols-4 pt-10 pb-12 gap-10">
      {CASES.map((singleCase) => (
        <li key={singleCase.link}>
          <Link href={singleCase.link}>
            <div>
              <Image
                alt={`${singleCase.title} image`}
                src={singleCase.image}
                width={290}
                height={290}
              />
              <div className="flex items-center gap-2 pt-2 pl-2">
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
