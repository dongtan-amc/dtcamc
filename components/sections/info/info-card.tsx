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
      className="flex flex-1 flex-col items-center"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="mb-[60px] flex h-[160px] w-[160px] items-center justify-center rounded-full border border-primary">
        <Icon size={60} className="text-primary" />
      </div>

      <h3 className="mb-10 border-b pb-4 text-center text-3xl font-bold text-primary">
        {title}
      </h3>

      <div className="text-lg">{description}</div>
    </motion.li>
  );
}
