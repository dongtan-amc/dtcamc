import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";

export default function CategoryContents({
  categoryName,
  image,
  imageDescription,
  intro,
  description,
  tags,
}: {
  categoryName: string;
  image: StaticImageData;
  imageDescription: string;
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
      <div className="break-keep w-full">
        <div className="relative h-[440px] w-full rounded-lg overflow-hidden">
          <Image
            alt={categoryName}
            src={image}
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="text-white absolute bottom-0 right-0 rounded-tl-lg bg-slate-950 px-2 py-1">
            {imageDescription}
          </div>
        </div>
        <div className="pt-4">
          <p className="font-bold text-lg bg-olive-drab-100 px-1 inline-block tracking-wide">
            {intro}
          </p>
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
