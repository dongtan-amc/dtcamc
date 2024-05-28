"use client";

import { CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function CarouselCard({
  title,
  subtitle,
  tags,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  tags: { label: string; hash: string }[];
}) {
  return (
    <CarouselItem className="p-5 select-none">
      <div className="text-white flex flex-col items-center text-center gap-12">
        <motion.h2
          className="text-[40px] font-bold"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: false }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: false }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex gap-5"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: false }}
        >
          {tags.map((tag) => (
            <motion.div key={tag.label}>
              <Link
                href={`#${tag.hash}`}
                className="border border-drab-400 text-center px-4 py-2"
              >
                # {tag.label} &gt;
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </CarouselItem>
  );
}
