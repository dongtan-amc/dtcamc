"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-6 py-[60px] z-30 relative">
      <motion.h2
        className="text-center text-4xl text-black font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-xl text-center text-slate-700"
      >
        {subtitle}
      </motion.div>
    </div>
  );
}
