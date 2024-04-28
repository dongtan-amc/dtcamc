import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { HOME_SUBJECTS } from "@/constants/home-subjects";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function SubjectSection() {
  return (
    <div className="bg_gradient py-10 relative">
      <Container>
        <ul className="grid grid-cols-1 md:grid-cols-2 justify-between bg-white relative z-20">
          {HOME_SUBJECTS.map((subject, index) => (
            <li
              key={subject.title}
              className={cn(
                "items-center flex",
                index === 2 || index === 3
                  ? "md:flex-row"
                  : "md:flex-row-reverse",
                index === 1 || index === 3 ? "flex-row" : "flex-row-reverse"
              )}
            >
              <div className="relative w-1/2">
                <Image
                  placeholder="blur"
                  alt="more section image"
                  src={subject.image}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-1/2 p-1 md:p-4">
                <p className="text-sm md:text-2xl mt-0 md:mt-8 font-bold">
                  {subject.title}
                </p>
                <p className="mt-1 md:mt-3 text-slate-500 leading-6 text-center text-xs md:text-sm">
                  {subject.subtitle}
                </p>
                <Button
                  asChild
                  size="icon"
                  className="mt-2 md:mt-5 border-primary rounded-full font-bold text-primary hover:text-primary hover:bg-olive-drab-100"
                  variant="outline"
                >
                  <Link href={subject.href}>
                    <PlusIcon />
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
