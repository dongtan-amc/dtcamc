import { motion } from "framer-motion";
import { type IconType } from "react-icons/lib";

export default function InfoCard({
  title,
  icon: Icon,
  description,
  index,
}: {
  title: string;
  icon: IconType;
  description: React.ReactNode;
  index: number;
}) {
  return (
    <motion.li
      className="flex flex-1 flex-col items-start md:items-center"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="mb-[60px] hidden h-[160px] w-[160px] items-center justify-center rounded-full border border-primary md:flex">
        <Icon size={60} className="text-primary" />
      </div>

      <h3 className="mb-4 border-b pb-1 text-xl font-bold text-primary md:mb-10 md:pb-4 md:text-3xl">
        {title}
      </h3>

      <div className="text-lg">{description}</div>
    </motion.li>
  );
}
