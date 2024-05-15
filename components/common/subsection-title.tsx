export default function SubsectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center my-24">
      <h4 className="text-3xl text-primary font-bold underline underline-offset-8">
        {title}
      </h4>
      <p className="mt-10 text-xl">{subtitle}</p>
    </div>
  );
}
