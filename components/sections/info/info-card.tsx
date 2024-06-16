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
      className="flex flex-col items-center flex-1"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="w-[180px] h-[180px] flex items-center justify-center  rounded-full border border-primary mb-[60px] ">
        <Icon size={60} className="text-primary" />
      </div>

      <h3 className="text-3xl font-bold text-primary border-b pb-4 text-center mb-10">
        {title}
      </h3>

      <div className="text-lg">{description}</div>
    </motion.li>
  );
}
