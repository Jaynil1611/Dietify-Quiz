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
import QuestionReview from "./QuestionReview";
import {
  getAttemptedQuestions,
  correctColor,
  wrongColor,
  questionColor,
} from "../../utils";
import { showToast } from "../Toast/Toast";
import { submitQuiz } from "../../server";
import { useParams } from "react-router";
import { useEffect } from "react";

function QuizReview() {
  const {
    state: { quizAttempt, showReview },
  } = useQuiz();
  const { score, totalQuestions, questions, correct } = quizAttempt!;
  const attempted = getAttemptedQuestions(questions);
  const { quizId } = useParams();

  useEffect(() => {
    quizAttempt && quizId
      ? submitQuiz(quizAttempt, quizId)
      : showToast("Failed to save quiz results!", "error");
  }, [quizAttempt, quizId]);

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
          <QuestionReview />
        </>
      )}
    </>
  );
}

export default QuizReview;
