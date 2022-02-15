function validateEmail(email) {
  const regexValidation = /\S+@\S+\.\S+/;
  return regexValidation.test(email);
}

module.exports = validateEmail;
