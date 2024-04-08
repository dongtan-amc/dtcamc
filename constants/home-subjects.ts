import { NAME } from "./general-info";
import sub1 from "@/public/home-subject/sub1.jpg";
import sub2 from "@/public/home-subject/sub2.jpg";
import sub3 from "@/public/home-subject/sub3.jpg";
import sub4 from "@/public/home-subject/sub4.jpg";

export const HOME_SUBJECTS = [
  {
    title: "내과",
    subtitle: "급성비염, 호흡기, 신장, 종양, 신경, 소화기, 내분비 내과 진료",
    href: "/subjects/internal",
    image: sub1,
  },
  {
    title: "외과",
    subtitle: "일반, 신경, 정형, 흉부외과 등 외과 전문 진료",
    href: "/subjects/surgery",
    image: sub2,
  },
  {
    title: "영상의학과",
    subtitle: "X-ray, 복부·심장초음파, CT, MRI, Fluoroscopy 등 진료",
    href: "/subjects/radiology",
    image: sub3,
  },
  {
    title: "24시 응급의학과",
    subtitle: "혈액검사, 세포검사 등 진단 및 원인 관련 진료",
    href: "/subjects/emergency",
    image: sub4,
  },
] as const;
