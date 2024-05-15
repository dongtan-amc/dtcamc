"use client";

import Image from "next/image";
import logo from "@/public/main-logo.png";
import { motion } from "framer-motion";

export default function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-10 pt-[130px] pb-[60px]">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <Image unoptimized alt="logo" src={logo} width={64} height={64} />
      </motion.div>

      <motion.h2
        className="text-[44px] text-center leading-[50px]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
      >
        {children}
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: false }}
        className="text-[20px] text-center"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
