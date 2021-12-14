export const hasEmoji = value => {
  return false;
};

export const hasNumbers = value => value.match(/[0-9]/gm);

export const hasSpecialCharacters = value =>
  value.match(/<[^>]*>/gm) || value.match(/[:@#$|!%<>^&*()/\\:]/gm);
