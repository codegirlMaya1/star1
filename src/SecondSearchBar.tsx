import React, { useState } from 'react';
import './secondsearchbar.css'; // Import the CSS file

const SecondSearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div className="searchInputWrapper" style={{ width: isFocused ? '30%' : '15rem', transition: 'width 0.3s ease-in-out', marginLeft: '1rem' }}>
      <input
        type="text"
        id="searchInput"
        placeholder="Search local talent"
        className="searchInput"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={`buttonContainer ${isFocused ? 'visible' : 'hidden'}`}>
        <div className="dropdown">
          <button className="searchButton" onClick={() => toggleDropdown('when')}>
            <img src="src/Logo.png" alt="Logo" className="buttonLogo" /> WHEN?
          </button>
          {dropdown === 'when' && (
            <div className="dropdown-content">
              <a href="#">Today</a>
              <a href="#">Tomorrow</a>
              <a href="#">This Week</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button className="searchButton" onClick={() => toggleDropdown('where')}>
            <img src="src/Logo.png" alt="Logo" className="buttonLogo" /> WHERE?
          </button>
          {dropdown === 'where' && (
            <div className="dropdown-content">
              <a href="#">New York</a>
              <a href="#">Los Angeles</a>
              <a href="#">Chicago</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button className="searchButton" onClick={() => toggleDropdown('who')}>
            <img src="src/Logo.png" alt="Logo" className="buttonLogo" /> WHO?
          </button>
          {dropdown === 'who' && (
            <div className="dropdown-content">
              <a href="#">John Doe</a>
              <a href="#">Jane Smith</a>
              <a href="#">Michael Johnson</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondSearchBar;