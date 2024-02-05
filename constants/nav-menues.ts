import { SUBJECTS_SUBMENUS } from "./subjects";
import sub1 from "@/public/subjects/dermal.jpg";
import sub2 from "@/public/subjects/hormonal.jpg";
import sub3 from "@/public/subjects/respir.jpg";
import sub4 from "@/public/subjects/skincancer.jpg";

export const EXPERTY_SUBMENUS = [
  {
    id: 1,
    upperRoute: "/experty",
    label: "수술 센터",
    description: "수술센터에 대한 간략한 소개",
    route: "/operation",
    imgSrc: sub1,
  },
  {
    id: 2,
    upperRoute: "/experty",
    label: "신장투석 센터",
    description: "신장투석센터에 대한 간략한 소개",
    route: "/dialysis",
    imgSrc: sub2,
  },
  {
    id: 3,
    upperRoute: "/experty",
    label: "CT 센터",
    description: "CT센터에 대한 간략한 소개",
    route: "/ct",
    imgSrc: sub3,
  },
  {
    id: 4,
    upperRoute: "/experty",
    label: "의뢰 진료",
    description: "의뢰진료에 대한 간략한 소개",
    route: "/referral",
    imgSrc: sub4,
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
