import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { KAKAO, NAVER_BLOG, PHONE } from "./general-info";
import { FaMapLocationDot } from "react-icons/fa6";

export const FLOATING_INFOS = [
  {
    href: "/introduction/time",
    icon: FaClock,
    label: "진료시간",
    size: 20,
  },
  {
    href: "/map",
    icon: FaMapLocationDot,
    label: "오시는길",
    size: 20,
  },
  {
    href: NAVER_BLOG,
    icon: SiNaver,
    label: "블로그",
    size: 16,
  },
  {
    href: KAKAO,
    label: "카톡상담",
    icon: RiKakaoTalkFill,
    size: 22,
  },
];
