import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast();

export const showToast = (description: string, status: any) => {
  toast({
    description: description,
    status: status,
    duration: 3000,
    isClosable: true,
    position: "top-right",
  });
};
