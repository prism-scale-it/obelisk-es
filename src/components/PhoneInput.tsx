import React from "react";
import type { CountryCodeOption } from "../types";

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  countryCode: "AU" | "IN";
  onCountryCodeChange: (code: "AU" | "IN") => void;
  countryCodeOptions: CountryCodeOption[];
  isDarkMode?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  countryCode,
  onCountryCodeChange,
  countryCodeOptions,
  isDarkMode = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow digits
    const digitsOnly = inputValue.replace(/\D/g, "");

    // Limit length based on country code
    const maxLength = countryCode === "AU" ? 9 : 10;
    if (digitsOnly.length <= maxLength) {
      onChange(digitsOnly);
    }
  };

  const formatDisplay = (phone: string) => {
    if (countryCode === "AU") {
      // Format: XXX XXX XXX
      if (phone.length <= 3) return phone;
      if (phone.length <= 6) return `${phone.slice(0, 3)} ${phone.slice(3)}`;
      return `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6, 9)}`;
    } else {
      // Format: XXXXX XXXXX
      if (phone.length <= 5) return phone;
      return `${phone.slice(0, 5)} ${phone.slice(5, 10)}`;
    }
  };

  return (
    <div className="mb-4">
      <label
        className={`block text-sm font-medium mb-1 ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value as "AU" | "IN")}
          className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white"
          }`}
        >
          {countryCodeOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.flag} {option.dialCode}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={formatDisplay(value)}
          onChange={handleChange}
          placeholder={placeholder}
          className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error
              ? "border-red-500"
              : isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300"
          }`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <p
        className={`text-xs mt-1 ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {countryCode === "AU" ? "9 digits required" : "10 digits required"}
      </p>
    </div>
  );
};
