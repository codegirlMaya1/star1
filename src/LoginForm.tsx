import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { handleLogin } from './authService';
import { InputField } from "./InputField";
import { LoginButton } from "./LoginButton";
import { SocialLogin } from "./SocialLogin";
import './loginform.css';

interface LoginFormProps {
  onSignUpClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSignUpClick }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLogin(email, password);
    navigate('/contact');
  };

  const handleClick = () => {
    const form = document.querySelector('form');
    if (form) {
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <div className="form-container">
      <header className="welcome-back w-full text-center mb-8">
        <h1 className="text-5xl font-bold leading-none text-gray-950">
          Welcome Back 👋
        </h1>
        <p className="mt-5 text-xl leading-loose text-neutral-600">
          Connect, collaborate, and find opportunities.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 items-center">
        <div className="mt-4 w-full">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="johndoe123@gmail.com"
            className="w-full"
          />
        </div>

        <div className="mt-4 w-full">
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            className="w-full"
          />
        </div>

        <button
          type="button"
          className="text-base leading-loose text-center text-white bg-transparent w-full"
          onClick={() => alert("Forgot Password functionality not implemented yet.")}
        >
          Forgot Password?
        </button>

        <LoginButton onClick={handleClick} className="w-full bg-black text-white">
          Log in
        </LoginButton>
      </form>

      {/* Display Profile Image */}
      {localStorage.getItem('profileImage') && (
        <img
          src={localStorage.getItem('profileImage')!}
          alt='Profile'
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '20px' }}
        />
      )}

      <div className="mt-8 text-center w-full">
        <p className="text-neutral-600 mb-4">Sign In / Login with</p>
        <SocialLogin />
      </div>

      <footer className="mt-8 text-lg text-center w-full">
        <span className="text-[#313957]">Don't have an account? </span>
        <button className="text-white bg-black" onClick={onSignUpClick}>Sign Up</button>
      </footer>
    </div>
  );
};

export default LoginForm;