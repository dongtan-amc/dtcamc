import Image, { type StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Container from "../common/container";
import Link from "next/link";
import { KAKAO } from "@/constants/general-info";

export default function SectionImage({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) {
  return (
    <Container>
      <div className="relative h-[240px] w-full overflow-hidden rounded-xl md:h-[480px]">
        <Image
          alt="section image"
          src={image}
          className="object-cover"
          fill
          sizes="(min-width: 1360px) 1280px, calc(97.31vw - 24px)"
          placeholder="blur"
        />

        <div className="absolute bottom-5 left-5 text-white md:bottom-10 md:left-10">
          <h4 className="text-2xl font-bold xl:text-5xl">{title}</h4>
          <Button
            asChild
            className="mt-2 rounded-full bg-[#A3C433] text-base text-white md:mt-4 md:text-lg"
          >
            <Link href={KAKAO} target="_blank" className="font-bold">
              상담하기
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
