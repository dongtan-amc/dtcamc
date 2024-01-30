import { cn } from "@/lib/utils";

export default function SubBanner({
  imageClassName,
}: {
  imageClassName: string;
}) {
  return <div className={cn("h-[400px] bg-cover bg-fixed", imageClassName)} />;
}
