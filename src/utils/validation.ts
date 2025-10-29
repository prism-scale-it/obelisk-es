export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@obelisk\.au$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (
  phone: string,
  countryCode: "AU" | "IN"
): boolean => {
  // Remove all spaces and special characters except +
  const cleanPhone = phone.replace(/[\s\-()]/g, "");

  if (countryCode === "AU") {
    // Australian phone numbers: 9 digits after country code
    return /^\d{9}$/.test(cleanPhone);
  } else {
    // Indian phone numbers: 10 digits after country code
    return /^\d{10}$/.test(cleanPhone);
  }
};

export const validateAddress = (
  address: string,
  maxLength: number = 100
): boolean => {
  return address.length > 0 && address.length <= maxLength;
};

export const validateName = (name: string): boolean => {
  return name.trim().length > 0;
};

export const formatPhoneNumber = (
  phone: string,
  countryCode: "AU" | "IN"
): string => {
  const cleanPhone = phone.replace(/[\s\-()]/g, "");

  if (countryCode === "AU") {
    // Format: XXX XXX XXX
    return cleanPhone.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
  } else {
    // Format: XXXXX XXXXX
    return cleanPhone.replace(/(\d{5})(\d{5})/, "$1 $2");
  }
};
