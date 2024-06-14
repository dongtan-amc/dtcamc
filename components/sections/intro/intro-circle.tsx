import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons/lib";

export default function IntroCircle({
  title,
  icon: Icon,
  index,
}: {
  title: React.ReactNode;
  icon: IconType;
  index: number;
}) {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.5 * index }}
      viewport={{ once: false }}
      className="absolute w-[320px] h-[320px] bg-primary/10 rounded-full top-0 left-0 flex items-center flex-col pt-24"
      style={{ left: `${index * 280}px` }}
    >
      <Icon size={80} className="text-primary" />
      <p className="pt-4 font-bold text-[21px] text-center">{title}</p>
    </motion.li>
  );
}
