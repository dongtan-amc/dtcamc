import Container from "@/components/common/container";
import ctImage1 from "@/public/sections/ct/1.png";
import ctImage2 from "@/public/sections/ct/2.png";
import ctImage3 from "@/public/sections/ct/3.png";
import Image from "next/image";

export default function CtContents() {
  return (
    <Container>
      <div>
        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          Orthopedic Services
        </h5>
        <p className="text-base px-2 pt-1 pb-3">
          A CT scanner is a powerful diagnostic tool that provides detailed
          information about the internal structures of your pet&lsquo;s body.
          This technology is especially useful for diagnosing complex medical
          conditions or planning surgical procedures. The advanced imaging
          capabilities of a CT scanner can help our veterinarians detect
          abnormalities such as tumors, fractures, or foreign objects with
          greater accuracy than traditional X-rays.
        </p>
      </div>

      <div>
        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          Why choose our CT Clinic?
        </h5>
        <p className="text-base px-2 pt-1 pb-3">
          Our CT Clinic is staffed by experienced radiologists who specialize in
          interpreting CT images. We use advanced imaging technology to provide
          precise, high-quality diagnostic information for your pet&lsquo;s
          treatment. Our CT scanner is specifically designed for veterinary use
          and can accommodate animals of all sizes, from small pets to large
          breeds. We are committed to providing compassionate care and
          exceptional service to you and your pet.
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
          <Image src={ctImage1} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
          <Image src={ctImage2} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
          <Image src={ctImage3} alt="ct image" fill className="object-cover" />
        </div>
      </div>
    </Container>
  );
}
