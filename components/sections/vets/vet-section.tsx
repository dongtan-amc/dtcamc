import Container from "@/components/common/container";
import vet1 from "@/public/vets/vet1.jpg";
import vet2 from "@/public/vets/vet2.jpg";
import vet3 from "@/public/vets/vet3.jpg";
import vet4 from "@/public/vets/vet4.jpg";
import vet5 from "@/public/vets/vet5.jpg";
import vet6 from "@/public/vets/vet6.jpg";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import VetArticle from "./vet-article";

const VETS = [
  {
    name: "고재진",
    title: "원장",
    subjects: ["응급의학", "외과", "내과"],
    image: vet1,
    history: [
      "전북대 수의과대학 학사 졸업",
      "전북대 수의외과학 석사/박사 졸업",
      "전북대 외과임상조교",
      "전북대 외과연구원",
      "북미수의사면허시험 BCSE/NAVLE 합격",
      "미국 미주리주립수의과대학 중증질환센터 Post-Doc, USA",
      "現 24시동탄시티동물의료센터 대표원장",
    ],
    expert: [
      "Cruciate Management by CBLO by Dr. Donald Hulse (Las Vegas, NV, USA)",
      "Tibial Plateau Leveling Osteotomy(TPLO) by Dr. Brian Beale (Las Vegas, NV, USA)",
      "Top Ten Surgical Procedures by Drs. Otto Lanz; Dennis Olsen; Donald Waldron (Las Vegas, NV, USA)",
      "Fracture Repair in Toy Breed Dogs & Cats by Drs. Caleb Hudson & Brian Beale (Las Vegas, NV, USA)",
      "Comprehensive Patellar Luxation Correction by Dr. Karl Kraus (Boston, MA, USA)",
      "Comprehensive Extracapsular Stifle Stabilization Course by Dr. Ross Palmer (Boston, MA, USA)",
      "Ventilator Simulator Dry Lab: Dry Lab by Dr. Daniel Fletcher, Total Intravenous Anesthesia for the Critical Care Ventilator, Patient by Dr. Thomas Day, Emergency Airway Management by Drs. Marc Raffe; Andre Shih; William Muir, FASTVet Ultrasound Training (AFAST/TFAST/VetBLUE) by Dr. Gregory Lisciandro (IVECCS, Grapevine, TX, USA)",
      "Principles in Small Animal Fracture Management (AOVET, Columbus, OH, USA)",
      "Basic and Advanced Regional Anesthesia Techniques in Small Animal: Dry/Wet Lab by Dr.Pedro Boscan (IVECCS, San Diego, CA, USA)",
      "Veterinary Advanced Traumatic Life Support trainer training by Dr. Dennis Crowe (VALTS, Columbia, MO, USA)",
      "Advanced Surgical Techniques: Dry/Wet-Lab by Dr. F.A. (Tony) Mann, Advanced ECG Interpretation: Dry/Wet-Lab by Dr. Teresa DeFrancesco (IVECCS, San Antonio, TX, USA)",
      "DFO/PTO/TPLO-M/TTTT2 by Massimo Petazzoni (Dubai, UAE)",
      "Advanced TPLO/CBLO by Kenneth Bruecker & Donald Hulse (VITICUS, Las Vegas, NV, USA)",

      "ACVS(미국수의외과전문의학회) 정회원",
      "AOVET(세계수의정형외과학회)정회원",
      "IVECCS(국제응급수의학회) 정회원",
    ],
  },
  {
    name: "김경채",
    title: "외과과장",
    subjects: ["정형외과", "일반외과"],
    image: vet2,
    history: [
      "충북대 수의외과학 학사 졸업",
      "충북대 수의외과학 석사 졸업",
      "충북대 외과임상조교",
      "충북대 일반외과 팀장",
      "서울 용산 D동물병원 진료 수의사",
      "서울 강남 S동물병원 외과 팀장",
      "現 24시동탄시티동물의료센터 외과 과장",
    ],
    expert: [
      "활동사항 및 학술연수",
      "Postoperative Application of Fentanyl Transdermal Patch in Lynx with Tibial Fracture (대한수의사회 임상컨퍼런스, 2021)",
      "veterinary surgical intervention seminar(2023)",
      "Effect of leash walking on weight loss and assessment of hair cortisol in overweight dogs (Comparative Exercise Physiology, 2024)",
      "DFO/PTO/TPLO-M/TTTT2 by Massimo Petazzoni (Intratrauma academy, Dubai, UAE, 2024)",
      "Advanced TPLO/CBLO by Kenneth Bruecker & Donald Hulse (VITICUS, Las Vegas, NV, USA, 2024)",

      "한국 수의외과 학회 정회원",
      "NAVER 동물 질병백과 감수",
      "PennHIP 인증 수의사",
      "고양이 전십자인대 단열 및 치료과정 / TTA rapid를 활용한 강아지 십자인대 단열 및 슬개골 탈구의 교정 (VETHONORS, 2023)",
    ],
  },

  {
    name: "김준희",
    title: "내과과장",
    subjects: ["내과", "신장투석"],
    image: vet3,
    history: [
      "충북대 수의과대학 학사 졸업",
      "충북대 피부신경과학실험실 조교",
      "분당 L 동물의료원 내과 수의사",
      "동탄 H 동물병원 응급 수의사",
      "現 24시동탄시티동물의료센터 내과과장",
    ],
    expert: [
      "Retrospective study of 23 dogs with meningoencephalomyelitis of unknown etiology (대한수의사회, 2018)",
      "복부초음파 및 심장초음파 수의영상아카데미 (Aurebio, 2024)",
      "CRRT(혈액투석) Hands on course (FMC, 2024)",
      "Echocardiogram doppler course by Joon Boon (VETWAVE, Dallas, TX, USA, 2024)",
      "Advanced Soft Tissue Surgery for General Practitioners by Philipp Mayhew (VITICUS, Las Vegas, NV, USA, 2024)",
    ],
  },
  {
    name: "안인근",
    title: "영상과장",
    subjects: ["영상진단"],
    image: vet4,
    history: [
      "강원대 수의과대학 학사 졸업",
      "강원대 임상수의학 (영상의학) 석사 졸업",
      "강원대 동물 병원 영상의학과 팀장",
      "現 동탄시티동물의료센터 영상과장",
    ],
    expert: [
      "한국 수의영상학회 정회원",
      "Differentiation between benign and malignant hepatic masses using CT malignancy score (대한수의사회 임상컨퍼런스, 2024)",
    ],
  },

  {
    name: "박정현",
    title: "진료수의사",
    subjects: ["내과"],
    image: vet5,
    history: [
      "충북대 수의과대학 학사 졸업",
      "現 동탄시티동물의료센터 진료수의사",
    ],
    expert: [
      "복부초음파 및 심장초음파 수의영상아카데미 (Aurebio, 2024)",
      "Veterinary Dentistry Specialists Dental wet lab (VDS, Sandiego, USA, 2024)",
    ],
  },

  {
    name: "최대성",
    title: "응급과장",
    subjects: ["응급의학과"],
    image: vet6,
    history: [
      "건국대 수의과대학 졸업",
      "어린이대공원 진료수의사",
      " H동물병원 원장",
      "서울 J동물병원 응급수의사",
      "평택 B동물병원 응급과장",
      "現 동탄시티동물의료센터 응급과장",
    ],
  },
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
