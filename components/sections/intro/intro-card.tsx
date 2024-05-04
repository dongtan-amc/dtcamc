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
            "text-white p-4 rounded-[80px] w-full h-[385px] flex justify-between px-20 items-center",
            index % 2 === 0
              ? "bg-olive-drab-500 flex-row"
              : "bg-olive-drab-800 flex-row-reverse"
          )}
        >
          <div className="w-1/2 text-center">
            <p className="text-[33px] font-bold mb-[25px]">{title}</p>
            <p className="text-[18px]">{subtitle}</p>
          </div>

          <div className="w-1/2 flex justify-center">
            <div className="w-[300px] h-[300px] relative  rounded-full overflow-hidden">
              <Image alt="image" src={image} className="object-cover" fill />
            </div>
          </div>
        </div>
      </Container>
    </li>
  );
}
