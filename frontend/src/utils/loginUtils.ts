import React from "react";

export const checkEmailAndPassword = (
  email: string,
  password: string
): boolean => {
  return (
    /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/g.test(email) &&
    /^(?=.*[A-Za-z])(?=.*\d).{6,}$/g.test(password)
  );
};

export const linkHoverProps = {
  _hover: {
    textDecoration: "underline",
    background: "orange.100",
    borderRadius: "1rem",
    padding: "0.5rem",
  },
  color: "orange.600",
  p: 2,
};

export const loginBoxProps = {
  p: 8,
  pb: 4,
  borderWidth: 1,
  borderRadius: 8,
  boxShadow: "lg",
  w: { base: "85%", md: "30%" },
};

export const getFormValues = (e: React.SyntheticEvent, type: string) => {
  if (type === "signup") {
    const {
      email: { value: email },
      password: { value: password },
      firstname: { value: firstname },
      lastname: { value: lastname },
    } = e.target as typeof e.target & {
      email: { value: string };
      firstname: { value: string };
      lastname: { value: string };
      password: { value: string };
    };
    return { email, password, firstname, lastname };
  }
  const {
    email: { value: email },
    password: { value: password },
  } = e.target as typeof e.target & {
    email: { value: string };
    password: { value: string };
  };
  return { email, password };
};
