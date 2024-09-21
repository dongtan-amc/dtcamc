export default function Career({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="ml-8">
      <h4 className="mb-3 text-2xl font-extrabold text-olive-drab-950">
        {title}
      </h4>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex">
            <span className="text-2xl text-gray-950">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
