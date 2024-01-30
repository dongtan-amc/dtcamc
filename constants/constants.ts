// navigation
export const SUBJECTS_SUBMENUS = [
  {
    upperRoute: "/subjects",
    label: "내과",
    route: "/internal",
  },
  {
    upperRoute: "/subjects",
    label: "피부과",
    route: "/dermal",
  },
  {
    upperRoute: "/subjects",
    label: "일반외과",
    route: "/surgery",
  },
  {
    upperRoute: "/subjects",
    label: "정형외과",
    route: "/orthopedics",
  },
  {
    upperRoute: "/subjects",
    label: "신경외과",
    route: "/neurosurgery",
  },
  {
    upperRoute: "/subjects",
    label: "영상의학과",
    route: "/radiology",
  },
  {
    upperRoute: "/subjects",
    label: "안과",
    route: "/ophthalmology",
  },
  {
    upperRoute: "/subjects",
    label: "치과",
    route: "/dental",
  },
  {
    upperRoute: "/subjects",
    label: "응급의학과",
    route: "/emergency",
  },
];
export const EXPERTY_SUBMENUS = [
  {
    upperRoute: "/experty",
    label: "수술 센터",
    route: "/operation",
  },
  {
    upperRoute: "/experty",
    label: "신장투석 센터",
    route: "/dialysis",
  },
  {
    upperRoute: "/experty",
    label: "영상의학센터 / CT 촬영 의뢰",
    route: "/ct",
  },
];
export const COMMUNITY_SUBMENUS = [
  {
    upperRoute: "/community",
    label: "공지 사항",
    route: "/notice",
  },
  {
    upperRoute: "/community",
    label: "병원 소식",
    route: "/news",
  },
  {
    upperRoute: "/community",
    label: "진료 케이스",
    route: "/case",
  },
];

export const INTRODUCTION_MENUS = [
  {
    label: "인사말",
    upperRoute: "/introduction",
    route: "/salute",
  },
  {
    label: "진료시간 안내",
    upperRoute: "/introduction",
    route: "/time",
  },
  {
    label: "시설 소개",
    upperRoute: "/introduction",
    route: "/facility",
  },
  {
    label: "장비 소개",
    upperRoute: "/introduction",
    route: "/tools",
  },
  {
    label: "수의사 소개",
    upperRoute: "/introduction",
    route: "/vets",
  },
];

export const NAV_MENUS = [
  {
    label: "병원 소개",
    route: "/introduction",
    submenu: INTRODUCTION_MENUS,
  },
  {
    label: "진료 과목",
    route: "/subjects",
    submenu: SUBJECTS_SUBMENUS,
  },
  {
    label: "전문 진료",
    route: "/experty",
    submenu: EXPERTY_SUBMENUS,
  },
  {
    label: "커뮤니티",
    route: "/community",
    submenu: COMMUNITY_SUBMENUS,
  },
  {
    label: "미용안내",
    route: "/grooming",
  },
  {
    label: "오시는 길",
    route: "/map",
  },
];

// hos infos
export const NAME = "24시 동탄시티동물의료센터";
export const ADDRESS = "경기도 화성시 동탄지성로 126, 정일 프라자 2층";
export const BOSS = "고재진";
export const BUSINESS_NUMBER = "123-45-67890";
export const PHONE = "031-8003-7533";
export const EMAIL = "123@naver.com";
export const COPY_RIGHTS = "ⓒ2024 동탄시티동물의료센터 All Rights Reserved.";

// vet infos
import dummy from "@/public/vets/dummy.png";

export const VETS = [
  {
    name: "고재진",
    title: "원장",
    image: dummy,
    history: [
      "전북대학교 수의과대학 대학원 외과학박사 졸업",
      "전북대학교 수의과대학 대학원 외과학석사 졸업",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "전북대학교 외과임상조교",
      "전북대학교 외과연구원",
      "미국 미주리주립수의과대학 중증질환센터 SAECC",
      "(Small Animal Emergency & Critical Care) POST-Doc, USA",
      "現 24시동탄시티동물의료센터 대표원장",
    ],
    expert: [
      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
      "ISFM(세계고양이의학회) 정회원",
      "박사학위논문 : Evaluation of Diagnostic Parameters and Emergency Treatment with Fluid Resuscitations in Canine Hypovolemic Shock Model.",
    ],
    education: [
      "Cruciate Management by CBLO by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Top Ten Surgical Procedures by Drs. Otto Lanz; Dennis Olsen; Donald Waldron (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Patellar Luxation Correction by Dr. Karl Kraus (Boston, MA, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "IVECCS : Ventilator Simulator Dry Lab: Dry Lab by Dr. Daniel Fletcher, Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day, Emergency Airway Management by Drs. Marc Raffe; Andre Shih; William Muir, FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (Grapevine, TX, USA)",
      "AOVET : Principles in Small Animal Fracture Management (Columbus, OH, USA)",
      "IVECCS : Basic and Advanced Regional Anesthesia Techniques in Small Animal: Dry/Wet Lab by Dr.Pedro Boscan (San Diego, CA, USA)",
      "VATLS : Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (Columbia, MO, USA)",
      "IVECCS : Advanced Surgical Techniques: Dry/Wet-Lab by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation: Dry/Wet-Lab by Dr. Teresa DeFrancesco (San Antonio, TX, USA)",
    ],
  },
  {
    name: "김경채",
    title: "외과과장",
    image: dummy,
    history: [
      "충북대학교 수의학과 학사 졸업 (2020)",
      "충북대학교 임상수의학 (외과) 석사 졸업 (2023)",
      "달래 동물 의료센터 (서울, 용산구) 진료 수의사 (2020)",
      "충북대학교 동물 병원 외과 수련의 (2020-2022)",
      "충북대학교 동물 병원 일반 외과 팀장 (2022)",
      "SNC 동물 메디컬 센터 (서울, 강남구) 외과 팀장 (2022-2023)",
      "동탄 시티 동물의료센터 외과 과장 (2023-현재)",
    ],
    expert: [
      " 로얄캐닌 앰버서더 (7기)",
      " 한국 수의외과 학회 (정회원)",
      " NAVER 강아지 질병백과 감수 : 강아지 고관절이형성증",
      " NAVER 고양이 질병백과 감수 : 고양이 만성 치은 구내염, 고양이 장염, 고양이 상상 임신",
      " SBS 세상에 이런일이 ‘누워서 먹는 신기한 강아지 모카’ 방송 출현",
    ],
    education: [
      "2021 춘계 대한수의사회 학회 포스터 발표 : Postoperative Application of Fentanyl Transdermal Patch in Lynx with Tibial Fracture",
      "VETHONORS 증례 발표 : 고양이 전십자인대 단열 및 치료과정",
      "VETHONORS 증례 발표 : TTA rapid를 활용한 강아지 십자인대 단열 및 슬개골 탈구의 교정",
      "석사 졸업 논문 : 과체중 개에서 산책이 체중 감량에 미치는 여향 그리고 헤어 코티솔의 평가",
      "세종 충북대학교 동물병원 중재적 시술 세미나 및 실습 참가 (강사 : 장동우 교수님)",
    ],
  },
  {
    name: "김준희",
    title: "내과과장",
    image: dummy,
    history: [
      "전북대학교 수의과대학 대학원 외과학박사 졸업",
      "전북대학교 수의과대학 대학원 외과학석사 졸업",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "전북대학교 외과임상조교",
      "전북대학교 외과연구원",
      "미국 미주리주립수의과대학 중증질환센터 SAECC",
      "(Small Animal Emergency & Critical Care) POST-Doc, USA",
      "現 24시동탄시티동물의료센터 대표원장",
    ],
    expert: [
      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
      "ISFM(세계고양이의학회) 정회원",
      "박사학위논문 : Evaluation of Diagnostic Parameters and Emergency Treatment with Fluid Resuscitations in Canine Hypovolemic Shock Model.",
    ],
    education: [
      "Cruciate Management by CBLO by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Top Ten Surgical Procedures by Drs. Otto Lanz; Dennis Olsen; Donald Waldron (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Patellar Luxation Correction by Dr. Karl Kraus (Boston, MA, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "IVECCS : Ventilator Simulator Dry Lab: Dry Lab by Dr. Daniel Fletcher, Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day, Emergency Airway Management by Drs. Marc Raffe; Andre Shih; William Muir, FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (Grapevine, TX, USA)",
      "AOVET : Principles in Small Animal Fracture Management (Columbus, OH, USA)",
      "IVECCS : Basic and Advanced Regional Anesthesia Techniques in Small Animal: Dry/Wet Lab by Dr.Pedro Boscan (San Diego, CA, USA)",
      "VATLS : Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (Columbia, MO, USA)",
      "IVECCS : Advanced Surgical Techniques: Dry/Wet-Lab by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation: Dry/Wet-Lab by Dr. Teresa DeFrancesco (San Antonio, TX, USA)",
    ],
  },
  {
    name: "김준희",
    title: "내과과장",
    image: dummy,
    history: [
      "전북대학교 수의과대학 대학원 외과학박사 졸업",
      "전북대학교 수의과대학 대학원 외과학석사 졸업",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "전북대학교 외과임상조교",
      "전북대학교 외과연구원",
      "미국 미주리주립수의과대학 중증질환센터 SAECC",
      "(Small Animal Emergency & Critical Care) POST-Doc, USA",
      "現 24시동탄시티동물의료센터 대표원장",
    ],
    expert: [
      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
      "ISFM(세계고양이의학회) 정회원",
      "박사학위논문 : Evaluation of Diagnostic Parameters and Emergency Treatment with Fluid Resuscitations in Canine Hypovolemic Shock Model.",
    ],
    education: [
      "Cruciate Management by CBLO by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Top Ten Surgical Procedures by Drs. Otto Lanz; Dennis Olsen; Donald Waldron (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Patellar Luxation Correction by Dr. Karl Kraus (Boston, MA, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "IVECCS : Ventilator Simulator Dry Lab: Dry Lab by Dr. Daniel Fletcher, Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day, Emergency Airway Management by Drs. Marc Raffe; Andre Shih; William Muir, FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (Grapevine, TX, USA)",
      "AOVET : Principles in Small Animal Fracture Management (Columbus, OH, USA)",
      "IVECCS : Basic and Advanced Regional Anesthesia Techniques in Small Animal: Dry/Wet Lab by Dr.Pedro Boscan (San Diego, CA, USA)",
      "VATLS : Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (Columbia, MO, USA)",
      "IVECCS : Advanced Surgical Techniques: Dry/Wet-Lab by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation: Dry/Wet-Lab by Dr. Teresa DeFrancesco (San Antonio, TX, USA)",
    ],
  },
  {
    name: "김준희",
    title: "내과과장",
    image: dummy,
    history: [
      "전북대학교 수의과대학 대학원 외과학박사 졸업",
      "전북대학교 수의과대학 대학원 외과학석사 졸업",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "전북대학교 외과임상조교",
      "전북대학교 외과연구원",
      "미국 미주리주립수의과대학 중증질환센터 SAECC",
      "(Small Animal Emergency & Critical Care) POST-Doc, USA",
      "現 24시동탄시티동물의료센터 대표원장",
    ],
    expert: [
      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
      "ISFM(세계고양이의학회) 정회원",
      "박사학위논문 : Evaluation of Diagnostic Parameters and Emergency Treatment with Fluid Resuscitations in Canine Hypovolemic Shock Model.",
    ],
    education: [
      "Cruciate Management by CBLO by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Top Ten Surgical Procedures by Drs. Otto Lanz; Dennis Olsen; Donald Waldron (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Patellar Luxation Correction by Dr. Karl Kraus (Boston, MA, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "IVECCS : Ventilator Simulator Dry Lab: Dry Lab by Dr. Daniel Fletcher, Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day, Emergency Airway Management by Drs. Marc Raffe; Andre Shih; William Muir, FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (Grapevine, TX, USA)",
      "AOVET : Principles in Small Animal Fracture Management (Columbus, OH, USA)",
      "IVECCS : Basic and Advanced Regional Anesthesia Techniques in Small Animal: Dry/Wet Lab by Dr.Pedro Boscan (San Diego, CA, USA)",
      "VATLS : Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (Columbia, MO, USA)",
      "IVECCS : Advanced Surgical Techniques: Dry/Wet-Lab by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation: Dry/Wet-Lab by Dr. Teresa DeFrancesco (San Antonio, TX, USA)",
    ],
  },
  {
    name: "김준희",
    title: "내과과장",
    image: dummy,
    history: [
      "전북대학교 수의과대학 대학원 외과학박사 졸업",
      "전북대학교 수의과대학 대학원 외과학석사 졸업",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "전북대학교 외과임상조교",
      "전북대학교 외과연구원",
      "미국 미주리주립수의과대학 중증질환센터 SAECC",
      "(Small Animal Emergency & Critical Care) POST-Doc, USA",
      "現 24시동탄시티동물의료센터 대표원장",
    ],
    expert: [
      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
      "ISFM(세계고양이의학회) 정회원",
      "박사학위논문 : Evaluation of Diagnostic Parameters and Emergency Treatment with Fluid Resuscitations in Canine Hypovolemic Shock Model.",
    ],
    education: [
      "Cruciate Management by CBLO by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Top Ten Surgical Procedures by Drs. Otto Lanz; Dennis Olsen; Donald Waldron (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Patellar Luxation Correction by Dr. Karl Kraus (Boston, MA, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "IVECCS : Ventilator Simulator Dry Lab: Dry Lab by Dr. Daniel Fletcher, Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day, Emergency Airway Management by Drs. Marc Raffe; Andre Shih; William Muir, FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (Grapevine, TX, USA)",
      "AOVET : Principles in Small Animal Fracture Management (Columbus, OH, USA)",
      "IVECCS : Basic and Advanced Regional Anesthesia Techniques in Small Animal: Dry/Wet Lab by Dr.Pedro Boscan (San Diego, CA, USA)",
      "VATLS : Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (Columbia, MO, USA)",
      "IVECCS : Advanced Surgical Techniques: Dry/Wet-Lab by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation: Dry/Wet-Lab by Dr. Teresa DeFrancesco (San Antonio, TX, USA)",
    ],
  },
];

// staff infos
export const STAFFS = [
  {
    name: "김철수",
    title: "리셉션",
    image: dummy,
  },
  {
    name: "박희수",
    title: "리셉션",
    image: dummy,
  },
  {
    name: "김수지",
    title: "수의테크니션",
    image: dummy,
  },
  {
    name: "장그래",
    title: "수의테크니션",
    image: dummy,
  },
  {
    name: "홍길동",
    title: "수의테크니션",
    image: dummy,
  },
  {
    name: "김철수",
    title: "수의테크니션",
    image: dummy,
  },
  {
    name: "이영희",
    title: "수의테크니션",
    image: dummy,
  },
  {
    name: "박동자",
    title: "수의테크니션",
    image: dummy,
  },
];

import {
  FaUserDoctor,
  FaClock,
  FaHospital,
  FaMapLocationDot,
} from "react-icons/fa6";

export const INTRODUCTION_SUBCONTENTS = [
  {
    title: "수의사 소개",
    description: `${NAME}의 최고의 수의사들을 소개합니다.`,
    Icon: FaUserDoctor,
    href: "/introduction/vets",
  },
  {
    title: "진료시간 안내",
    description:
      "주간 : 오전 9시 - 오후 9시 <br/> 야간 : 오후 9시 - 익일 오전 9시",
    Icon: FaClock,
    href: "/introduction/time",
  },
  {
    title: "시설 안내",
    description: `${NAME}의 시설을 소개합니다.`,
    Icon: FaHospital,
    href: "/introduction/facility",
  },
  {
    title: "오시는 길",
    description: `${ADDRESS}`,
    Icon: FaMapLocationDot,
    href: "/map",
  },
];

import dentalXray from "@/public/tools/dental-xray.jpg";
import ultrasound from "@/public/tools/ultrasound.jpeg";
import xray from "@/public/tools/xray.jpeg";

import aniscan from "@/public/tools/aniscan.jpeg";
import elctrovet from "@/public/tools/electrovet.jpeg";
import cbc from "@/public/tools/cbc.jpeg";
import gas from "@/public/tools/gas.jpeg";
import vetChroma from "@/public/tools/vet-chroma.jpeg";
import chem from "@/public/tools/chem.jpeg";
import ammonia from "@/public/tools/ammonia.jpeg";
import urine from "@/public/tools/urine.jpeg";

import v100 from "@/public/tools/v100.jpeg";
import ear from "@/public/tools/ear.png";
import woodlamp from "@/public/tools/woodlamp.jpeg";

import drill from "@/public/tools/drill.jpeg";
import plasma from "@/public/tools/plasma.jpeg";
import scaling from "@/public/tools/scaling.jpeg";

import masimo from "@/public/tools/masimo.png";
import oxus from "@/public/tools/oxus.png";
import pump from "@/public/tools/pump.jpeg";
import syringe from "@/public/tools/syringe.jpeg";
import aneth from "@/public/tools/aneth.jpeg";
import quickvet from "@/public/tools/quickvet.jpeg";
import doppler from "@/public/tools/doppler.png";

import covidien from "@/public/tools/covidien.jpeg";
import ligasure from "@/public/tools/ligasure.jpeg";
import ligasure2 from "@/public/tools/ligasure2.jpeg";
import ventil from "@/public/tools/ventil.gif";
import gaymar from "@/public/tools/gaymar.jpeg";
import monitor from "@/public/tools/monitor.jpeg";
import iop from "@/public/tools/iop.png";

export const TOOLS = [
  {
    category: "영상의학",
    tools: [
      {
        image: ultrasound,
        name: "초음파 민드레이 DC-80",
        description:
          "선명한 초음파 영상 심장/응급초음파 포함, 장기 내부이상에 정확, 빠른 진단이 가능",
      },
      {
        image: dentalXray,
        name: "치과방사선 EzRay Air VET",
        description:
          "치과 진단 및 치료시,육안으로 보이지 않는 치아상태 검진이 가능",
      },
      {
        image: xray,
        name: "디지털 X-RAY 장비",
        description:
          "흉복부, 골격계 전반의 선명하고 우수한 영상을 저선량으로 촬영이 가능",
      },
    ],
  },
  {
    category: "내과/종양",
    tools: [
      {
        image: aniscan,
        name: "악성종양진단장비 Aniscan",
        description: "혈청한방울로 15분이내에 악성종양진단이 가능한 검사장비",
      },
      {
        image: elctrovet,
        name: "전기종양치료기ElectroVet EZ",
        description:
          "전세계적으로 전기종양치료(ECT)치료가 가능한 장비중 임상적 증명이 확보된 장비",
      },
      {
        image: cbc,
        name: "혈구분석기",
        description:
          "적혈구,백혈구,혈소판을 분석하여 빈혈 및 다양한 혈구질환을 정확히 진단가능",
      },
      {
        image: gas,
        name: "혈액가스분석기 ABL9",
        description:
          "1분내 산/염기, 전해질 및 이온화 칼륨수치 확인 정확,신속한 상태 평가 가능",
      },
      {
        image: vetChroma,
        name: "혈청화학분석기 Vetchroma",
        description: "일반 혈청화학분석기에서는 어려운 고급검사를 진행 가능",
      },
      {
        image: chem,
        name: "혈청화학분석기",
        description:
          "생화학분석기중 가장 적은 혈청량 간, 신장, 췌장 등 상태를 빠르고 정확히 확인",
      },
      {
        image: ammonia,
        name: "암모니아 분석기",
        description:
          "암모니아 검사측정장비로써 간기능 평가시에  신속한 진단과 치료에 대한 예후를 평가",
      },
      {
        image: urine,
        name: "뇨분석기 PocketChem™ UA",
        description: "뇨검사를 검사장비가 측정하여 보다 정확한 검사수치를 확보",
      },
    ],
  },
  {
    category: "피부/호르몬",
    tools: [
      {
        image: vetChroma,
        name: "혈청화학/항체가/호르몬진단기기",
        description:
          "일반적 혈청화학분석기의 추가기능을 제공 가능. 특히 호르몬검사,특수호르몬 검사가능",
      },
      {
        image: v100,
        name: "혈청화학 V100",
        description:
          "Vcheck기기의 하위버전으로 보다 신속하고 간결한 검사를 진행",
      },
      {
        image: ear,
        name: "디지털 검이경",
        description: "외이염과 같은 이도의 병변을 확인가능",
      },
      {
        image: woodlamp,
        name: "우드램프 Wood lamp",
        description: "개와 고양이의 피부 곰팡이염 1차 진단 장비",
      },
    ],
  },
  {
    category: "정형외과/치과",
    tools: [
      {
        image: drill,
        name: "Styker core drillset",
        description:
          "유명한 Stryker사 장비. 골절 수술, 절골등 다양한 정형/신경외과 수술시 사용",
      },
      {
        image: plasma,
        name: "플리즈마 멸균기",
        description:
          "고온고압방식의 오토클레이브와 다르게 고급장비 및 빠른 멸균시간이 가능",
      },
      {
        image: dentalXray,
        name: "치과방사선 EzRay Air VET",
        description:
          "치과진단과 치료시 X-ray로 육안으로 보이지 않는 치아상태 검진이 가능",
      },
      {
        image: scaling,
        name: "스케일러 Bon ART Scaler",
        description:
          "스케일링,폴리싱 등의 치과치료시 짧은 마취시간으로 경제적 진료 가능",
      },
    ],
  },
  {
    category: "중환자/고양이케어",
    tools: [
      {
        image: masimo,
        name: "마시모 페이션트 모니터",
        description:
          "실시간으로 정밀한 모니터링 측정을 가능하게 하여 보다 정확한 환자의 상태를 평가",
      },
      {
        image: oxus,
        name: "OXUS 산소발생기",
        description:
          "24시간 93%이상의 산소를 공급할수 있는 장치로 보다 안전한 수술 가능",
      },
      {
        image: pump,
        name: "수액펌프 Infusion pump",
        description:
          "정확한 수액종류와 속도를 설정, 입원기간중 안정적 수액치료를 통해 환자 회복 도움",
      },
      {
        image: syringe,
        name: "시린지펌프 Syringe pump",
        description: "일정한 속도로 약물을 주입. 특히 중환자인 경우 적용 가능",
      },
      {
        image: aneth,
        name: "세보플루란 호흡마취기",
        description:
          "고양이의 진정/마취에 적용되는 마취 방식으로써 발암물질이 없어 보다 안전",
      },
      {
        image: gas,
        name: "혈액가스분석기 ABL9",
        description:
          "1분내에 산/염기, 전해질 및 이온화 칼륨수치 확인으로 정확,신속 상태 평가 가능",
      },
      {
        image: quickvet,
        name: "혈액응고분석기 Quickvet",
        description:
          "혈액의 응고장애와 관련된 질환의 여부를 평가, 중환자 및 수술의 안정성을 확인 가능",
      },
      {
        image: doppler,
        name: "도플러 혈압계",
        description:
          "비침습적인 방법을 이용한 도플러방식의 혈압계. 다른 혈압계보다 월등히 적은 에러율",
      },
    ],
  },
  {
    category: "일반외과/안과",
    tools: [
      {
        image: covidien,
        name: "코비디엔 포스 트라이어드",
        description:
          "지혈과 절제를 동시에 진행하여 통증 및 출혈 최소화,조직손상 최소화,수술시간 단축",
      },
      {
        image: ligasure,
        name: "리가슈어 Ligasure LF1212",
        description:
          "리가슈어 제품중 소형견의 무통/무출혈 수술에 쉽고 빠르게 적용되는 수술기구",
      },
      {
        image: ligasure2,
        name: "리가슈어 LigaSure Impact",
        description: "LF1212 보다 빠르고 간결한 수술을 가능하도록 함",
      },
      {
        image: ventil,
        name: "호흡마취기",
        description:
          "주사마취와 다르게 보다 안전하고 빠른 회복이 가능한 마취기",
      },
      {
        image: masimo,
        name: "마시모 페이션트 모니터",
        description:
          "실시간으로 정밀한 모니터링 측정이 가능함으로써 환자상태를 안전하도록 도와줌",
      },
      {
        image: gaymar,
        name: "가이마 스트라이커",
        description:
          "고양이나 장시간 수술을 받는 강아지에게 저체온증예방과 안전한 마취회복 도움",
      },
      {
        image: monitor,
        name: "페이션트 모니터",
        description: "수술과정에서의 환자감시장치",
      },
      {
        image: iop,
        name: "전자식 안압계",
        description: "녹내장 또는 포도막염에 의한 안압의 변화를 측정",
      },
    ],
  },
];
