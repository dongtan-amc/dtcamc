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
      <div className="relative h-[480px] w-full overflow-hidden rounded-xl">
        <Image
          alt="section image"
          src={image}
          className="object-cover"
          fill
          placeholder="blur"
        />

        <div className="absolute bottom-5 left-5 flex flex-col text-white md:bottom-10 md:left-10 md:gap-4">
          <div>
            <h4 className="text-3xl font-bold leading-[60px] xl:text-5xl">
              {title}
            </h4>
          </div>
          <Button
            asChild
            className="w-32 rounded-md bg-[#A3C433] text-lg text-white"
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
