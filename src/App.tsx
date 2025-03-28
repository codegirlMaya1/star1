import './index.css'; // Import the global styles
import './app.css'; // Import additional styles
import * as React from "react";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import TwoColumnLayout from "./TwoColumnLayout"; // Import the TwoColumnLayout component
import LoginForm from "./LoginForm"; // Import the LoginForm component
import { SignUpForm } from "./SignUpForm"; // Import the SignUpForm component
import Footer from "./Footer"; // Import the Footer component
import ContactStar from "./ContactStar"; // Import the ContactStar component
import Header from "./Header"; // Import the Header component
import AboutUs from "./AboutUs"; // Import the AboutUs component
import ReviewsPage from "./ReviewsPage"; // Import the ReviewsPage component
import StackedColumn from "./StackedColumn"; // Import the StackedColumn component
import ThreeColumns from "./ThreeColumns"; // Import the ThreeColumns component

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
      <Header /> {/* Add the Header component */}
      <Routes>
        <Route path="/" element={
          <TwoColumnLayout
            leftContent={
              showLogin ? (
                <img src="src/LoginArt.png" alt="Login Art" className="max-w-full h-auto" />
              ) : (
                <img src="src/Signup.jpg" alt="Signup Art" className="max-w-full h-auto" />
              )
            }
            rightContent={
              showLogin ? (
                <LoginForm onSignUpClick={handleSignUpClick} /> // Login form
              ) : (
                <SignUpForm onLoginClick={handleLoginClick} /> // Sign-up form
              )
            }
          />
        } />
        <Route path="/contact" element={<ContactStar />} />
        <Route path="/login" element={
          <TwoColumnLayout
            leftContent={<img src="src/LoginArt.png" alt="Login Art" className="max-w-full h-auto" />}
            rightContent={<LoginForm onSignUpClick={handleSignUpClick} />} // Login form
          />
        } />
        <Route path="/signup" element={
          <TwoColumnLayout
            leftContent={<img src="src/Signup.jpg" alt="Signup Art" className="max-w-full h-auto" />}
            rightContent={<SignUpForm onLoginClick={handleLoginClick} />} // Sign-up form
          />
        } />
        <Route path="/about" element={<AboutUs />} /> {/* Use the AboutUs component */}
        <Route path="/reviews" element={<ReviewsPage />} /> {/* Add the ReviewsPage route */}
        <Route path="/three-columns" element={<ThreeColumns />} /> {/* Add the ThreeColumns route */}
        <Route path="/stacked-column" element={<StackedColumn />} /> {/* Add the StackedColumn route */}
      </Routes>
      <div className="footer-padding"> {/* Add padding above the footer */}
        {location.pathname !== '/three-columns' && <Footer />} {/* Conditionally render the footer */}
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