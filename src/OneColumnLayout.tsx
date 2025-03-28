"use client";

import React from 'react';

interface OneColumnLayoutProps {
  children: React.ReactNode;
}

const OneColumnLayout: React.FC<OneColumnLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {children}
    </div>
  );
};

export default OneColumnLayout;