import React from "react";
import type { CountryCodeOption } from "../types";

interface CountryCodeSelectProps {
  label: string;
  value: "AU" | "IN";
  onChange: (value: "AU" | "IN") => void;
  options: CountryCodeOption[];
  required?: boolean;
}

export const CountryCodeSelect: React.FC<CountryCodeSelectProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as "AU" | "IN")}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.code} ({option.dialCode})
          </option>
        ))}
      </select>
    </div>
  );
};
