// App.tsx
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ArtistProfilePage from './ArtistProfilePage';
import DisplayArtist from './DisplayArtist';
import TwoColumnTalent from "./TwoColumnTalent";
import TwoColumnLayout from "./TwoColumnLayout";
import LoginForm from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import Footer from "./Footer";
import ContactStar from "./ContactStar";
import Header from "./Header";
import AboutUs from "./AboutUs";
import ReviewsPage from "./ReviewsPage";
import StackedColumn from "./StackedColumn";
import ThreeColumns from "./ThreeColumns";
import MediaUpload from "./MediaUpload";
import TalentPage1 from "./TalentPage1";
import VerificationPage from "./VerificationPage";
import RightSection1 from "./RightSection1"; // Import the RightSection1 component
import LeftSection2 from "./LeftSection2"; // Import the LeftSection2 component
import './index.css';
import './app.css';
import { ArtistFormProps } from './types';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const location = useLocation();
  const [formData, setFormData] = useState<ArtistFormProps['formData']>({
    id: 1,
    name: '',
    image: '',
    imageAlt: '',
    distance: '',
    location: '',
    rating: 0,
    reviews: 0,
    pricePerHour: 0,
    description: '',
  });

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <TwoColumnLayout
            leftContent={
              showLogin ? (
                <img src="/LoginArt.png" alt="Login Art" className="max-w-full h-auto" />
              ) : (
                <img src="/Signup.jpg" alt="Signup Art" className="max-w-full h-auto" />
              )
            }
            rightContent={
              showLogin ? (
                <LoginForm onSignUpClick={handleSignUpClick} />
              ) : (
                <SignUpForm onLoginClick={handleLoginClick} />
              )
            }
          />
        } />
        <Route path="/contact" element={
          <>
            <Header />
            <ContactStar />
          </>
        } />
        <Route path="/login" element={
          <TwoColumnLayout
            leftContent={<img src="/LoginArt.png" alt="Login Art" className="max-w-full h-auto" />}
            rightContent={<LoginForm onSignUpClick={handleSignUpClick} />}
          />
        } />
        <Route path="/signup" element={
          <TwoColumnLayout
            leftContent={<img src="/Signup.jpg" alt="Signup Art" className="max-w-full h-auto" />}
            rightContent={<SignUpForm onLoginClick={handleLoginClick} />}
          />
        } />
        <Route path="/artist-profile" element={
          <>
            <Header />
            <ArtistProfilePage />
          </>
        } />
        <Route path="/display-artist" element={
          <>
            <Header />
            <DisplayArtist />
          </>
        } />
        <Route path="/about" element={
          <>
            <Header />
            <AboutUs />
          </>
        } />
        <Route path="/reviews" element={
          <>
            <Header />
            <ReviewsPage />
          </>
        } />
        <Route path="/three-columns" element={
          <>
            <Header />
            <ThreeColumns />
          </>
        } />
        <Route path="/stacked-column" element={
          <>
            <Header />
            <StackedColumn>
              <div>Content for StackedColumn</div>
            </StackedColumn>
          </>
        } />
        <Route path="/media-upload" element={
          <>
            <Header />
            <MediaUpload />
          </>
        } />
        <Route path="/two-column-talent" element={
          <>
            <Header />
            <TwoColumnTalent formData={formData} setFormData={setFormData} />
          </>
        } />
        <Route path="/talent-page-1" element={
          <>
            <Header />
            <TalentPage1 />
          </>
        } />
        <Route path="/verification" element={
          <VerificationPage />
        } />
        <Route path="/verification-success" element={ // Added route for verification success page
          <TwoColumnLayout
            leftContent={<LeftSection2 />}
            rightContent={<RightSection1 />}
          />
        } />
      </Routes>
      <div className="footer-padding">
        {location.pathname !== '/three-columns' && location.pathname !== '/about' && location.pathname !== '/media-upload' && <Footer />}
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}