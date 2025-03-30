"use client";
import * as React from "react";

interface PasswordInputProps {
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordInput({ placeholder, label, value, onChange }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm leading-5 text-black">{label}</label>
      <div className="flex items-center px-4 py-4 bg-white rounded-xl border border-solid border-zinc-300">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full text-base leading-7 border-[none] text-black text-opacity-50"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97724 2.83374L1.87805 3.915L16.0227 17.8337L17.1219 16.7521L2.97724 2.83374Z"
              fill="black"
              fillOpacity="0.6"
            />
            <path
              d="M4.20032 6.19994L5.23492 7.21798C4.10236 8.16688 3.20051 9.34802 2.61773 10.3814L2.61595 10.3849C4.23901 13.0552 6.81431 15.5789 10.0647 15.1961C10.942 15.0927 11.7605 14.7976 12.5083 14.3754L13.5557 15.4056C12.098 16.3263 10.4271 16.8138 8.6166 16.5728C5.35204 16.1384 2.68268 13.5037 1 10.4094C1.79005 8.84511 2.87079 7.3486 4.20032 6.19994ZM6.55345 4.69121C7.4663 4.29097 8.45405 4.05558 9.50887 4.03882C9.56744 4.03847 10.2627 4.07095 10.5779 4.12194C10.7756 4.15407 10.9726 4.19423 11.1667 4.24418C14.2634 5.03801 16.5576 7.61403 18 10.2679C17.3949 11.4704 16.6023 12.6438 15.6572 13.6493L14.6538 12.662C15.3519 11.9216 15.934 11.0974 16.3823 10.298C16.3823 10.298 15.9315 9.58481 15.5897 9.13708C15.37 8.8493 15.139 8.5699 14.8962 8.30064C14.7046 8.0883 13.9603 7.36711 13.7832 7.21694C12.5949 6.21146 11.1997 5.42252 9.52626 5.43579C8.87818 5.44592 8.25494 5.57165 7.66328 5.78329L6.55345 4.69121Z"
              fill="black"
              fillOpacity="0.6"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.01656 8.97176L7.81524 9.75734L10.8895 12.7824C10.4785 13.0094 10.0043 13.1386 9.49994 13.1386C7.92942 13.1386 6.65454 11.8841 6.65454 10.3387C6.65454 9.84243 6.78622 9.37619 7.01656 8.97176ZM9.44741 7.53952C9.4648 7.53917 9.48255 7.53882 9.49994 7.53882C11.0705 7.53882 12.3453 8.79365 12.3453 10.3387C12.3453 10.3562 12.3453 10.3733 12.345 10.3904L9.44741 7.53952Z"
              fill="black"
              fillOpacity="0.6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;