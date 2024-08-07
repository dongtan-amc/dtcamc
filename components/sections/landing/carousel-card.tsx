import { CarouselItem } from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

export default function CarouselCard({ image }: { image: StaticImageData }) {
  return (
    <CarouselItem className="select-none">
      <Image
        alt="carousel image"
        src={image}
        placeholder="blur"
        className={`rounded-2xl`}
      />
    </CarouselItem>
  );
}
