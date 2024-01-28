import React from "react";
import SubjectNavbar from "./subject-navbar";

export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center pt-10 pb-12">
      <SubjectNavbar />
      {children}
    </div>
  );
}
