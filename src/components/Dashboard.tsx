import React, { useState } from "react";
import type { SignatureData } from "../types";
import { COUNTRY_CODES } from "../types";
import { TextInput } from "./TextInput";
import { EmailInput } from "./EmailInput";
import { PhoneInput } from "./PhoneInput";
import { SignaturePreview } from "./SignaturePreview";
import {
  generateEmailSignature,
  generateEmailSignatureDark,
} from "../utils/generateSignature";
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateAddress,
} from "../utils/validation";

export const Dashboard: React.FC = () => {
  const [formData, setFormData] = useState<SignatureData>({
    firstName: "",
    lastName: "",
    middleName: "",
    position: "",
    email: "",
    countryCode: "AU",
    phoneNumber: "",
    address: "",
  });

  const [emailLocalPart, setEmailLocalPart] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignatureData, string>>
  >({});
  const [copySuccess, setCopySuccess] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update email when local part changes
  const handleEmailChange = (localPart: string) => {
    setEmailLocalPart(localPart);
    setFormData((prev) => ({
      ...prev,
      email: `${localPart}@obelisk.au`,
    }));
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof SignatureData, string>> = {};

    if (!validateName(formData.firstName)) {
      newErrors.firstName = "First name is required";
    }

    if (!validateName(formData.lastName)) {
      newErrors.lastName = "Last name is required";
    }

    if (!validateName(formData.position)) {
      newErrors.position = "Position is required";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Valid email with @obelisk.au domain is required";
    }

    if (!validatePhoneNumber(formData.phoneNumber, formData.countryCode)) {
      const requiredDigits = formData.countryCode === "AU" ? 9 : 10;
      newErrors.phoneNumber = `Phone number must be ${requiredDigits} digits`;
    }

    if (!validateAddress(formData.address, 100)) {
      newErrors.address = "Address is required (max 100 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if form is valid without setting errors
  const isFormValid = (): boolean => {
    return (
      validateName(formData.firstName) &&
      validateName(formData.lastName) &&
      validateName(formData.position) &&
      validateEmail(formData.email) &&
      validatePhoneNumber(formData.phoneNumber, formData.countryCode) &&
      validateAddress(formData.address, 100)
    );
  };

  // Copy HTML to clipboard
  const handleCopy = async () => {
    if (!validateForm()) {
      alert("Please fix all validation errors before copying");
      return;
    }

    const html = isDarkMode
      ? generateEmailSignatureDark(formData)
      : generateEmailSignature(formData);

    try {
      // Use Clipboard API to copy as HTML
      const blob = new Blob([html], { type: "text/html" });
      const clipboardItem = new ClipboardItem({
        "text/html": blob,
        "text/plain": new Blob([html], { type: "text/plain" }),
      });

      await navigator.clipboard.write([clipboardItem]);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } catch {
      // Fallback: copy HTML text
      try {
        await navigator.clipboard.writeText(html);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
        alert(
          "Signature copied! Note: You may need to paste it as HTML in your email client."
        );
      } catch {
        alert("Failed to copy to clipboard. Please try again.");
      }
    }
  };

  // Handle country code change and reset phone number
  const handleCountryCodeChange = (code: "AU" | "IN") => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
      phoneNumber: "", // Reset phone number when country changes
    }));
  };

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Header */}
      <div
        className={`py-4 md:py-6 px-4 shadow-sm ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left">
            <h1
              className={`text-2xl md:text-4xl font-bold mb-1 md:mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              PrismScale Email Signature Generator
            </h1>
            <p
              className={`text-sm md:text-base ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Custom Email signature generator for Obelisk
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 md:p-3 rounded-lg transition-colors ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              title="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6 overflow-hidden">
        {/* Form Section - Scrollable */}
        <div
          className={`rounded-lg shadow-lg flex flex-col overflow-hidden ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-xl md:text-2xl font-semibold p-4 md:p-6 pb-3 md:pb-4 shrink-0 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Your Information
          </h2>

          <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-4 md:pb-6">
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                label="First Name"
                value={formData.firstName}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, firstName: value }))
                }
                error={errors.firstName}
                required
                placeholder="John"
                isDarkMode={isDarkMode}
              />

              <TextInput
                label="Last Name"
                value={formData.lastName}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, lastName: value }))
                }
                error={errors.lastName}
                required
                placeholder="Doe"
                isDarkMode={isDarkMode}
              />
            </div>

            <TextInput
              label="Middle Name"
              value={formData.middleName || ""}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, middleName: value }))
              }
              placeholder="Optional"
              isDarkMode={isDarkMode}
            />

            <TextInput
              label="Position/Designation"
              value={formData.position}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, position: value }))
              }
              error={errors.position}
              required
              placeholder="Director"
              isDarkMode={isDarkMode}
            />

            <EmailInput
              label="Email"
              localPart={emailLocalPart}
              onChange={handleEmailChange}
              error={errors.email}
              required
              placeholder="yourname"
              isDarkMode={isDarkMode}
            />

            <PhoneInput
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phoneNumber: value }))
              }
              error={errors.phoneNumber}
              required
              placeholder={
                formData.countryCode === "AU" ? "123 456 789" : "12345 67890"
              }
              countryCode={formData.countryCode}
              onCountryCodeChange={handleCountryCodeChange}
              countryCodeOptions={COUNTRY_CODES}
              isDarkMode={isDarkMode}
            />

            <TextInput
              label="Address"
              value={formData.address}
              onChange={(value) => {
                if (value.length <= 100) {
                  setFormData((prev) => ({ ...prev, address: value }));
                }
              }}
              error={errors.address}
              required
              placeholder="204 Vipul Plaza, Sector 54 Gurugram - 122002"
              isDarkMode={isDarkMode}
            />
            <p className="text-xs text-gray-500 -mt-3 mb-4 text-right">
              {formData.address.length}/100
            </p>

            <button
              onClick={handleCopy}
              disabled={!isFormValid()}
              className={`w-full px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-white transition-colors text-sm md:text-base ${
                copySuccess
                  ? "bg-green-500 hover:bg-green-600"
                  : isFormValid()
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {copySuccess ? "✓ Copied!" : "Copy Signature"}
            </button>

            <div
              className={`text-xs mt-3 text-center ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {isFormValid()
                ? "Click 'Copy Signature' button to copy, then paste into your email signature settings"
                : "Fill in all required fields to enable copying"}
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div
          className={`rounded-lg shadow-lg p-4 md:p-6 overflow-hidden flex flex-col ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex items-center justify-between mb-3 shrink-0">
            <h3
              className={`text-lg md:text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Preview
            </h3>
            {isFormValid() && (
              <button
                onClick={handleCopy}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-white transition-colors text-xs md:text-sm ${
                  copySuccess
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {copySuccess ? "✓ Copied!" : "Copy"}
              </button>
            )}
          </div>

          {isFormValid() ? (
            <div className="overflow-auto flex-1">
              <SignaturePreview data={formData} isDarkMode={isDarkMode} />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-4 md:p-8">
                <svg
                  className={`mx-auto h-12 w-12 md:h-16 md:w-16 mb-4 ${
                    isDarkMode ? "text-gray-600" : "text-gray-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3
                  className={`text-base md:text-lg font-medium mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  No Preview Available
                </h3>
                <p
                  className={`text-xs md:text-sm max-w-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Please fill in all required fields to see your email signature
                  preview
                </p>
                <div
                  className={`mt-4 text-xs ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  <p>Required fields:</p>
                  <ul className="mt-2 space-y-1">
                    <li>✓ First Name & Last Name</li>
                    <li>✓ Position/Designation</li>
                    <li>✓ Email Address</li>
                    <li>✓ Phone Number</li>
                    <li>✓ Address</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
