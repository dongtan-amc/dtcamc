"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import groomning1 from "@/public/grooming/grooming1.png";
import groomning2 from "@/public/grooming/grooming2.jpeg";
import groomning3 from "@/public/grooming/grooming3.jpeg";
import groomning4 from "@/public/grooming/grooming4.jpeg";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const GROOMING_IMAGES = [groomning1, groomning2, groomning3, groomning4];

export default function GroomingCarousel() {
  return (
    <Carousel
      className="md:w-1/2"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {GROOMING_IMAGES.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt={`grooming image${index}`}
              placeholder="blur"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
}
