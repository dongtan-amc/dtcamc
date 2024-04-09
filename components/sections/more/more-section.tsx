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
            <p className="text-primary text-base md:text-xl font-bold">
              {NAME}와 함께하세요!
            </p>
            <p className="text-slate-700 text-lg md:text-3xl font-bold">
              Dontan Animal Medical Center
            </p>
            <p className="text-slate-400 text-xs md:text-base">
              동탄시티동물의료센터는 오직 환자만을 생각합니다.
            </p>
          </div>

          <div className="my-10 flex flex-col md:flex-row gap-10">
            {MORES.map((more) => (
              <div
                className="flex flex-row md:flex-col items-center flex-1 text-left md:text-center"
                key={more.title}
              >
                <Image
                  className="rounded-full ring-8 ring-slate-300 w-[100px] md:w-auto"
                  alt="more section image"
                  src={more.image}
                  width={280}
                  height={280}
                />

                <div className="pl-5 md:pl-0">
                  <p className="text-sm md:text-xl mt-0 md:mt-8 font-bold">
                    {more.title}
                  </p>
                  <p className="mt-1 md:mt-3 text-slate-500 leading-6 text-xs md:text-base">
                    {more.subtitle}
                  </p>
                  <Button
                    asChild
                    className="mt-1 md:mt-5 border-primary text-xs font-bold text-primary hover:text-primary hover:bg-olive-drab-100"
                    variant="outline"
                  >
                    <Link
                      href={more.href}
                      className="text-xs md:text-base w-12 md:w-24"
                    >
                      MORE
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
