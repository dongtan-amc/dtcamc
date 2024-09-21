export default function Career({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="ml-0 lg:ml-8">
      <h4 className="mb-3 text-2xl font-extrabold text-olive-drab-950">
        {title}
      </h4>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex">
            <span className="text-sm text-gray-950 lg:text-2xl">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
