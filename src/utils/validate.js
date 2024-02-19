export const checkValidData = (email, password) => {
  // const isNameValid = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isNameValid) return "Enter a correct name.";
  if (!isEmailValid) return "Please enter a valid Email.";
  if (!isPasswordValid) return "Password is not Valid.";

  return null;
};
