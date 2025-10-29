import React, { useState } from "react";
import type { SignatureData } from "../types";
import { COUNTRY_CODES } from "../types";
import { TextInput } from "./TextInput";
import { EmailInput } from "./EmailInput";
import { PhoneInput } from "./PhoneInput";
import { SignaturePreview } from "./SignaturePreview";
import { generateEmailSignature } from "../utils/generateSignature";
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

    const html = generateEmailSignature(formData);

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
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="text-center py-6 px-4 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          PrismScale Email Signature Generator
        </h1>
        <p className="text-gray-600">
          Custom Email signature generator for Obelisk
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 overflow-hidden">
        {/* Form Section - Scrollable */}
        <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <h2 className="text-2xl font-semibold p-6 pb-4 text-gray-800 shrink-0">
            Your Information
          </h2>

          <div className="flex-1 overflow-y-auto px-6 pb-6">
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
              />
            </div>

            <TextInput
              label="Middle Name"
              value={formData.middleName || ""}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, middleName: value }))
              }
              placeholder="Optional"
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
            />

            <EmailInput
              label="Email"
              localPart={emailLocalPart}
              onChange={handleEmailChange}
              error={errors.email}
              required
              placeholder="yourname"
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
            />
            <p className="text-xs text-gray-500 -mt-3 mb-4 text-right">
              {formData.address.length}/100
            </p>

            <button
              onClick={handleCopy}
              disabled={!isFormValid()}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                copySuccess
                  ? "bg-green-500 hover:bg-green-600"
                  : isFormValid()
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {copySuccess ? "✓ Copied to Clipboard!" : "Copy Email Signature"}
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {isFormValid()
                ? "Click the button to copy, then paste directly into your email signature settings"
                : "Fill in all required fields to enable copying"}
            </p>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden flex flex-col">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Preview</h3>

          {isFormValid() ? (
            <div className="overflow-auto flex-1">
              <SignaturePreview data={formData} />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400 mb-4"
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Preview Available
                </h3>
                <p className="text-sm text-gray-500 max-w-sm">
                  Please fill in all required fields to see your email signature
                  preview
                </p>
                <div className="mt-4 text-xs text-gray-400">
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
