import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StaticImageData } from "next/image";
import Badges from "./badges";
import VetImage from "./vet-image";

export default function ProfileDetailModal({
  name,
  title,
  image,
  history,
  expert,
  education,
  subjects,
}: {
  name: string;
  title: string;
  image: StaticImageData;
  history: string[];
  expert: string[];
  education: string[];
  subjects: string[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="px-2 h-7 border-primary text-primary hover:text-primary"
          variant="outline"
        >
          자세히
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[70vh] sm:w-[800px] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="pb-3">
            <p className="text-2xl font-bold">
              {name} <span className="text-olive-drab-600">{title}</span>
            </p>
          </DialogTitle>
          <DialogDescription className="space-y-6">
            <div className="space-y-2">
              <VetImage image={image} name={name} />
              <Badges subjects={subjects} />
            </div>
            <div>
              <p className="text-olive-drab-600 text-lg pb-1 font-bold">약력</p>
              <ul className="space-y-2 text-sm">
                {history.map((his) => (
                  <li key={his} className="text-lg">
                    - {his}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-olive-drab-600 text-lg pb-1 font-bold">
                전문활동사항
              </p>
              <ul className="space-y-2 text-sm">
                {expert.map((his) => (
                  <li key={his} className="text-lg">
                    - {his}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-olive-drab-600 text-lg pb-1 font-bold">
                해외학술활동/교육
              </p>
              <ul className="space-y-2 text-sm">
                {education.map((his) => (
                  <li key={his} className="text-lg">
                    - {his}
                  </li>
                ))}
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
