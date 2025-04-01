import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ArtistProfilePage from './ArtistProfilePage';
import DisplayArtist from './DisplayArtist';
import TwoColumnTalent from "./TwoColumnTalent"; // Updated import
import TwoColumnLayout from "./TwoColumnLayout"; // Ensure this import is added
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
import './index.css';
import './app.css';

function App() {
  const [showLogin, setShowLogin] = React.useState(true);
  const location = useLocation();

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
        <Route path="/two-column-talent" element={ // Added route
          <>
            <Header />
            <TwoColumnTalent />
          </>
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