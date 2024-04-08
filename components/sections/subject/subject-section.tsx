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
        <ul className="grid grid-cols-2 justify-between bg-white relative z-20">
          {HOME_SUBJECTS.map((subject, index) => (
            <li
              key={subject.title}
              className={cn(
                "items-center",
                index === 2 || index === 3 ? "flex" : "flex flex-row-reverse"
              )}
            >
              <Image
                alt="more section image"
                src={subject.image}
                width={256}
                height={256}
              />
              <div className="flex flex-col items-center justify-center w-[256px] h-[256px] p-4">
                <p className="text-2xl mt-8 font-bold">{subject.title}</p>
                <p className="mt-3 text-slate-500 leading-6 text-center text-sm">
                  {subject.subtitle}
                </p>
                <Button
                  asChild
                  size="icon"
                  className="mt-5 border-primary rounded-full font-bold text-primary hover:text-primary hover:bg-olive-drab-100"
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
