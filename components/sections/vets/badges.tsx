import { Badge } from "@/components/ui/badge";

export default function Badges({ subjects }: { subjects: string[] }) {
  return (
    <ul className="mt-1 flex gap-1">
      {subjects.map((subject) => (
        <li key={subject}>
          <Badge className="bg-primary hover:bg-primary">{subject}</Badge>
        </li>
      ))}
    </ul>
  );
}
