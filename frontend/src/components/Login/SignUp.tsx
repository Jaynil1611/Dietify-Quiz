import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  FormHelperText,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import {
  primaryButtonStyleProps,
  focusProps,
  linkHoverProps,
  checkEmailAndPassword,
  loginBoxProps,
  getFormValues,
} from "../../utils";
import { signUpUser } from "../../server";
import { Link as RouterLink } from "react-router-dom";
import { showToast } from "../Toast/Toast";

function SignUp() {
  const navigate = useNavigate();  
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { email, password, firstname, lastname } = getFormValues(e, "signup");
    if (firstname && lastname && checkEmailAndPassword(email, password)) {
      return (await signUpUser({ firstname, lastname, email, password }))
        ? navigate("/login")
        : navigate("");
    }
    showToast("Form fields are incorrect, check again", "error");
  };

  return (
    <>
      <Flex width="full" align="center" justifyContent="center" mt={"2rem"}>
        <Box {...loginBoxProps} p={4} pb={0} mb={{ base: 4 }}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl isRequired>
                <FormLabel> First Name </FormLabel>
                <Input {...focusProps} type="text" name="firstname" />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel> Last Name </FormLabel>
                <Input {...focusProps} type="text" name="lastname" />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel> Email </FormLabel>
                <Input {...focusProps} type="email" name="email" />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel> Password </FormLabel>
                <Input {...focusProps} type="password" name="password" />
                <FormHelperText>
                  Password should be of 6 characters (including one letter &
                  number)
                </FormHelperText>
              </FormControl>
              <Button
                {...primaryButtonStyleProps}
                width="full"
                mt={8}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
            <Box mt={8} textAlign={"center"}>
              Already on Dietify?
              <Link as={RouterLink} {...linkHoverProps} to="/login">
                Sign in
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default SignUp;
