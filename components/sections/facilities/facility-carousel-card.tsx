import { CarouselItem } from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

export default function FacilityCarouselCard({
  image,
}: {
  image: StaticImageData;
}) {
  return (
    <CarouselItem className="relative h-[200px] w-full basis-1/2 select-none xl:h-[400px] xl:basis-1/4">
      <Image
        alt="carousel image"
        src={image}
        placeholder="blur"
        className="object-cover"
        fill
      />
    </CarouselItem>
  );
}
