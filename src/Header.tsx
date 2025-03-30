import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondSearchBar from './SecondSearchBar';
import NavigationLinks from './NavigationLinks';
import AuthButtons from './AuthButtons';
import './header.css';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleAboutUsClick = () => {
    navigate('/about');
  };

  const handleThreeColumnsClick = () => {
    navigate('/three-columns');
  };

  const handleLogoClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileImage('');
    localStorage.removeItem('profileImage');
    navigate('/login');
  };

  const handleMyAccountClick = () => {
    navigate('/media-upload'); // Link to the MediaUpload page
  };

  return (
    <header className="header flex justify-center items-center px-8 py-4 w-full bg-gray-950 h-[70px] max-md:px-6 max-md:py-3 max-sm:px-4 max-sm:py-2 max-sm:h-[60px]">
      <nav className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center px-0 py-1.5">
          <img
            src="Logo.png"
            className="h-[30px] w-[130px] max-md:h-[25px] max-md:w-[110px] max-sm:h-[20px] max-sm:w-[90px]"
            alt="Star Gigs Logo"
            onClick={handleLogoClick}
          />
        </div>
        <div className="flex gap-12 items-center max-md:gap-8 max-sm:gap-4">
          <SecondSearchBar />
          <NavigationLinks onReviewsClick={handleThreeColumnsClick} />
          <button onClick={handleAboutUsClick} className="px-0 py-3.5 text-base text-stone-50 bg-black">
            About Us
          </button>
          {isLoggedIn ? (
            <div className="relative">
              <img
                src={profileImage || 'default-avatar.png'}
                className="h-8 w-8 rounded-full cursor-pointer"
                alt="User Avatar"
                onClick={handleLogoClick}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={handleMyAccountClick}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    My Account
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <AuthButtons onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;