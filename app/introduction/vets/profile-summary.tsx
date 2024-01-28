export default function ProfileSummary({
  name,
  title,
  history,
}: {
  name: string;
  title: string;
  history: string[];
}) {
  return (
    <div className="space-y-4">
      <p className="text-2xl font-bold">
        {name} <span className="text-olive-drab-600">{title}</span>
      </p>

      <div>
        <p className="text-olive-drab-600 text-lg pb-1 font-bold">약력</p>
        <ul className="space-y-2 text-sm">
          {history.map((his) => (
            <li key={his}>- {his}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
