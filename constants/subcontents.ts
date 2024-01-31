import {
  FaClock,
  FaHospital,
  FaMapLocationDot,
  FaUserDoctor,
  FaRegMessage,
  FaRegNewspaper,
} from "react-icons/fa6";
import { ADDRESS, NAME } from "./general-info";

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
      "주간 : 오전 9시 - 오후 9시<br/>야간 : 오후 9시 - 오전 1시<br/>심야 : 오전 1시 - 오전 9시",
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
    description:
      "주간 : 오전 9시 - 오후 9시<br/>야간 : 오후 9시 - 오전 1시<br/>심야 : 오전 1시 - 오전 9시",
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
