import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Box, Icon } from "@chakra-ui/react";
import { OptionProp, OptionReviewProp } from "./OptionReviewProp.type";
import { optionColorStyle, textProps } from "../../utils";

function OptionReview(prop: OptionReviewProp) {
  const { options } = prop;
  return (
    <>
      <List spacing={3} mt={4}>
        {options.map((option) => {
          return <ViewOptionResult key={option.id} option={option} />;
        })}
      </List>
    </>
  );
}

const ViewOptionResult = (prop: OptionProp) => {
  const { id, isRight, isSelected, text } = prop.option;
  const bgColor = isRight ? "green.400" : isSelected ? "red.400" : "gray.200";
  const icon =
    isRight && isSelected ? CheckCircleIcon : isSelected ? SmallCloseIcon : "";

  const bgColorStyle = {
    bgColor: bgColor,
  };

  const iconProps = {
    color: icon ? "white" : "transparent",
  };

  return (
    <ListItem key={id} {...optionColorStyle} {...bgColorStyle}>
      <Box {...textProps}> {text}</Box>
      <ListIcon
        as={icon ? icon : Icon}
        {...iconProps}
        boxSize={icon === CheckCircleIcon ? 5 : 7}
      />
    </ListItem>
  );
};

export default OptionReview;
