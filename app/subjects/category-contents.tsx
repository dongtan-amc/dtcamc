import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";

export default function CategoryContents({
  categoryName,
  image,
  intro,
  description,
  tags,
}: {
  categoryName: string;
  image: StaticImageData;
  intro: string;
  description: string;
  tags: string[];
}) {
  const formattedDescription = { __html: description };

  return (
    <div className="flex gap-60 p-10">
      <h2 className="text-3xl font-bold shrink-0 text-primary">
        {categoryName}
      </h2>
      <div className="break-keep">
        <div className="relative bg-slate-200 h-[400px] w-full">
          <Image
            alt={categoryName}
            src={image}
            fill
            className="object-contain"
          />
        </div>
        <div className="pt-4">
          <p className="font-bold text-primary pb-6 text-xl">{intro}</p>
          <p
            dangerouslySetInnerHTML={formattedDescription}
            className="leading-relaxed"
          />
        </div>
        <ul className="flex gap-2 pt-6">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge className="bg-slate-950 hover:bg-slate-800 text-base">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
