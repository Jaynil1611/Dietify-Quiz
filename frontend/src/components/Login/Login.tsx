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
import { useQuiz } from "../../contexts";
import { showToast } from "../Toast/Toast";
import {
  primaryButtonStyleProps,
  focusProps,
  linkHoverProps,
  checkEmailAndPassword,
  loginBoxProps,
  getFormValues,
} from "../../utils";
import { Link as RouterLink } from "react-router-dom";

function Login() {
  const { loginUser } = useQuiz();
  const navigate = useNavigate();

  const handleUserLogin = async (email: string, password: string) => {
    return (await loginUser(email, password)) ? navigate("/") : navigate("");
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { email, password } = getFormValues(e, "login");
    if (checkEmailAndPassword(email, password)) {
      return handleUserLogin(email, password);
    }
    showToast("User credentials are not valid", "error");
  };

  const fillGuestCredentials = (e: any) => {
    e.target.form[0].value = "quiz@test.com";
    e.target.form[1].value = "quiz123";
  };

  return (
    <>
      <Flex width="full" align="center" justifyContent="center" mt={"7rem"}>
        <Box {...loginBoxProps}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl isRequired>
                <FormLabel> Email </FormLabel>
                <Input {...focusProps} type="email" name="email" />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel> Password </FormLabel>
                <Input {...focusProps} type="password" name="password" />
                <FormHelperText>
                  Password should be of 6 characters (including one letter &
                  number)
                </FormHelperText>
              </FormControl>
              <Flex justify="center">
                <Button
                  {...primaryButtonStyleProps}
                  maxW="max-content"
                  mt={8}
                  onClick={fillGuestCredentials}
                >
                  Fill Guest Credentials
                </Button>
              </Flex>
              <Button
                {...primaryButtonStyleProps}
                width="full"
                mt={8}
                type="submit"
              >
                Sign In
              </Button>
            </form>
            <Box mt={8} textAlign={"center"}>
              New to Dietify?
              <Link as={RouterLink} {...linkHoverProps} to="/signup">
                Join now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default Login;
