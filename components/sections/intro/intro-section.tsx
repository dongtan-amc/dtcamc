"use client";

import Container from "@/components/common/container";
import { NAME } from "@/constants/general-info";
import { motion } from "framer-motion";
import { FaBed, FaMicroscope, FaUserDoctor } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import DividerBottom from "@/components/common/divider-bottom";
import DividerTop from "@/components/common/divider-top";

const INTRODUCTION = [
  {
    title: "석박사 출신 의료진",
    icon: FaUserDoctor,
    subtitle:
      "동탄시티동물병원은 최고의 실력을 보유한 석박사 출신 전문 수의사가 상주하고 있으며 끊임없이 배움을 실천하고 있습니다.",
  },
  {
    title: "대학병원급 첨단장비",
    icon: FaMicroscope,
    subtitle:
      "최신의 장비를 사용하여 보다 빠르고 정밀한 진단이 가능합니다. 원내 CT 및 신장 투석기를 보유하고 있습니다.",
  },
  {
    title: "수술실 입원실 완비",
    icon: FaBed,
    subtitle:
      "무균 수술실과 술후 집중케어를 할 수 있는 입원실이 완비되어 있으며 오직 환자를 위해 정성을 다하여 수술을 진행합니다.",
  },
  {
    title: "24시간 입원",
    icon: Ri24HoursFill,
    subtitle:
      "입원실은 24시간 운영이 되며 입원환자를 상시 집중 관리를 하고 있습니다.",
  },
];

export default function IntroSection() {
  return (
    <SectionLayout hash="intro">
      <Container>
        <SectionTitle subtitle="24시 동탄시티동물의료센터 홈페이지를 방문해주셔서 감사합니다.">
          인사말
        </SectionTitle>

        <motion.div
          className="mb-16 mt-8 flex flex-col gap-6 text-base leading-relaxed text-gray-700 sm:mb-20 sm:mt-12 sm:gap-8 sm:text-lg md:mb-24 md:mt-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-2xl font-bold text-primary sm:mb-6 sm:text-3xl">
            안녕하세요. 저희{" "}
            <span className="text-black">동탄시티동물의료센터</span>를
            찾아주셔서 감사합니다.
          </h3>
          <p>
            저희 24시동탄시티동물의료센터에서는 반려동물과 보호자에게 최선을
            다하여 진실되게 치료하는 것을 공통의 목표로 나아가고 있습니다.
          </p>
          <p>
            대학 병원 및 2차 동물 병원에서 많은 경험을 갖고 계신 수의사
            선생님들로 구성된 의료진들이 내과/외과 진료를 진행하고 있으며,
            복합적인 질환을 갖는 환자의 경우, 내과와 외과의 협진 시스템이
            효율적으로 구축되어 있습니다.
          </p>
          <p>
            더 나아가 신장/혈액투석 클리닉과 심화 수술 센터를 운영하여, 타
            병원에서 좀 더 심화된 내용의 처치가 필요할 경우, 협업하여 진행하고
            있습니다.
          </p>
          <p>
            저희 24시동탄시티동물의료센터를 찾아주신 반려 동물 및 보호자분들께
            다시 한번 감사드리며 본원에 내원하는 환자의 빠른 쾌유를 위하여
            최선을 다하겠습니다.
          </p>
          <p className="mt-6 text-right sm:mt-8">
            {NAME} 대표원장{" "}
            <span className="font-bold text-primary">고재진</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {INTRODUCTION.map(({ title, icon: Icon, subtitle }, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Icon className="mb-4 text-3xl text-primary sm:text-4xl" />
              <h4 className="mb-3 text-lg font-semibold sm:text-xl">{title}</h4>
              <p className="text-sm text-gray-600 sm:text-base">{subtitle}</p>
            </motion.div>
          ))}
        </div>
      </Container>
      <DividerBottom />
    </SectionLayout>
  );
}
