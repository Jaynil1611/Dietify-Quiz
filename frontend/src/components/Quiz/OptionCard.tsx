import { Box, useRadio } from "@chakra-ui/react";

function OptionCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props.radio);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label" width="100%">
      <input {...input} checked={!!props.option.isSelected} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg="gray.100"
        _checked={{
          bg: "orange.600",
          color: "white",
          borderColor: "orange.600",
          fontWeight: "md",
        }}
        _hover={{
          bg: "orange.500",
          color: "white",
        }}
        _focus={{
          boxShadow: "lg",
        }}
        p={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default OptionCard;
