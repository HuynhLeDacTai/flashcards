export const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

export const validateEmail = (email) => {
  let check = false;
  if (email === "" || !isValidEmail(email)) {
    check = true;
  } else {
    check = false;
  }
  return check;
};

export const validateInput = (input) => {
  let check = false;
  if (input === "") {
    check = true;
  } else {
    check = false;
  }
  return check;
};
