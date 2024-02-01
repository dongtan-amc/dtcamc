import Container from "@/components/common/container";
import SubjectsBentoGrid from "./subjects-bento-grid";
import { NAME } from "@/constants/general-info";

export default function Subjects() {
  return (
    <div className="py-10">
      <h2 className="text-4xl text-slate-950 font-bold text-center">
        진료 과목
      </h2>
      <Container>
        <SubjectsBentoGrid />
      </Container>
    </div>
  );
}
