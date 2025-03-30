// SignInPage.tsx
"use client";
import React, { useState } from "react";
import TwoColumnLayout from "./TwoColumnLayout";
import { LoginForm } from "./LoginForm";

const SignInPage: React.FC = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); // Add the isSignedUp state

  const leftContent = (
    <img src="src/LoginArt.png" alt="Login" className="object-cover rounded-3xl size-full" />
  );

  const handleSignUpClick = () => {
    setIsSignedUp(true); // Update the isSignedUp state when the user signs up
  };

  return (
    <TwoColumnLayout
      leftContent={leftContent}
      rightContent={<LoginForm onSignUpClick={handleSignUpClick} isSignedUp={isSignedUp} />} // Pass isSignedUp to LoginForm
    />
  );
};

export default SignInPage;