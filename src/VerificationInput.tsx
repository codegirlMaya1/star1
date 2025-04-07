"use client";
import React, { useRef, useState } from "react";

interface VerificationInputProps {
  onComplete: (code: string) => void;
}

export const VerificationInput: React.FC<VerificationInputProps> = ({
  onComplete,
}) => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className="flex gap-5 max-sm:gap-2.5"
      role="group"
      aria-label="Verification code input"
    >
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="rounded-2xl border border-solid border-zinc-300 h-[72px] w-[63px] text-center text-2xl font-medium max-sm:h-[60px] max-sm:w-[50px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default VerificationInput;