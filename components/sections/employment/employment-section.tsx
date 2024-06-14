import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import EmailForm from "./email-form";

export default function EmploymentSection() {
  return (
    <SectionLayout hash="employment">
      <SectionTitle subtitle="여러분들의 소중한 지원을 기다리고 있습니다.">
        채용 안내
      </SectionTitle>

      <EmailForm />
    </SectionLayout>
  );
}
