// src/LoginButton.tsx

import React from "react";
import { ButtonProps } from "./types";

export const LoginButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  label, // Add this line
}) => {
  return (
    <button
      onClick={onClick}
      className={`gap-2.5 px-40 py-4 w-full text-base leading-loose text-center text-white bg-black rounded-xl min-h-14 max-md:px-5 ${className}`}
    >
      {label} {children}
    </button>
  );
};

export default LoginButton;