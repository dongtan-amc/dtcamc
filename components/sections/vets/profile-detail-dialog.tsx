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
      <DialogTrigger asChild className="my-4 ml-5">
        <Button
          className="bg-olive-drab-500 text-white hover:bg-olive-drab-600"
          size="sm"
        >
          자세히
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] max-w-4xl overflow-y-auto px-6 md:px-10">
        <DialogHeader>
          <DialogTitle className="pb-3">
            <header className="relative mb-6">
              <div className="flex items-end gap-2">
                <h2 className="text-4xl font-extrabold text-olive-drab-600">
                  {name}
                </h2>
                <h3 className="text-2xl text-olive-drab-400">{title}</h3>
              </div>
              <Badges subjects={subjects} />
            </header>
          </DialogTitle>
          <DialogDescription>
            <div className="space-y-4 text-start">
              <Career title="약력" items={history} />
              <Career title="전문활동사항" items={expert} />
              <Career title="학술활동사항" items={education} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
