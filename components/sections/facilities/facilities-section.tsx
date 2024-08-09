"use client";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import image4 from "@/public/photo/cat-room2.jpeg";
import image3 from "@/public/photo/consulting-room.jpeg";
import image2 from "@/public/photo/entrance.jpeg";
import image5 from "@/public/photo/icu.jpeg";
import image6 from "@/public/photo/icu3.jpeg";
import image7 from "@/public/photo/operation-room1.jpeg";
import image1 from "@/public/photo/reception.jpeg";
import Autoplay from "embla-carousel-autoplay";
import FacilityCarouselCard from "./facility-carousel-card";

const CAROUSEL_ITEMS = [image1, image2, image3, image4, image5, image6, image7];
export default function FacilitiesSection() {
  return (
    <Carousel
      className="relative w-full"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {CAROUSEL_ITEMS.map((item, index) => (
          <FacilityCarouselCard key={index} image={item} />
        ))}
      </CarouselContent>
      <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 transform space-x-4"></div>
    </Carousel>
  );
}
