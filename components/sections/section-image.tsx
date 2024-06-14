import Image, { type StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Container from "../common/container";
import Link from "next/link";

export default function SectionImage({
  image,
  title,
  subtitle,
}: {
  image: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <Container>
      <div className="relative w-full h-[440px] overflow-hidden rounded-xl mt-10 bg-slate-800">
        <Image alt="section image" src={image} className="object-cover" fill />

        <div className="text-white absolute bottom-10 left-14 flex flex-col gap-8">
          <div>
            <h4 className="text-5xl font-bold pb-2 leading-[60px]">{title}</h4>
            <p className="text-lg">{subtitle}</p>
          </div>
          <Button
            asChild
            className="text-black bg-[#A3C433] w-32 rounded-xl tracking-wide"
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
