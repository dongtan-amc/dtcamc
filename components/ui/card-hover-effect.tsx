"use client";

import { cn } from "@/lib/utils";
import { PlusIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    image: string | null;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {items.map((item, index) => (
        <Link
          target={index !== 7 ? "_blank" : "_parent"}
          href={item.link}
          key={item.link}
          className="relative group block p-2 lg:p-4"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-olive-drab-300 block rounded-2xl "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card className="relative">
            {item.image ? (
              <Image
                alt={item.title}
                src={item.image}
                fill
                className="object-center"
              />
            ) : (
              <div className="bg-slate-950 text-slate-50 flex justify-center items-center h-full w-full text-lg font-bold">
                <p>케이스 더보기</p>
              </div>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-[150px] md:h-[240px] lg:h-[280px] w-full overflow-hidden z-10 ring ring-slate-950",
        className
      )}
    >
      {children}
    </div>
  );
};
