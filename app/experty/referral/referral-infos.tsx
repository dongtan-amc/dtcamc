import Image from "next/image";
import React from "react";
import { FaPaw } from "react-icons/fa6";
import clockIcon from "@/public/icons/clock.svg";
import mapPinLineIcon from "@/public/icons/map-pin-line.svg";
import phoenIcon from "@/public/icons/phone.svg";
import referral from "@/public/photo/referral.jpg";
import { EMAIL, NAME, PHONE } from "@/constants/general-info";
import {
  TbClock24,
  TbRadioactive,
  TbMailForward,
  TbPhone,
} from "react-icons/tb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EmailCopy from "./email-copy";

export default function ReferralInfos() {
  return (
    <div className="flex py-10 break-keep flex-col md:flex-row">
      <div className="relative md:w-2/5 h-[200px] md:h-auto rounded-2xl overflow-hidden">
        <Image
          src={referral}
          alt="referral image"
          fill
          className="object-cover"
        />
      </div>

      <div className="md:w-3/5 p-0 md:p-4 md:px-10 text-slate-950">
        <h2 className="text-lg font-bold pb-8">
          {NAME}는 지역병원에서 의뢰를 받아 진료 및 치료를 실시하고 있습니다.
          <br /> 각 분야의 석·박사 학위자들을 통해 정확하고 전문적인 치료가
          가능합니다.
        </h2>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2 font-bold pb-3">
              <TbClock24 className="text-primary" size={24} />
              <h2>24시간 중환자 케어</h2>
            </div>
            <p className="leading-6 pl-8">
              심야 시간에도 수의사와 응급팀이 상주하고 있어 입원환자 응급상황에
              대한 대처가 가능합니다.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-bold pb-3">
              <TbRadioactive className="text-primary" size={24} />
              <h2>CT 촬영 의뢰</h2>
            </div>
            <p className="ml-8 pb-2 leading-6">
              진역 병원으로부터 CT촬영 의뢰를 받고있습니다.
            </p>
            <Link href="/experty/ct" className="ml-8">
              <Button variant="secondary">자세히 보기</Button>
            </Link>
          </div>

          <div>
            <div className="flex items-center gap-2 font-bold pb-3">
              <TbPhone className="text-primary" size={24} />
              <h2>진료 의뢰 및 위치 안내</h2>
            </div>
            <div className="flex gap-2">
              <Link href={`tel:${PHONE}`} className="ml-8">
                <Button variant="secondary">{PHONE}</Button>
              </Link>
              <Link href="/map">
                <Button variant="secondary">오시는 길</Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-bold pb-3">
              <TbMailForward className="text-primary" size={24} />
              <h2>환자 자료 전송</h2>
            </div>
            <p className="pl-8 pb-2 leading-6">
              최근 검사 자료 및 환자 정보는 이메일로 보내주시면 진료에 큰 도움이
              됩니다.
            </p>
            <EmailCopy />
          </div>
        </div>
      </div>
    </div>
  );
}
