"use client";

import { INFINITE_IMAGES } from "@/constants/infinite-cards";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InfiniteCards() {
  return (
    <div className="bg-slate-100">
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent" />

        <div className="flex items-center mb-8">
          <FacilityList list={INFINITE_IMAGES.top} duration={0} />
          <FacilityList list={INFINITE_IMAGES.top} duration={0} />
          <FacilityList list={INFINITE_IMAGES.top} duration={0} />
        </div>
        <div className="flex items-center mb-4">
          <FacilityList list={INFINITE_IMAGES.middle} duration={0} reverse />
          <FacilityList list={INFINITE_IMAGES.middle} duration={0} reverse />
          <FacilityList list={INFINITE_IMAGES.middle} duration={0} reverse />
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent" />
      </div>
    </div>
  );
}

const FacilityList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof INFINITE_IMAGES.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 px-4"
    >
      {list.map((card) => {
        return (
          <div
            key={card.id}
            className="shrink-0 w-[250px] h-[150px] lg:w-[500px] lg:h-[300px] rounded-lg overflow-hidden relative"
          >
            <Image
              alt="facility image"
              src={card.img}
              className="object-cover"
              fill
              placeholder="blur"
              sizes="(min-width: 1040px) 500px, 250px"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
