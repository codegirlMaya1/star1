// VerificationPage.tsx
"use client";
import React from "react";
import { LeftSection1 } from "./LeftSection1";
import { RightSection } from "./RightSection";

const VerificationPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex w-full min-h-screen bg-white max-md:flex-col">
        <LeftSection1 />
        <RightSection />
      </main>
    </>
  );
};

export default VerificationPage;