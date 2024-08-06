import Container from "@/components/common/container";
import { NAME } from "@/constants/general-info";

export default function SaluteCopy() {
  return (
    <Container>
      <div className="space-y-8 leading-8 break-keep pt-10 pb-12">
        <p className="text-xl font-bold">
          <span className="font-bold text-olive-drab-600">
            동탄 시티 동물의료센터
          </span>
          를 방문해주셔서 감사합니다.
        </p>
        <p>
          저희 {NAME}는 전문성, 정직, 성실, 직업정신, 희생정신, 나아가 지구촌
          생명들에 대한 사랑 모두에서 글로벌 리더가 되고자 하는 깊은 열망들이
          모여 세워졌습니다.
        </p>
        <p>
          {NAME}은 200평의 2차 대형동물병원으로 최고의 진료를 위한
          대학병원수준의 최고급 의료장비, 원내 청결과 안전을 위한 헤파필터
          급배기 환기청정 설비와 청정가스 소화설비를 갖추고 있으며, 다년간
          대학병원에서 수련한 석박사급의 진료진이 진료합니다.
        </p>
        <p>
          최상의 전문진료를 위해 중성화, 슬개골탈구 등 기본적인 수술 외에도
          복합골절, PDA, PSS, 신경외과 수술이 가능한 고난이도 수술 센터, 최소
          침습적인 복강경 수술센터, 중증환자들을 돌보는 심혈관 센터, 재생 &
          재활의학센터, 종양센터, 고양이 의학 센터, 노령견 센터, 부설 연구소를
          갖추고 있습니다.
        </p>
        <p>
          24시간 응급환자를 위하여 항상 전공의가 상주하고 있는 병원으로,
          진정으로 내 가족과 같은 마음으로 생명을 소중하게 돌보며 최상의 진료로
          보호자분들에게 최선을 다할 것을 약속드립니다.
        </p>
      </div>
    </Container>
  );
}
