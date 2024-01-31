export default function FacilityCopy({
  title,
  description,
}: {
  title: string;
  description: JSX.Element;
}) {
  return (
    <div className="w-1/3">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <div className="pt-6 leading-relaxed">{description}</div>
    </div>
  );
}
