"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

import landing1 from "@/public/landing/landing1.png";
import landing2 from "@/public/landing/landing2.png";
import landing3 from "@/public/landing/landing3.png";
import Image from "next/image";

const LANDING_IMAGES = [landing1, landing2, landing3];

export function LandingCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[plugin.current]}
      className="w-[500px] h-[500px] absolute top-[120px] right-10 z-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {LANDING_IMAGES.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt="landing image" width={500} height={500} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
