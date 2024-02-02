import { Badge } from "@/components/ui/badge";
import Badges from "./badges";

export default function ProfileSummary({
  name,
  title,
  history,
  subjects,
}: {
  name: string;
  title: string;
  history: string[];
  subjects: string[];
}) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold">
            {name} <span className="text-olive-drab-600 text-xl">{title}</span>
          </p>
        </div>

        <div className="pt-2">
          <p className="text-olive-drab-600 text-lg pb-1 font-bold">약력</p>
          <ul className="space-y-1 text-sm">
            {history.map((his) => (
              <li key={his}>- {his}</li>
            ))}
          </ul>
        </div>
      </div>

      <Badges subjects={subjects} />
    </div>
  );
}
