"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GROOMING_IMAGES } from "@/constants/grooming-images";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import CarouselIndex from "../introduction/facility/carousel-index";

export default function GroomingCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="md:w-1/2 overflow-hidden"
      plugins={[
        Autoplay({
          delay: 2500,
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
      <CarouselPrevious className="absolute left-10 hidden sm:flex" />
      <CarouselNext className="absolute right-10 hidden sm:flex" />
      <CarouselIndex count={count} current={current} setCurrent={setCurrent} />
    </Carousel>
  );
}
