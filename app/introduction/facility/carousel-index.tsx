import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

export default function CarouselIndex({
  count,
  current,
}: {
  count: number;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}) {
  console.log({ count, current });

  return (
    <div className="absolute bottom-5 left-[calc(50%-40px)] flex gap-2 w-full mx-auto">
      {new Array(count).fill(0).map((_, index) => (
        <div
          className={cn(
            index + 1 === current
              ? "w-10 bg-olive-drab-600"
              : "w-2 bg-olive-drab-500",
            " h-2 rounded-full"
          )}
          key={index}
        />
      ))}
    </div>
  );
}
