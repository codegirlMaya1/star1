// RightSection.tsx
"use client";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { VerificationInput } from "./VerificationInput";
import { ResendCode } from "./ResendCode";
import './rightsection.css'; // Import the CSS file

export const RightSection: React.FC = () => {
  const navigate = useNavigate();

  const handleVerificationComplete = (code: string) => {
    // Handle verification code submission
    console.log("Verification code:", code);
    navigate('/verification-success'); // Navigate to the verification success page
  };

  const handleResendCode = () => {
    // Handle resend code logic
    console.log("Resending code...");
  };

  return (
    <section className="right-section">
      <div className="content">
        <header className="header">
          <h2>One More Step!</h2>
          <p>Verify Your Account! We've sent a code to johndoe123@gmail.com</p>
        </header>

        <div className="verification-code">
          <VerificationInput onComplete={handleVerificationComplete} />
        </div>

        <button
          className="button"
          onClick={() => handleVerificationComplete("")}
        >
          Submit
        </button>

        <div className="resend-section">
          <span>Didn't receive the code?</span>
          <ResendCode onResend={handleResendCode} initialSeconds={20} />
          <button
            className="resend-button"
            onClick={handleResendCode}
          >
            Resend Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightSection;