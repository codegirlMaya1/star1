"use client";
import React, { useState, useEffect } from "react";

interface ResendCodeProps {
  onResend: () => void;
  initialSeconds: number;
}

export const ResendCode: React.FC<ResendCodeProps> = ({
  onResend,
  initialSeconds,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleResend = () => {
    if (!isActive) {
      onResend();
      setSeconds(initialSeconds);
      setIsActive(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex gap-2.5 justify-center mt-5">
      <button
        onClick={handleResend}
        className="text-base font-medium leading-6 text-black text-opacity-70 hover:text-opacity-100 disabled:cursor-not-allowed"
        disabled={isActive}
      >
        Send code again
      </button>
      <span className="text-base font-light leading-6 text-black text-opacity-70">
        {formatTime(seconds)}
      </span>
    </div>
  );
};
export default ResendCode;