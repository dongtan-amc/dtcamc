import placeholder from "@/public/placeholder.jpg";
import catalystOne from "@/public/tools/catalystOne.png";
import dentalUnit from "@/public/tools/dental-unit.png";
import dentalXray from "@/public/tools/dental-xray.jpg";
import drill from "@/public/tools/drill.jpeg";
import elctrovet from "@/public/tools/electrovet.jpeg";
import fixin from "@/public/tools/fixin.png";
import gas from "@/public/tools/gas.png";
import ligasure2 from "@/public/tools/ligasure2.jpeg";
import masimo from "@/public/tools/masimo.png";
import myvetray from "@/public/tools/myvetray.png";
import oxus from "@/public/tools/oxus.png";
import plasma from "@/public/tools/plasma.png";
import procyte from "@/public/tools/procyte.png";
import quickvet from "@/public/tools/quickvet.jpeg";
import sonocure from "@/public/tools/sonocure.png";
import ultrasound from "@/public/tools/ultrasound.png";
import urine from "@/public/tools/urine.png";
import vetChroma from "@/public/tools/vet-chroma.jpeg";
import xray from "@/public/tools/xray.jpeg";

export const TOOLS = [
  {
    image: placeholder,
    name: "CT 이름",
    description: "CT 간단한 설명",
  },
  {
    image: placeholder,
    name: "C-Arm 이름",
    description: "C-Arm 간단한 설명",
  },
  {
    image: placeholder,
    name: "투석기 이름",
    description: "투석기 간단한 설명",
  },
  {
    image: xray,
    name: "디지털 X-RAY 장비",
    description:
      "흉복부, 골격계 전반의 선명하고 우수한 영상을 저선량으로 촬영이 가능",
  },
  {
    image: ultrasound,
    name: "초음파 PHILIPS Affiniti 70",
    description:
      "선명한 초음파 영상 심장/응급초음파 포함, 장기 내부이상에 정확, 빠른 진단이 가능",
  },
  {
    image: elctrovet,
    name: "전기종양치료기 ElectroVet EZ",
    description:
      "전세계적으로 전기종양치료(ECT)치료가 가능한 장비중 임상적 증명이 확보된 장비",
  },
  {
    image: oxus,
    name: "OXUS 산소발생기",
    description:
      "24시간 93%이상의 산소를 공급할수 있는 장치로 보다 안전한 수술 가능",
  },
  {
    image: placeholder,
    name: "호흡마취기",
    description: "주사마취와 다르게 보다 안전하고 빠른 회복이 가능한 마취기",
  },
  {
    image: sonocure,
    name: "SonoCure",
    description:
      "초음파로 탄력 있는 혈관 및 신경 조직을 남기고, 조직을 절제하여 출혈을 최소화하고 정교한 수술을 가능하게 하는 수술 장비 ",
  },
  {
    image: ligasure2,
    name: "리가슈어 LigaSure Impact",
    description: "LF1212 보다 빠르고 간결한 수술을 가능하도록 함",
  },
  {
    image: drill,
    name: "Styker core drillset",
    description:
      "유명한 Stryker사 장비. 골절 수술, 절골등 다양한 정형/신경외과 수술시 사용",
  },
  {
    image: fixin,
    name: "Intrauma Fixin System",
    description:
      "정교한 정형외과 도구를 사용하여 신속 정확한 정형외과 수술이 가능",
  },

  {
    image: myvetray,
    name: "수술용 방사선 myvet Ray Air",
    description:
      "수술 중 골절 상태 혹은 이식물 적용 후 상태 등 육안으로 명확히 확인하기 힘든 상태를 X-ray 확인하여 정확한 수술 결과를 만들어 내는 것이 가능",
  },
  {
    image: dentalUnit,
    name: "Dolce 덴탈 유닛",
    description:
      "스케일링,폴리싱 등의 치과치료시 짧은 마취시간으로 경제적 진료 가능",
  },
  {
    image: dentalXray,
    name: "치과방사선 EzRay Air VET",
    description:
      "치과 진단 및 치료시,육안으로 보이지 않는 치아상태 검진이 가능",
  },

  {
    image: masimo,
    name: "마시모 Root system",
    description: "수술과정에서의 환자감시장치",
  },
  {
    image: gas,
    name: "혈액가스분석기 ABL9",
    description:
      "1분내 산/염기, 전해질 및 이온화 칼륨수치 확인 정확,신속한 상태 평가 가능",
  },

  {
    image: catalystOne,
    name: "화학 분석기 Catalyst One",
    description:
      "혈청 및 형장을 통한 혈액 내 효소를 정확히 측정하여 환자의 상태를 정확히 파악하고 질병 진단 가능",
  },
  {
    image: procyte,
    name: "혈구 분석기 ProCyte Dx",
    description:
      "적혈구,백혈구,혈소판을 분석하여 빈혈 및 다양한 혈구질환을 정확히 진단가능",
  },

  {
    image: vetChroma,
    name: "혈청화학분석기",
    description: "일반 혈청화학분석기에서는 어려운 고급검사 진행가능",
  },

  {
    image: urine,
    name: "뇨 분석기 IDEXX VetLab UA",
    description: "뇨검사를 검사장비가 측정하여 보다 정확한 검사수치를 확보",
  },
  {
    image: quickvet,
    name: "혈액응고분석기 Quickvet",
    description:
      "혈액의 응고장애와 관련된 질환의 여부를 평가, 중환자 및 수술의 안정성을 확인 가능",
  },
  {
    image: plasma,
    name: "플라즈마 멸균기",
    description:
      "고온고압방식의 오토클레이브와 다르게 고급장비 및 빠른 멸균시간이 가능",
  },
];
