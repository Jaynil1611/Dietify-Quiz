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
import { useQuiz } from "../../contexts";
import { INITIALISE_QUIZ_ATTEMPT, RESET_QUIZ } from "../../reducers";
import QuestionCard from "./QuestionCard";
import QuizInstructions from "./QuizInstructions";
import { findQuiz, questionStyleProps } from "../../utils";
import { QuizReview } from "../index";
import { getQuizAttempt } from "../../server";

function Quiz() {
  const [showQuestions, setShowQuestions] = useState(false);
  const {
    state: { quizzes, quizAttempt, currentQuestionNumber, showReview },
    dispatch,
  } = useQuiz();
  const { quizId } = useParams();

  useEffect(() => {
    (async () => {
      if (!quizzes.length || !quizId) return;
      const result = await getQuizAttempt(dispatch, quizId);
      if (result) return setShowQuestions(true);
      const quiz = findQuiz(quizzes, quizId);
      if (quizId && quiz)
        return dispatch({ type: INITIALISE_QUIZ_ATTEMPT, payload: { quiz } });
    })();
    return () => dispatch({ type: RESET_QUIZ });
  }, [dispatch, quizId, quizzes]);

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
                      Question : {currentQuestionNumber} /
                      {quizAttempt.totalQuestions}
                    </Text>
                    <Text {...questionStyleProps}>
                      Score: {quizAttempt.score}
                    </Text>
                  </Flex>
                  <QuestionCard
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
