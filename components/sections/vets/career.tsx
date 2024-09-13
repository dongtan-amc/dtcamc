export default function Career({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-xl font-semibold text-olive-drab-700">
        {title}
      </h4>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-start text-xl">
            <span className="mr-2 text-olive-drab-500">•</span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
