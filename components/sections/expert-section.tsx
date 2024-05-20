import Image, { type StaticImageData } from "next/image";
import Container from "../common/container";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function ExpertSection({
  text,
  points,
  image,
}: {
  title: string;
  text: React.ReactNode;
  points: string[];
  image: StaticImageData;
}) {
  return (
    <Container>
      <div className="relative">
        <div className="flex items-end">
          <div className="w-3/5">
            <div className="text-3xl leading-[44px] bg-olive-drab-50 p-5 rounded-2xl">
              {text}
            </div>

            <ul className="mt-10">
              {points.map((point, index) => (
                <li
                  key={point}
                  className={cn(
                    `bg-olive-drab-${(index + 5) * 100}`,
                    "text-2xl  px-3 rounded-full text-white mb-3 flex gap-2 items-center py-2"
                  )}
                >
                  <div className="bg-white text-primary flex items-center justify-center rounded-full w-10 h-10">
                    <CheckIcon className="w-10 h-10" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[600px] h-[600px] overflow-hidden rounded-full flex-shrink-0 absolute -z-10 right-0">
            <Image
              fill
              alt="정형외과 이미지"
              src={image}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
