import { hasEmoji, hasNumbers, hasSpecialCharacters } from './matchers';

const validateEmail = async (email) => {
  const emailValidationEndpoint = 'https://api.hubspotqa.com/signup/v1/validation/email';
    const response = await fetch(emailValidationEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      // credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: JSON.stringify({email}),
    });
    // check for 200 response
    return response.status === 200;
};

const validateName = value => {
  if (!value || !value.trim().length) return false;

  value = value.toLowerCase();

  const invalid =
  hasSpecialCharacters(value) ||
  hasNumbers(value) ||
  hasEmoji(value);
  return !invalid;
};

export const validateForm = async (formData) => {
  const {firstName, lastName, email} = formData;
  const isValidEmail = await validateEmail(email);
  const isValidFirstName =  validateName(firstName);
  const isValidLastName =  validateName(lastName);
  return (isValidEmail && isValidFirstName && isValidLastName);
}
