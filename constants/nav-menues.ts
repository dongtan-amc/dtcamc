import ortho from "@/public/experty/ortho.jpg";
import liver from "@/public/experty/liver.png";
import mri from "@/public/experty/mri.jpg";
import kidney from "@/public/experty/kidney.jpg";
import referral from "@/public/experty/referral.jpg";
import { SUBJECTS_SUBMENUS } from "./subjects";

export const EXPERTY_SUBMENUS = [
  {
    id: 0,
    upperRoute: "/experty",
    label: "정형외과 센터",
    description:
      "골절부터 슬개골탈구, 십자인대파열, 고관절탈구 등 다양한 정형외과 수술을 진행하고 있습니다.",
    route: "/orthopedic",
    imgSrc: ortho,
    ready: true,
  },
  {
    id: 1,
    upperRoute: "/experty",
    label: "간담도 수술 센터",
    description:
      "강엽절제술, 담석제거술 등 간담도계수술 전문가들이 함께합니다.",
    route: "/biliary",
    imgSrc: liver,
    ready: true,
  },
  {
    id: 2,
    upperRoute: "/experty",
    label: "신장투석 센터",
    description: "준비중입니다.",
    route: "/dialysis",
    imgSrc: kidney,
    ready: false,
  },
  {
    id: 3,
    upperRoute: "/experty",
    label: "CT 촬영 센터",
    description: "준비중입니다.",
    route: "/ct",
    imgSrc: mri,
    ready: false,
  },
  {
    id: 4,
    upperRoute: "/experty",
    label: "2차 진료 의뢰",
    description:
      "동탄시티동물의료센터는 지역병원에서 의뢰를 받아 진료 및 치료를 실시하고 있습니다.",
    route: "/referral",
    imgSrc: referral,
    ready: true,
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
    label: "수의사 소개",
    upperRoute: "/introduction",
    route: "/vets",
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
