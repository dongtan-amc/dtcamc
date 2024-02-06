import {
  FaArrowRightToCity,
  FaClock,
  FaHospital,
  FaList,
  FaMapLocationDot,
  FaMaskFace,
  FaRadiation,
  FaRegMessage,
  FaRegNewspaper,
  FaUserDoctor,
} from "react-icons/fa6";
import { GiKidneys } from "react-icons/gi";

import { ADDRESS, NAME } from "./general-info";

export const HOME_SUBCONTENTS = [
  {
    title: "수의사 소개",
    description: `${NAME}의 최고의 수의사들을 소개합니다.`,
    Icon: FaUserDoctor,
    href: "/introduction/vets",
  },
  {
    title: "진료시간 안내",
    description: `${NAME}의 진료시간을 안내해드립니다.`,
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

export const INTRODUCTION_SUBCONTENTS = [
  {
    title: "수의사 소개",
    description: `${NAME}의 최고의 수의사들을 소개합니다.`,
    Icon: FaUserDoctor,
    href: "/introduction/vets",
  },
  {
    title: "진료시간 안내",
    description: `${NAME}의 진료시간을 안내해드립니다.`,
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

export const COMMUNITY_SUBCONTENTS = [
  {
    title: "수의사 소개",
    description: `${NAME}의 최고의 수의사들을 소개합니다.`,
    Icon: FaUserDoctor,
    href: "/introduction/vets",
  },
  {
    title: "진료시간 안내",
    description: `${NAME}의 진료시간을 안내해드립니다.`,
    Icon: FaClock,
    href: "/introduction/time",
  },
  {
    title: "공지사항",
    description: `${NAME} 공지사항입니다.`,
    Icon: FaRegMessage,
    href: "/community/notice",
  },
  {
    title: "병원소식",
    description: `${NAME}의 새로운 소식을 전합니다.`,
    Icon: FaRegNewspaper,
    href: "/community/news",
  },
];
export const MAP_SUBCONTENTS = [
  {
    title: "진료 과목",
    description: `${NAME} 진료과목을 소개합니다.`,
    Icon: FaList,
    href: "/subjects/internal",
  },
  {
    title: "진료시간 안내",
    description: `${NAME}의 진료시간을 안내해드립니다.`,
    Icon: FaClock,
    href: "/introduction/time",
  },
  {
    title: "공지사항",
    description: `${NAME} 공지사항입니다.`,
    Icon: FaRegMessage,
    href: "/community/notice",
  },
  {
    title: "병원소식",
    description: `${NAME}의 새로운 소식을 전합니다.`,
    Icon: FaRegNewspaper,
    href: "/community/news",
  },
];
export const GROOMING_SUBCONTENTS = [
  {
    title: "오시는 길",
    description: `${ADDRESS}`,
    Icon: FaMapLocationDot,
    href: "/map",
  },
  {
    title: "진료시간 안내",
    description: `${NAME}의 진료시간을 안내해드립니다.`,
    Icon: FaClock,
    href: "/introduction/time",
  },
  {
    title: "공지사항",
    description: `${NAME} 공지사항입니다.`,
    Icon: FaRegMessage,
    href: "/community/notice",
  },
  {
    title: "병원소식",
    description: `${NAME}의 새로운 소식을 전합니다.`,
    Icon: FaRegNewspaper,
    href: "/community/news",
  },
];
export const EXPERTY_SUBCONTENTS = [
  {
    title: "수술 센터",
    description: `${NAME}의 전문 수술센터를 소개함니다`,
    Icon: FaMaskFace,
    href: "/experty/operation",
  },
  {
    title: "신장투석 센터",
    description: `${NAME}의 신장투석 센터를 소개함니다`,
    Icon: GiKidneys,
    href: "/experty/dialysis",
  },
  {
    title: "CT촬영 센터",
    description: `${NAME}의 CT촬영 센터를 소개합니다.`,
    Icon: FaRadiation,
    href: "/experty/ct",
  },
  {
    title: "진료 의뢰",
    description: "2차 진료과정을 안내합니다.",
    Icon: FaArrowRightToCity,
    href: "/experty/referral",
  },
];
