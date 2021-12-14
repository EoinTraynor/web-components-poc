import { hasEmoji, hasNumbers, hasSpecialCharacters } from './matchers';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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

export function validateForm(formData) {
  const {firstName, lastName, email} = formData;
  const isValidEmail =  validateEmail(email);
  const isValidFirstName =  validateName(firstName);
  const isValidLastName =  validateName(lastName);
  return (isValidEmail && isValidFirstName && isValidLastName);
}
