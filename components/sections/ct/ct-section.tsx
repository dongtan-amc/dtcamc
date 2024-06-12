import image from "@/public/placeholder.jpg";
import { GiLiver } from "react-icons/gi";
import ExpertSection from "../expert-section";
import SectionLayout from "../section-layout";
import SectionTitle from "../section-title";
import ctIcon from "@/public/icons/ct.svg";
import Image from "next/image";
import SectionImage from "../section-image";
import ctSection from "@/public/sections/ct/ct-section.png";
import CtContents from "./ct-contents";

export default function CTSection() {
  return (
    <SectionLayout hash="ct">
      <SectionImage
        image={ctSection}
        title="CT 및 영상진단센터"
        subtitle="Accurate Diagnosis for your pet, fast."
      />

      <CtContents />
    </SectionLayout>
  );
}
