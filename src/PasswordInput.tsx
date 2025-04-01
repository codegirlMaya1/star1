import React from "react";

interface PasswordInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm leading-5 text-black">{label}</label>
      <div className="flex items-center px-4 py-4 bg-white rounded-xl border border-solid border-zinc-300">
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-base leading-7 border-none text-black text-opacity-50"
        />
      </div>
    </div>
  );
};

export default PasswordInput;