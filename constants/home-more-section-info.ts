import { NAME } from "./general-info";
import more1 from "@/public/more/more1.jpeg";
import more2 from "@/public/more/more2.jpg";
import more3 from "@/public/more/more3.jpg";

export const MORES = [
  {
    title: `${NAME} 소개`,
    subtitle: "신뢰할 수 있는 진료서비를 위해 최선을 다하겠습니다.",
    href: "/introduction/salute",
    image: more1,
  },
  {
    title: "의료진 소개",
    subtitle: "실력있는 석박사 전문 의료진들이 함께합니다.",
    href: "/introduction/vets",
    image: more2,
  },
  {
    title: "특성화 센터",
    subtitle:
      "MRI, CT, 신장투석기, 복강경, 관절경, 3D 가이드 수술 등 최고의 장비 보유",
    href: "/experty/referral",
    image: more3,
  },
] as const;
