import { cn } from "@/lib/utils";

export default function SubBanner({
  imageClassName,
}: {
  imageClassName: string;
}) {
  return (
    <div
      className={cn(
        "h-[300px] lg:h-[400px] bg-center bg-fixed",
        imageClassName
      )}
    />
  );
}
