// The section of the fullname length
export const isNameLength = (value) => {
  if (value.length < 10) return true;
  return false;
};

// The section of the firstname length
export const isMessageLength = (value) => {
  if (value.length < 100) return true;
  return false;
};

// The setion of isEmpty
export const isEmpty = (value) => {
  if (!value) return true;
  return false;
};

// The section of the terms and condition
export const isTerms = (value) => {
  if (!value) return true;
  return false;
};

// The section of the email
export const isEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// The section of the password length
export const isLength = (password) => {
  if (password.length < 8) return true;
  return false;
};

// The section of the confirm password
export const isMatch = (password, cfpassword) => {
  if (password === cfpassword) return true;
  return false;
};
