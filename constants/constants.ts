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

import {
  FaUserDoctor,
  FaClock,
  FaHospital,
  FaMapLocationDot,
} from "react-icons/fa6";
import { ADDRESS, NAME } from "./general-info";
import { SUBJECTS_SUBMENUS } from "./subjects";

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
