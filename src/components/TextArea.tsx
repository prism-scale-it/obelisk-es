import React from "react";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  maxLength = 100,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      onChange(inputValue);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={3}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <div className="flex justify-between items-center mt-1">
        <div>{error && <p className="text-red-500 text-xs">{error}</p>}</div>
        <p
          className={`text-xs ${
            value.length > maxLength * 0.9 ? "text-orange-500" : "text-gray-500"
          }`}
        >
          {value.length}/{maxLength}
        </p>
      </div>
    </div>
  );
};
