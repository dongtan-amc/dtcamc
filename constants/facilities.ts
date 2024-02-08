import lobby1 from "@/public/photo/entrance.jpeg";
import lobby3 from "@/public/photo/feeds.jpeg";
import lobby2 from "@/public/photo/reception.jpeg";

import consulting1 from "@/public/photo/consulting-room.jpeg";
import consulting2 from "@/public/photo/consulting-room1.jpeg";
import consulting3 from "@/public/photo/consulting-room2.jpeg";
import consulting4 from "@/public/photo/treatment-room.jpeg";

import cat1 from "@/public/photo/cat-room.jpeg";
import cat2 from "@/public/photo/cat-room1.jpeg";
import cat3 from "@/public/photo/cat-room2.jpeg";

import operation1 from "@/public/photo/operation-room.jpeg";
import operation2 from "@/public/photo/operation-room1.jpeg";
import operation3 from "@/public/photo/operation-room2.jpeg";

import icu1 from "@/public/photo/icu.jpeg";
import icu2 from "@/public/photo/icu1.jpeg";
import icu3 from "@/public/photo/icu2.jpeg";
import icu4 from "@/public/photo/icu3.jpeg";

export const FACILITY_SECTIONS = [
  {
    title: "로비",
    images: [lobby1, lobby2, lobby3],
    description:
      "밝고 따뜻한 분위기의 대기실에는 보호자분들이 편히 대기하실 수 있는 자리와 반려동물이 쉴 수 있는 공간이 마련되어 있습니다.",
  },
  {
    title: "진료실 및 처치실",
    images: [consulting1, consulting2, consulting3, consulting4],
    description:
      "모든 진료 및 처치공간마다 응급상황시 산소를 공급할 수 있는 시설이 별도로 갖추어져 있습니다.",
  },
  {
    title: "고양이 진료",
    images: [cat1, cat2, cat3],
    description:
      "고양이 전용의 처치,시술실입니다. 모든 진료 및 처치공간마다 응급상황시 산소를 공급할 수 있는 시설이 별도로 갖추어져 있습니다.",
  },
  {
    title: "수술실",
    images: [operation1, operation2, operation3],
    description: "수술실과 수술준비실 공간이 있습니다.",
  },
  {
    title: "입원실, 대형견 입원실",
    images: [icu1, icu2, icu3, icu4],
    description:
      "쾌적하고 안락한 입원실로 수술,치료 후 편안하게 회복할 수 있는 공간입니다. 또한 대형견 전용 입원실이 별도로 마련되어 있습니다.",
  },
];
