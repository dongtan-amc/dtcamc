"use client";

import Container from "@/components/common/container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HERO_IMAGES } from "@/constants/hero-images";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LandingCarousel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

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
    <div className=" flex justify-end">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full overflow-hidden flex items-center"
      >
        <CarouselContent>
          {HERO_IMAGES.map((image) => (
            <CarouselItem key={image.title}>
              <div className="relative h-[30vh] md:h-[70vh] flex justify-end">
                <div className="bg-gradient-to-r from-black/40 via-black/10 to-black/10 absolute inset-0 z-20" />
                {/* text
                <div className="z-40 absolute top-1/3 left-[20%] text-white">
                  <p className="pb-5">Dongtan City Animal Medical Center</p>
                  <p className="text-3xl pb-8">{image.title}</p>
                  <p>{image.subTitle}</p>
                </div> */}
                {/* 이미지 */}
                <Image
                  src={image.src}
                  alt="landing images"
                  // className="w-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 슬라이드 버튼 */}
        <div className="absolute top-[10%] right-[10%] md:block hidden">
          <CarouselPrevious className="bg-transparent rounded-md text-white w-10 h-10" />
          <CarouselNext className="bg-transparent rounded-md text-white w-10 h-10" />
        </div>

        <div className="absolute bottom-[5%] left-[calc(50%-30px)] text-white flex gap-4">
          {Array.from({ length: count }).map((element, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full bg-white ring-0",
                current === index + 1 && "ring-primary ring-2 bg-transparent"
              )}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
