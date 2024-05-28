import { type IconType } from "react-icons/lib";

export default function InfoCard({
  title,
  icon: Icon,
  description,
}: {
  title: string;
  icon: IconType;
  description: React.ReactNode;
}) {
  return (
    <li className="flex flex-col items-center">
      <div className="w-[180px] h-[180px] flex items-center justify-center  rounded-full border border-primary mb-[60px] ">
        <Icon size={60} className="text-primary" />
      </div>

      <h3 className="text-3xl font-bold text-primary border-b pb-4 text-center mb-10">
        {title}
      </h3>

      <div className="text-lg">{description}</div>
    </li>
  );
}
