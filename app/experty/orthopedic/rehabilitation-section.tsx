import Container from "@/components/common/container";
import SectionTitle from "../section-title";

export default function RehabilitationSection() {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle title="정형외과 재활치료" />

        <p className="py-6 text-base">
          <span className="lg:text-3xl font-bold text-primary text-2xl">
            1.{" "}
          </span>
          체외 충격파 치료는 절개없이 근골격계 통증을 치료하는 방법으로
          주위조직과 뼈의 치유를 도와 통증을 완화하고 정상조직의 재생을
          촉진합니다. 세포 자극을 통해 혈관 신생 및 세포내 물질을 촉진하여 관련
          조직을 회복시킵니다. 동물 전용 체외 충격파 장비를 사용하여 마취나
          진정없이 안전하게 치료할 수 있습니다.
        </p>

        <p className="py-6 text-base">
          <span className="lg:text-3xl font-bold text-primary text-2xl">
            2.{" "}
          </span>
          레이저 재활은 높은 출력으로 듀얼 다이오드 레이저를 통해 수술 후 빠른
          회복을 도와 줄수 있으며, 염증관리, 세포재생에도 특화된 치료입니다.
          650nm의 낮은 파장을 통해 피부 상처치료와 세균증식을 억제할수 있고,
          980nm의 높은 파장은 근골격계와 통증 치료에 적합하여 수술후에
          통증관리에 특화된 치료입니다.
        </p>

        <p className="py-6 text-base">
          <span className="lg:text-3xl font-bold text-primary text-2xl">
            3.{" "}
          </span>{" "}
          관절운동(ROM) & 스트레칭은 수술 후의 관절운동과 스트레칭을 통해 혈류량
          증가와, 산소공급을 증가시키고 스트레칭을 통해 근육의 위축을 막아 빠른
          회복을 돕습니다. 특히 내인성 엔도르핀을 유발하여 통증을 감소시킵니다.
        </p>
        <p className="py-6 text-base">
          <span className="lg:text-3xl font-bold text-primary text-2xl">
            4.{" "}
          </span>
          NMES 치료는 전기자극치료로써 전류를 이용하여 진통제의 역할을 대신하여
          최대한 약물을 줄일 수 있고, 뇌로 가는 통증 신호를 줄이거나 비침습적
          요법으로 염증을 감소시킬 수 있다.
        </p>
        <p className="py-6 text-base">
          <span className="lg:text-3xl font-bold text-primary text-2xl">
            5.{" "}
          </span>{" "}
          수중 런닝머신 치료는 물의 부력을 이용한 치료법으로 근육과 관절에
          무리를 주지 않고 치료를 진행할 수 있으며 체중감량에도 효과적입니다.
          또한 근골격계 질환, 노령성 질환, 불의의 사고 등으로 인한 운동 장애,
          근육 및 근력 소실과 같은 문제에서 회복할 수 있도록 통증감소, 근력
          강화, 지구력 향상 등 안전하고 다양한 효과를 거둘 수 있습니다.
        </p>
      </Container>
    </section>
  );
}
