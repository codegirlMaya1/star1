// VerificationSuccess.tsx
"use client";

import { LeftSection2 } from "./LeftSection2";
import { RightSection1 } from "./RightSection1";

export default function VerificationSuccess() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex min-h-screen bg-white max-md:flex-col">
        <LeftSection2 />
        <RightSection1 />
      </main>
    </>
  );
}