import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  CircularProgress,
  CircularProgressLabel,
  Container,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useQuiz } from "../../contexts/quizContext";
import { Question } from "../../database";
import QuestionReview from "./QuestionReview";

const questionColor = {
  color: "blue.500",
};

const correctColor = {
  color: "green.500",
};

const wrongColor = {
  color: "red.500",
};

function QuizReview() {
  const {
    state: { quizAttempt, correct },
  } = useQuiz();
  const { score, totalQuestions, questions } = quizAttempt!;
  const attempted = getAttemptedQuestions(questions);
  return (
    <>
      <Container
        maxW={{ base: "container.xl", md: "100%" }}
        my={"1rem"}
        p={{ base: "1rem", md: "2rem" }}
        bg={"gray.100"}
      >
        <Box textAlign={"center"}>
          <Heading fontSize={"2xl"} mb={2}>
            Your Score
          </Heading>
          <CircularProgress
            value={score}
            max={50}
            m={"auto"}
            color="orange.400"
            size={120}
            thickness={6}
          >
            <CircularProgressLabel fontSize={{base:"1rem",md:"1.5rem"}} fontWeight={"bold"}>
              {score} / 50
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <HStack spacing={[4, 8]} textAlign={"center"}>
          <Stat>
            <StatLabel {...questionColor}> Total </StatLabel>
            <StatNumber {...questionColor}>{totalQuestions}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel {...questionColor}> Attempted </StatLabel>
            <StatNumber {...questionColor}>{attempted}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel {...correctColor}> Correct </StatLabel>
            <StatNumber {...correctColor}>{correct}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel {...wrongColor}> Wrong </StatLabel>
            <StatNumber {...wrongColor}>{attempted - correct}</StatNumber>
          </Stat>
        </HStack>
      </Container>
      <QuestionReview />
    </>
  );
}

const getAttemptedQuestions = (questions: Array<Question>) => {
  return questions.filter(({ isAttempted }) => isAttempted === true).length;
};

export default QuizReview;
