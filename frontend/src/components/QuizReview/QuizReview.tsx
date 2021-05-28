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
  Button,
} from "@chakra-ui/react";
import { useQuiz } from "../../contexts/quizContext";
import QuestionReview from "./QuestionReview";
import {
  getAttemptedQuestions,
  correctColor,
  wrongColor,
  questionColor,
  primaryButtonStyleProps,
} from "../../utils";
import { showToast } from "../Toast/Toast";
import { submitQuiz } from "../../server";

function QuizReview() {
  const {
    state: { quizAttempt, showReview },
  } = useQuiz();
  const { score, totalQuestions, questions, correct } = quizAttempt!;
  const attempted = getAttemptedQuestions(questions);

  const saveResults = () => {
    quizAttempt
      ? submitQuiz(quizAttempt, quizAttempt.id)
      : showToast("Failed to save quiz results!", "error");
  };

  return (
    <>
      {showReview && (
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
                <CircularProgressLabel
                  fontSize={{ base: "1.3rem", md: "1.5rem" }}
                  fontWeight={"bold"}
                >
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
                <StatNumber {...wrongColor}>
                  {attempted - (correct ?? 0)}
                </StatNumber>
              </Stat>
            </HStack>
          </Container>
          <Box textAlign={"center"}>
            <Button
              {...primaryButtonStyleProps}
              maxW={"min"}
              p={{ md: 3 }}
              m={3}
              onClick={saveResults}
            >
              Save Results
            </Button>
          </Box>
          <QuestionReview />
        </>
      )}
    </>
  );
}

export default QuizReview;
