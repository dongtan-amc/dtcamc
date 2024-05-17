import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Badges from "./badges";

export default function ProfileDetailDialog({
  name,
  title,
  history,
  expert,
  education,
  subjects,
}: {
  name: string;
  title: string;
  history: string[];
  expert: string[];
  education: string[];
  subjects: string[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="absolute top-1 right-0">
        <Button>자세히</Button>
      </DialogTrigger>
      <DialogContent className="h-[70vh] max-w-4xl  px-10 overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="pb-3">
            <div className="pt-[10px] text-olive-drab-400">
              <span className="text-[60px] font-bold">{name}</span>{" "}
              <span className="text-[43px] font-normal">{title}</span>
            </div>
          </DialogTitle>
          <DialogDescription className="space-y-6 text-slate-800">
            <Badges subjects={subjects} />

            <div className="pt-[45px] flex flex-col gap-[35px]">
              <div>
                <p className="text-olive-drab-600 text-[21px] font-bold pb-2">
                  약력
                </p>
                <ul className="space-y-2 text-sm">
                  {history.map((his) => (
                    <li key={his} className="text-[21px] list-disc leading-6">
                      {his}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-olive-drab-600 text-[21px] font-bold pb-2">
                  전문활동사항
                </p>
                <ul className="space-y-2 text-sm">
                  {expert.map((his) => (
                    <li key={his} className="text-[21px] list-disc leading-6">
                      {his}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-olive-drab-600 text-[21px] font-bold pb-2">
                  학술활동사항
                </p>
                <ul className="space-y-2 text-sm">
                  {education.map((his) => (
                    <li key={his} className="text-[21px] list-disc leading-6">
                      {his}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
