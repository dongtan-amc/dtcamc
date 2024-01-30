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
        <Image src={image} alt={`carousel image${index}`} placeholder="blur" />
      </DialogTrigger>
      <DialogContent className="p-0 rounded-none max-w-5xl">
        <Image src={image} alt={`carousel image${index}`} placeholder="blur" />
      </DialogContent>
    </Dialog>
  );
}
