import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { STAFFS } from "@/constants/constants";
import React from "react";
import Staff from "./staff";

export default function StaffsPage() {
  return (
    <main>
      <Banner
        imageClassName="staffs_banner"
        title="스태프 소개"
        subTitle="병원소개 > 스태프 소개"
      />

      <Container>
        <ul className="grid grid-cols-4 gap-8 pt-10 pb-12">
          {STAFFS.map((staff) => (
            <Staff key={staff.name} {...staff} />
          ))}
        </ul>
      </Container>
    </main>
  );
}
