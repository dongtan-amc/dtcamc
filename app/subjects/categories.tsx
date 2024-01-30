"use client";

import { useMemo, useState } from "react";
import SubjectNavbar from "./subject-navbar";
import SubjectContents from "./subject-contents";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";

export default function Categories({ subject }: { subject: string }) {
  const selectedSubject = useMemo(
    () => SUBJECTS_SUBMENUS.filter((menu) => menu.label === subject),
    [subject]
  );

  const categories = selectedSubject[0].contents;
  const subjectRoute = selectedSubject[0].route;

  const [category, setCategory] = useState(categories[0].categoryName);

  return (
    <div className="pt-10 pb-12">
      <SubjectNavbar
        category={category}
        setCategory={setCategory}
        categories={categories}
        subjectRoute={subjectRoute}
      />
      <SubjectContents category={category} categories={categories} />
    </div>
  );
}
