import { QuestionProp } from "./QuestionProp.type";
import {
  Heading,
  Stack,
  VStack,
  useRadioGroup,
  Box,
  useRadio,
  Button,
} from "@chakra-ui/react";
import { primaryButtonStyleProps } from "../../utils";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useQuiz } from "../../contexts/quizContext";
import {
  INCREMENT_QUESTION_NUMBER,
  SELECT_OPTION,
  SHOW_RESULT,
  UPDATE_SCORE,
} from "../../reducers";

function Question(prop: QuestionProp) {
  const { question: quizQuestion } = prop;
  const { id: questionId, question, options } = quizQuestion;
  const {
    state: { currentQuestionNumber, quizAttempt },
    dispatch,
  } = useQuiz();

  const updateSelectedOption = (optionId: string) =>
    dispatch({ type: SELECT_OPTION, payload: { questionId, optionId } });

  const updateQuestionNumber = () => {
    quizQuestion.isAttempted &&
      dispatch({ type: UPDATE_SCORE, payload: { questionId } });
    currentQuestionNumber >= quizAttempt!.totalQuestions
      ? dispatch({ type: SHOW_RESULT })
      : dispatch({ type: INCREMENT_QUESTION_NUMBER });
  };

  const { getRadioProps, getRootProps } = useRadioGroup({
    name: "Options",
    onChange: updateSelectedOption,
  });
  const group = getRootProps();

  return (
    <>
      <Stack spacing={[6, 8]}>
        <Heading fontSize={"xl"}>{question}</Heading>
        <VStack {...group} spacing={[4, 6]}>
          {options.map((option) => {
            const { text, id } = option;
            const radio = getRadioProps({ value: id });
            return (
              <RadioCard key={id} radio={radio} option={option}>
                {text}
              </RadioCard>
            );
          })}
        </VStack>
        <Box m={"auto"}>
          <Button
            maxW={"min"}
            onClick={updateQuestionNumber}
            rightIcon={<ArrowForwardIcon />}
            {...primaryButtonStyleProps}
          >
            Next
          </Button>
        </Box>
      </Stack>
    </>
  );
}

function RadioCard(props: any) {
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

export default Question;
