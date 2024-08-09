import { FaClock, FaMapLocationDot, FaRightLong } from "react-icons/fa6";
import { RiKakaoTalkFill } from "react-icons/ri";
import { KAKAO } from "./general-info";

export const FLOATING_INFOS = [
  {
    href: "/introduction/time",
    icon: FaClock,
    label: "진료시간",
    size: 20,
  },
  {
    href: "/introduction/map",
    icon: FaMapLocationDot,
    label: "오시는길",
    size: 20,
  },
  {
    href: "/experty/referral",
    icon: FaRightLong,
    label: "진료의뢰",
    size: 20,
  },
  {
    href: KAKAO,
    label: "카톡상담",
    icon: RiKakaoTalkFill,
    size: 22,
  },
];
