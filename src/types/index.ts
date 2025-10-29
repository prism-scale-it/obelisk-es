export interface SignatureData {
  firstName: string;
  lastName: string;
  middleName?: string;
  position: string;
  email: string;
  countryCode: "AU" | "IN";
  phoneNumber: string;
  address: string;
}

export interface CountryCodeOption {
  code: "AU" | "IN";
  dialCode: string;
  flag: string;
}

export const COUNTRY_CODES: CountryCodeOption[] = [
  { code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { code: "IN", dialCode: "+91", flag: "🇮🇳" },
];
