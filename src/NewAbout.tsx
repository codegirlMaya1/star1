import React from 'react';
import Header from './Header'; // Import the Header component
import StackedColumn from './StackedColumn'; // Import the StackedColumn component
import Footer from './Footer'; // Import the Footer component
import './NewAbout.css'; // Import the CSS file for styling

const NewAbout: React.FC = () => {
  return (
    <div className="new-about-page">
      <Header /> {/* Add the Header component */}
      <div className="content">
        <StackedColumn>
          {/* Add the content you want to pass as children here */}
          <div>Your content here</div>
        </StackedColumn>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default NewAbout;