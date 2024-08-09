import { CarouselItem } from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

export default function CarouselCard({
  image,
  index,
}: {
  image: StaticImageData;
  index: number;
}) {
  return (
    <CarouselItem className="select-none">
      <Image
        alt={`carousel image ${index + 1}`}
        src={image}
        placeholder="blur"
        priority
        sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
      />
    </CarouselItem>
  );
}
