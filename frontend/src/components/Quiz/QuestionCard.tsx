import { QuestionProp } from "./QuestionProp.type";
import {
  Heading,
  Stack,
  VStack,
  useRadioGroup,
  Box,
  Button,
} from "@chakra-ui/react";
import { primaryButtonStyleProps, checkQuizEnd } from "../../utils";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useQuiz } from "../../contexts";
import {
  INCREMENT_QUESTION_NUMBER,
  SELECT_OPTION,
  SHOW_RESULT,
  UPDATE_SCORE,
} from "../../reducers";
import OptionCard from "./OptionCard";
import { updateQuizAttempt } from "../../server";
import { useParams } from "react-router";
import { useEffect } from "react";

function QuestionCard(prop: QuestionProp) {
  const { question: quizQuestion } = prop;
  const { id: questionId, question, options } = quizQuestion;
  const {
    state: { currentQuestionNumber, quizAttempt },
    dispatch,
  } = useQuiz();
  const { quizId } = useParams();
  const score = quizAttempt?.score;

  const updateSelectedOption = (optionId: string) =>
    dispatch({ type: SELECT_OPTION, payload: { questionId, optionId } });

  useEffect(() => {
    (async () => {
      if (quizAttempt) updateQuizAttempt(quizAttempt, quizId);
    })();
  }, [score]);

  const updateQuestionNumber = async () => {
    const quizEnded = checkQuizEnd(
      currentQuestionNumber,
      quizAttempt!.totalQuestions
    );

    quizQuestion.isAttempted &&
      dispatch({ type: UPDATE_SCORE, payload: { questionId } });

    quizEnded
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
              <OptionCard key={id} radio={radio} option={option}>
                {text}
              </OptionCard>
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
            {currentQuestionNumber === quizAttempt!.totalQuestions
              ? "Finish"
              : "Next"}
          </Button>
        </Box>
      </Stack>
    </>
  );
}

export default QuestionCard;
