import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../../contexts/quizContext";
import { INITIALISE_QUIZ_ATTEMPT, RESET_QUIZ } from "../../reducers";
import Question from "./Question";
import QuizInstructions from "./QuizInstructions";
import { Quizzes } from "../../database";
import { findQuiz, questionStyleProps } from "../../utils";
import QuizReview from "./QuizReview";

function Quiz() {
  const [showQuestions, setShowQuestions] = useState(false);
  const {
    state: { quizAttempt, currentQuestionNumber, showReview },
    dispatch,
  } = useQuiz();
  const { quizId } = useParams();

  useEffect(() => {
    try {
      const quiz = findQuiz(Quizzes, quizId);
      if (quizId && quiz) {
        dispatch({ type: INITIALISE_QUIZ_ATTEMPT, payload: { quiz } });
      }
    } catch (error) {
      alert("No quiz Found");
    }
    return () => {
      dispatch({ type: RESET_QUIZ });
    };
  }, [quizId, dispatch]);

  return (
    <>
      {!showReview && quizAttempt && (
        <Box>
          {showQuestions ? (
            <>
              <Container
                m={"auto"}
                my={{ md: "1rem" }}
                p={{ base: "0.5rem", md: "2rem" }}
                border={"1px"}
                borderColor={"gray.100"}
              >
                <SimpleGrid gap={[4, 6]} textAlign={"center"}>
                  <Heading fontWeight={"semibold"} mb={{ md: 4 }}>
                    {quizAttempt.name}
                  </Heading>
                  <Flex justify={"space-between"}>
                    <Text {...questionStyleProps}>
                      Question : {currentQuestionNumber} /{" "}
                      {quizAttempt.totalQuestions}
                    </Text>
                    <Text {...questionStyleProps}>
                      Score: {quizAttempt.score}
                    </Text>
                  </Flex>
                  <Question
                    question={quizAttempt.questions[currentQuestionNumber - 1]}
                  />
                </SimpleGrid>
              </Container>
            </>
          ) : (
            <QuizInstructions
              quiz={quizAttempt}
              setShowQuestions={setShowQuestions}
            />
          )}
        </Box>
      )}
      {quizAttempt && showReview && <QuizReview />}
    </>
  );
}

export default Quiz;
