import Image, { type StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Container from "../common/container";
import Link from "next/link";

export default function SectionImage({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) {
  return (
    <Container>
      <div className="relative mt-10 h-[480px] w-full overflow-hidden rounded-xl">
        <Image
          alt="section image"
          src={image}
          className="object-cover"
          fill
          placeholder="blur"
        />

        <div className="absolute bottom-10 left-14 flex flex-col gap-8 text-white">
          <div>
            <h4 className="pb-2 text-5xl font-bold leading-[60px]">{title}</h4>
          </div>
          <Button
            asChild
            className="w-32 rounded-xl bg-[#A3C433] tracking-wide text-black"
          >
            <Link href="#info" className="font-bold">
              상담하기
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
