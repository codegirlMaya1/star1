import React, { ReactNode } from 'react';
import './StackedColumn.css'; // Import the CSS file for styling

interface StackedColumnProps {
  children: ReactNode;
}

const StackedColumn: React.FC<StackedColumnProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default StackedColumn;