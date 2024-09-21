export default function Badges({ subjects }: { subjects: string[] }) {
  return (
    <ul className="mt-2 flex flex-col items-start gap-2 lg:flex-row">
      {subjects.map((subject) => (
        <li key={subject}>
          <p className="text-sm font-extrabold lg:text-xl">{subject}</p>
        </li>
      ))}
    </ul>
  );
}
