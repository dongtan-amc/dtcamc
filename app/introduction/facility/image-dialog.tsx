import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

export default function ImageDialog({
  image,
  index,
}: {
  image: StaticImageData;
  index: number;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={image}
          alt={`carousel image${index}`}
          placeholder="blur"
          className="rounded-xl"
          sizes="(min-width: 1360px) 827px, (min-width: 1040px) 60.67vw, calc(100vw - 32px)"
        />
      </DialogTrigger>
      <DialogContent className="p-0 rounded-none max-w-5xl">
        <Image
          src={image}
          alt={`carousel image${index}`}
          placeholder="blur"
          sizes="80vw"
        />
      </DialogContent>
    </Dialog>
  );
}
