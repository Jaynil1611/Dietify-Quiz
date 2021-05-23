import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { VStack, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Option } from "../../database";
import { OptionReviewProp } from "./QuestionProp.type";

function OptionReview(prop: OptionReviewProp) {
  const { options } = prop;
  return (
    <>
      <VStack spacing={3} mt={4}>
        {options.map((option) => {
          return <ViewOptionResult option={option} />;
        })}
      </VStack>
    </>
  );
}

export type OptionProp = {
  option: Option;
};

const ViewOptionResult = (prop: OptionProp) => {
  const { id, isRight, isSelected, text } = prop.option;
  const bgColor = isRight ? "green.400" : isSelected ? "red.400" : "gray.200";
  const icon =
    isRight && isSelected ? CheckIcon : isSelected ? SmallCloseIcon : "";
  const optionColorStyle = {
    bgColor: bgColor,
    boxShadow: "md",
    width: { base: "90%", md: "30%" },
    cursor: "pointer",
    mx: { base: 4 },
    ml: { md: "35%" },
    borderWidth: "1px",
    borderRadius: "md",
    p: 2,
  };
  return (
    <List width={"100%"}>
      <ListItem key={id} {...optionColorStyle}>
        {icon && <ListIcon as={icon} boxSize={5} />} {text}
      </ListItem>
    </List>
  );
};

export default OptionReview;
