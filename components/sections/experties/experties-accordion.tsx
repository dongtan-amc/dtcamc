"use client";

import { EXPERTY_SUBMENUS } from "@/constants/nav-menues";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function ExpertiesAccordion() {
  const [open, setOpen] = useState(EXPERTIES[0].id);
  const imgSrc = EXPERTIES.find((s) => s.id === open)?.imgSrc;

  return (
    <div>
      <div className="w-full grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-[1fr_520px]">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl aspect-[4/3] lg:aspect-auto relative overflow-hidden"
          >
            <Image
              alt="subject image"
              src={imgSrc!}
              fill
              priority
              quality={50}
              placeholder="blur"
              className="object-cover"
              sizes="(min-width: 1320px) 728px, (min-width: 1040px) calc(104.62vw - 632px), calc(100vw - 32px)"
            />
          </motion.div>
        </AnimatePresence>
        <div>
          <div className="flex flex-col gap-2 lg:gap-4">
            {EXPERTIES.map((expert) => {
              return (
                <Expert
                  {...expert}
                  key={expert.id}
                  open={open}
                  setOpen={setOpen}
                  index={expert.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Expert = ({
  label,
  description,
  index,
  route,
  open,
  setOpen,
}: {
  label: string;
  description: string | null;
  index: number;
  route: string | null;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}) => {
  const isOpen = index === open;
  const { push } = useRouter();
  return (
    <div
      onClick={
        index === 5 ? () => push("/subjects/internal") : () => setOpen(index)
      }
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "150px" : "52px",
        }}
        className={cn(
          "p-3 rounded-[3px]  flex flex-col justify-between relative z-20",
          index === 5 ? "text-slate-50" : "bg-white text-slate-950"
        )}
      >
        <div>
          <div className="text-xl flex items-center gap-1 group transition-[gap]">
            {label}{" "}
            {index === 5 && (
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            )}
          </div>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 text-slate-600 leading-6"
          >
            {description}
          </motion.p>
        </div>

        <Link
          href={`/experty${route}`}
          className="-ml-6 -mr-6 -mb-3 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-slate-950 text-white"
        >
          <span>자세히 알아보기</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-slate-950"
      />
      <div className="absolute inset-0 z-0 bg-slate-950" />
    </div>
  );
};

const EXPERTIES = [
  ...EXPERTY_SUBMENUS,
  {
    id: 5,
    label: "일반 진료 알아보기",
    description: null,
    route: null,
    imgSrc: null,
  },
];
