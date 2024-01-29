export default function FacilityCopy({
  title,
  description,
}: {
  title: string;
  description: JSX.Element;
}) {
  return (
    <div className="w-1/3">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <div className="text-xl pt-6">{description}</div>
    </div>
  );
}
