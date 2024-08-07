"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  children,
  subtitle,
  align = "center",
  className = "",
}: {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={`relative z-30 flex flex-col gap-3 py-8 sm:gap-4 sm:py-12 ${alignmentClasses[align]} ${className}`}
    >
      <motion.h2
        className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>

      {subtitle && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg"
        >
          {subtitle}
        </motion.div>
      )}
    </div>
  );
}
