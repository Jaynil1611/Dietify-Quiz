import { createStandaloneToast } from "@chakra-ui/react";
import { ToastStatus } from "./Toast.type";

const toast = createStandaloneToast();

export const showToast = (description: string, status: ToastStatus) => {
  toast({
    description,
    status,
    duration: 3000,
    isClosable: true,
    position: "top-right",
  });
};
