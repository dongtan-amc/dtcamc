import { Badge } from "@/components/ui/badge";

export default function Badges({ subjects }: { subjects: string[] }) {
  return (
    <ul className="flex gap-1">
      {subjects.map((subject) => (
        <li key={subject}>
          <Badge className="bg-slate-950 hover:bg-slate-800">{subject}</Badge>
        </li>
      ))}
    </ul>
  );
}
