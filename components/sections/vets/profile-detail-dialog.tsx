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
import Career from "./career";

export default function ProfileDetailDialog({
  name,
  title,
  history,
  expert,
  subjects,
}: {
  name: string;
  title: string;
  history: string[];
  expert?: string[];
  subjects: string[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button
          className="bg-olive-drab-950 text-white transition hover:scale-95 hover:bg-olive-drab-950"
          size="sm"
        >
          자세히
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[80vh] max-w-screen-xl flex-col overflow-y-auto px-6 md:px-10">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-end gap-2">
              <h2 className="text-5xl font-black text-olive-drab-950">
                {name}
              </h2>
              <h3 className="text-2xl font-black leading-none text-olive-drab-950">
                {title}
              </h3>
            </div>
            <Badges subjects={subjects} />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-10 text-start">
          <Career title="약력" items={history} />
          {expert && <Career title="활동사항 및 학술연수" items={expert} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
