// RightSection1.tsx
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { LoadingDots } from "./LoadingDots";
import './rightsection1.css'; // Import the CSS file

export const RightSection1: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Navigate to the login page after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <section className="right-section">
      <div className="content">
        <h2 className="header">You're All Set!</h2>
        <p className="header">Verification complete. Redirecting to your dashboard...</p>
        <LoadingDots />
      </div>
    </section>
  );
};

export default RightSection1;