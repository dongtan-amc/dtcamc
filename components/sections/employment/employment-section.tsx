import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import EmailForm from "./email-form";

export default function EmploymentSection() {
  return (
    <div
      id="employment"
      className="scroll-mt-[64px] bg-olive-drab-50/80 pb-28 xl:scroll-mt-[96px]"
    >
      <SectionTitle subtitle="여러분들의 소중한 지원을 기다리고 있습니다.">
        채용 안내
      </SectionTitle>

      <EmailForm />
    </div>
  );
}
