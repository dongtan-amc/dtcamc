"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import slide1 from "@/public/landing/1.png";
import slide2 from "@/public/landing/2.png";
import slide3 from "@/public/landing/3.png";
import slide4 from "@/public/landing/4.png";
import slide5 from "@/public/landing/5.png";
import slide6 from "@/public/landing/6.png";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import CarouselCard from "./carousel-card";

const CAROUSEL_ITEMS = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function LandingCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <Carousel
      setApi={setApi}
      className="relative w-full"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselCard key={index} image={item} />
        ))}
      </CarouselContent>
      <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 transform space-x-4">
        {CAROUSEL_ITEMS.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full transition-colors duration-200 ${
              current === index + 1 ? "bg-primary" : "bg-gray-200"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </Carousel>
  );
}
