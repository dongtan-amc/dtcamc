import React from "react";
import { IconType } from "react-icons/lib";

export default function Title({
  title,
  Icon,
  description,
  tags,
}: {
  title: string;
  Icon: IconType;
  description: React.ReactNode;
  tags: { label: string; hash: string }[];
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center bg-olive-drab-400 primary w-10 h-10 justify-center rounded-full">
        <Icon className="text-white" size={28} />
      </div>

      <h2 className="text-3xl font-bold">{title}</h2>

      <p className="leading-loose lg:max-w-xl text-center lg:text-left">
        {description}
      </p>

      <div className="pt-4 pb-20">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {tags.map((tag) => (
            <li
              key={tag.label}
              className="bg-olive-drab-400 text-center px-3 py-1 rounded-full text-white text-sm"
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
