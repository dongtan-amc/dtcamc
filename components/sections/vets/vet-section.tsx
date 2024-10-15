import Container from "@/components/common/container";
import vet1 from "@/public/vets/vet1_bg_removed.png";
import vet2 from "@/public/vets/vet2_bg_removed.png";
import vet3 from "@/public/vets/vet3_bg_removed.png";
import vet4 from "@/public/vets/vet4_bg_removed.png";
import vet6 from "@/public/vets/vet6_bg_removed.png";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import VetArticle from "./vet-article";

const VETS = [
  {
    name: "고재진",
    title: "대표원장",
    subjects: ["중환자치료(Critical Care)", "중환자수술(Trauma Surgery)"],
    image: vet1,
    history: [
      "전북대 수의과대학 학사 졸업",
      "전북대 수의외과학 석사/박사 졸업",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "24시동탄시티동물의료센터 대표원장",
      "",
      "",
      "미국 미주리주립수의과대학 중증질환센터 Post-Doc, USA",
      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
    ],
    expert: [
      "Cruciate Management in CORA Based Levelling Osteotomy (CBLO) by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "Ventilator Simulator by Dr. Daniel Fletcher",
      "Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day",
      "FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (IVECCS, Grapevine, TX, USA)",
      "Principles in Small Animal Fracture Management (AOVET, Columbus, OH, USA)",
      "Basic and Advanced Regional Anesthesia Techniques in Small Animal:by Dr.Pedro Boscan (IVECCS, San Diego, CA, USA)",
      "Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (VALTS, Columbia, MO, USA)",
      "Advanced Surgical Techniques by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation:by Dr. Teresa DeFrancesco (IVECCS, San Antonio, TX, USA)",
      "DFO/PTO/TPLO-M/TTTT2 by Massimo Petazzoni (Dubai, UAE)",
      "Advanced TPLO/CBLO by Kenneth Bruecker & Donald Hulse (VITICUS, Las Vegas, NV, USA",
    ],
  },
  {
    name: "김경채",
    title: "외과과장",
    subjects: [
      "정형외과(Orthopedic Surgery)",
      "연부조직외과(Soft Tissue Surgery)",
    ],
    image: vet2,
    history: [
      "충북대 수의외과학 학사 졸업",
      "충북대 수의외과학 석사 졸업",
      "충북대 외과임상조교, 일반외과 팀장",
      "24시동탄시티동물의료센터 외과 과장",
      "",
      "",
      "한국 수의회과 학회 정회원",
      "NAVER 동물질병백과 감수, PennHIP 인증 수의사",
      "고양이 전십자인대 단열 및 치료과정 / TTA rapid를 활용한 강아지",
      "십자인대 단열 및 슬개골 탈구의 교정(VETHONORS,2023)",
    ],
    expert: [
      "Postoperative Application of Fentanyl Transdermal Patch in Lynx with Tibial Fracture (대한수의사회 임상컨퍼런스, 2021)",
      "Veterinary surgical intervention seminar(2023)",
      "Effect of leash walking on weight loss and assessment of hair cortisol in overweight dogs (Comparative Exercise Physiology, 2024)",
      "DFO/PTO/TPLO-M/TTTT2 by Massimo Petazzoni (Intratrauma academy, Dubai, UAE, 2024)",
      "Advanced TPLO/CBLO by Kenneth Bruecker & Donald Hulse (VITICUS, Las Vegas, NV, USA, 2024)",
    ],
  },

  {
    name: "김준희",
    title: "내과과장",
    subjects: ["내과(심장/신장)", "신장투석(Hemodialysis)"],
    image: vet3,
    history: [
      "충북대 수의과대학 학사 졸업",
      "충북대 피부신경과학실험실 조교",
      "24시동탄시티동물의료센터 내과과장",
    ],
    expert: [
      "Retrospective study of 23 dogs with meningoencephalomyelitis of unknown etiology (대한수의사회, 2018)",
      "Abdominal Ultrasonogarphy & Echocaridiogram (수의영상아카데미 Aurebio, 2024)",
      "CRRT(Hemodialysis) Hands on course (FMC, 2024)",
      "Echocardiogram doppler course by Joon Boon (VETWAVE, Dallas, TX, USA, 2024)",
      "Advanced Soft Tissue Surgery for General Practitioners by Philipp Mayhew (VITICUS, Las Vegas, NV, USA, 2024)",
    ],
  },
  {
    name: "안인근",
    title: "영상과장",
    subjects: ["진단영상(CT/ULtrasound/Radiology)"],
    image: vet4,
    history: [
      "강원대 수의과대학 학사 졸업",
      "강원대 임상수의학(영상의학)석사 졸업",
      "강원대 동물 병원 영상의학과 팀장",
      "동탄시티동물의료센터 영상과장",
      "",
      "",
      "한국 수의영상학회 정회원",
    ],
    expert: [
      "Differentiation between benign and malignant hepatic masses using CT malignancy score (대한수의사회 임상컨퍼런스, 2024)",
    ],
  },

  // {
  //   name: "박정현",
  //   title: "진료수의사",
  //   subjects: ["중환자치료(Critical care)", "치과(Dentistry)"],
  //   image: vet6,
  //   history: [
  //     "건국대 수의과대학 졸업",
  //     "H동물병원 원장",
  //     "서울 J동물병원 응급수의사",
  //     "평택 B동물병원 응급과장",
  //     "동탄시티동물의료센터 응급과장",
  //   ],
  // },
];

export type Vet = (typeof VETS)[number];

export default function VetSection() {
  return (
    <SectionLayout hash="vets" className="bg-olive-drab-50/80 pb-10">
      <div className="flex w-full flex-col items-center">
        <SectionTitle subtitle={"동탄시티동물의료센터 수의사팀을 소개합니다."}>
          수의사 소개
        </SectionTitle>

        <Container>
          <ul className="space-y-12 md:space-y-20">
            {VETS.map((vet) => (
              <li
                key={vet.name}
                className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <VetArticle {...vet} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </SectionLayout>
  );
}
