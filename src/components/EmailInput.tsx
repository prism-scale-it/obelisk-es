import React from "react";

interface EmailInputProps {
  label: string;
  localPart: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  isDarkMode?: boolean;
}

export const EmailInput: React.FC<EmailInputProps> = ({
  label,
  localPart,
  onChange,
  error,
  required = false,
  placeholder,
  isDarkMode = false,
}) => {
  return (
    <div className="mb-4">
      <label
        className={`block text-sm font-medium mb-1 ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center">
        <input
          type="text"
          value={localPart}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error
              ? "border-red-500"
              : isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300 bg-white"
          }`}
        />
        <span
          className={`px-4 py-2 border border-l-0 rounded-r-lg font-medium ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-gray-200"
              : "bg-gray-100 border-gray-300 text-gray-700"
          }`}
        >
          @obelisk.au
        </span>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
