import { NAME } from "@/constants/general-info";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import EmailForm from "./email-form";

export default function EmploymentSection() {
  return (
    <SectionLayout hash="employment" className="bg-olive-drab-50/40">
      <SectionTitle subtitle="여러분들의 소중한 지원을 기다리고 있습니다.">
        {NAME.slice(3)} <span className="text-primary font-bold">채용</span>
      </SectionTitle>

      <EmailForm />
    </SectionLayout>
  );
}
