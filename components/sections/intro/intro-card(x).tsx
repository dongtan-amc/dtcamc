import Container from "@/components/common/container";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";

export default function IntroCard({
  index,
  image,
  title,
  subtitle,
}: {
  index: number;
  image: StaticImageData;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) {
  return (
    <li>
      <Container>
        <div
          className={cn(
            "flex h-[385px] w-full items-center justify-between rounded-[80px] p-4 px-20 text-white",
            index % 2 === 0
              ? "flex-row bg-olive-drab-500"
              : "flex-row-reverse bg-olive-drab-800",
          )}
        >
          <div className="w-1/2 text-center">
            <p className="mb-[25px] text-[33px] font-bold">{title}</p>
            <p className="text-[18px]">{subtitle}</p>
          </div>

          <div className="flex w-1/2 justify-center">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full">
              <Image alt="image" src={image} className="object-cover" fill />
            </div>
          </div>
        </div>
      </Container>
    </li>
  );
}
