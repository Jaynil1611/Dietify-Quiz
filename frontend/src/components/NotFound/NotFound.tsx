import { Button, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { primaryButtonStyleProps } from "../../utils";

function NotFound() {
  return (
    <Box textAlign={"center"}>
      <Box my={"1rem"}>
        <Text fontSize={"xl"} p={2}>
          Oops! This is not the web page you are looking for!
        </Text>
      </Box>
      <Box>
        <Link to="/">
          <Button maxW={"min"} {...primaryButtonStyleProps}>
            Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default NotFound;
