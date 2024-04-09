import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { NAME } from "@/constants/general-info";
import { MORES } from "@/constants/home-more-section-info";
import Image from "next/image";
import Link from "next/link";

export default function MoreSection() {
  return (
    <div className="border-t">
      <Container>
        <div className="flex flex-col items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <p className="text-primary text-xl font-bold">
              {NAME}와 함께하세요!
            </p>
            <p className="text-slate-700 text-3xl font-bold">
              Dontan Animal Medical Center
            </p>
            <p className="text-slate-400">
              {NAME}은 보호자님과 환자만을 생각합니다.
            </p>
          </div>

          <div className="my-10">
            <ul className="flex gap-10 justify-between">
              {MORES.map((more) => (
                <li
                  key={more.title}
                  className="flex flex-col items-center w-1/3"
                >
                  <div className="flex flex-col items-center flex-1">
                    <Image
                      className="rounded-full ring-8 ring-slate-300"
                      alt="more section image"
                      src={more.image}
                      width={280}
                      height={280}
                    />
                    <p className="text-xl mt-8 font-bold">{more.title}</p>
                    <p className="mt-3 text-slate-500 leading-6 text-center">
                      {more.subtitle}
                    </p>
                  </div>

                  <Button
                    asChild
                    className="mt-5 border-primary text-xs font-bold text-primary hover:text-primary hover:bg-olive-drab-100"
                    variant="outline"
                  >
                    <Link href={more.href} className="w-24">
                      MORE
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
