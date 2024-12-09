export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateCardNumber = (cardNumber: string): boolean => {
  return /^[0-9]{16}$/.test(cardNumber.replace(/\s/g, ''));
};

export const validateExpiryDate = (expiryDate: string): boolean => {
  return /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate);
};

export const validateCVV = (cvv: string): boolean => {
  return /^[0-9]{3,4}$/.test(cvv);
};