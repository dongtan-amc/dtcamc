import Container from "@/components/common/container";
import vet1 from "@/public/vets/vet1_bg_removed.png";
import vet2 from "@/public/vets/vet2_bg_removed.png";
import vet3 from "@/public/vets/vet3_bg_removed.png";
import vet4 from "@/public/vets/vet4_bg_removed.png";
import vet5 from "@/public/vets/vet5_bg_removed.png";
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
    name: "조현민",
    title: "외과과장",
    subjects: ["정형외과(Orthopedic Surgery)", "치과(Dentistry)"],
    image: vet3,
    history: [
      "충북대 수의과대학 학사 졸업",
      "전남대 수의외과학 박사 졸업",
      "전남대 외과임상조교",
      "전남대 동물병원 외과 팀장",
      "24시동탄시티동물의료센터 외과과장",
      "",
      "",
      "한국임상수의학회 정회원",
      "한국수의치과협회 정회원",
    ],
    expert: [
      "Innoplant Veterinary Total Hip Replacement-cementless and cemented implantation (2023)",
      "Veterinary Dental Forum (2024)",
      "Application of modified porcine xenograft by collagen coating in the veterinary field: Pre-clinical and clinical evaluations (Frontiers in Veterinary Science, 2024)",
      "Successful Surgical Treatment of Severe Lower Lip Avulsion in Two Cats (Journal of Veterinary Clinics, 2022)",
      "Laparoscopic attenuation of a congenital extrahepatic portosystemic shunt in a dog—a thin-film banding for splenophrenic shunt: A case report (Frontiers in Veterinary Science, 2022)",
      "Effects of a Topically Applied Oral Wound Dressing Film on Intra-oral Wound Healing in Rabbits (In Vivo, 2022)",
      "Guided Bone Regeneration in Comminuted Long-Bone Fractures Using Recombinant Human Bone Morphogenetic Protein-2 and a Collagen Membrane (Journal of Veterinary Clinics, 2022)",
      "Effect of quercetin on formation of porcine neutrophil extracellular trap (Veterinary Immunology and Immunopathology, 2021)",
    ],
  },
  {
    name: "박정현",
    title: "진료수의사",
    subjects: ["중환자치료(Critical care)", "치과(Dentistry)"],
    image: vet5,
    history: [
      "충북대 수의과대학 학사 졸업",
      "24시동탄시티동물의료센터 진료수의사",
    ],
    expert: [
      "Abdominal Ultrasonogarphy & Echocaridiogram (Aurebio, 2024)",
      "Veterinary Dentistry Specialists Dental wet lab (VDS, Sandiego, USA, 2024)",
    ],
  },
  {
    name: "구재훈",
    title: "응급과장",
    subjects: ["응급진료(Emergency & Critical Care)"],
    image: vet4,
    history: [
      "경상대 수의과대학 학사 졸업",
      "24시동탄시티동물의료센터 응급과장",
      "",
      "",
      "한국수의외과학회 정회원",
    ],
    expert: [
      "Principles in small animal fracture management (AOVET, 2022)",
      "Veterinary Ophthalmology by Ahn jae sang (2023)",
      "TPLO basic course by Dr. koreeda (2023)",
    ],
  },
  {
    name: "김영석",
    title: "응급과장",
    subjects: ["응급진료(Emergency & Critical Care)"],
    image: vet2,
    history: [
      "충남대 수의외과학 박사 졸업",
      "전)경기도 수의사회 부회장",
      "전)경기동물메디컬센터 대표원장",
      "전)탑케어동물의료원 대표원장",
      "24시동탄시티동물의료센터 응급과장",
    ],
    expert: [
      "소동물 신경계심포지엄",
      "반려동물 건강 2012 MEDEXX 세미나 내분비계",
      "2024 MEDTRONIC VETERINARY PRACTICAL TRAINING",
      "성장하는 돼지에서 tiletamine/zolazepam과azaperone plus tiletamine/zolazepam에 의해 유도된 진정효과와 진통효과의 비교",
      "푸들견 외음부의 유전자(2007‘)",
      "Cynomolgus 원숭이에서 Ketamine HCI와 Tiletamine/zolazepam을 이용한 고정화 수의학 저널(2003‘)",
      "4마리 개를 위한 마취에서의 열 화상",
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
            {VETS.map((vet, index) => (
              <li
                key={index}
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
