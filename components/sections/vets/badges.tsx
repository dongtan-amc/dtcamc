export default function Badges({ subjects }: { subjects: string[] }) {
  return (
    <ul className="mt-2 flex gap-2">
      {subjects.map((subject) => (
        <li key={subject}>
          <p className="text-xl font-extrabold">{subject}</p>
        </li>
      ))}
    </ul>
  );
}
