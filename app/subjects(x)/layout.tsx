import SubBanner from "@/components/common/sub-banner";

export default function SubjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <SubBanner imageClassName="subject_subbanner" />
    </div>
  );
}
