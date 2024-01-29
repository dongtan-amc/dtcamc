// navigation
export const SUBJECTS_SUBMENUS = [
  {
    label: "내과",
    route: "/internal",
  },
  {
    label: "피부과",
    route: "/dermal",
  },
  {
    label: "일반 외과",
    route: "/surgery",
  },
  {
    label: "정형 외과",
    route: "/surgery",
  },
  {
    label: "신경 외과",
    route: "/surgery",
  },
  {
    label: "영상의학과",
    route: "/radiology",
  },
  {
    label: "안과",
    route: "/ophthalmology",
  },
  {
    label: "치과",
    route: "/dental",
  },
  {
    label: "응급의학과",
    route: "/emergency",
  },
];
export const EXPERTY_SUBMENUS = [
  {
    label: "수술 센터",
    route: "/operation",
  },
  {
    label: "신장 투석 센터",
    route: "/",
  },
  {
    label: "일반 외과",
    route: "/surgery",
  },
  {
    label: "영상의학센터 / CT 촬영 의뢰",
    route: "/ct",
  },
];
export const COMMUNITY_SUBMENUS = [
  {
    label: "공지 사항",
    route: "/notice",
  },
  {
    label: "병원 소식",
    route: "/news",
  },
  {
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
    label: "진료 안내",
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
