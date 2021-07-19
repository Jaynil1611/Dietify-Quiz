import {
  Box,
  Flex,
  Image,
  Text,
  SimpleGrid,
  Button,
  Tag,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts/quizContext";
import { Quiz } from "../../database";
import { INITIALISE_QUIZ_ATTEMPT } from "../../reducers";
import { callMockServer } from "../../server";
import {
  cardContentProps,
  cardImageProps,
  labelProps,
  questionDisplayProps,
  primaryButtonStyleProps,
  constructURL,
} from "../../utils";
import { showToast } from "../Toast/Toast";

function QuizList() {
  const {
    state: { quizzes },
    dispatch,
  } = useQuiz();
  const navigate = useNavigate();

  const loadQuiz = (quiz: Quiz) => {
    dispatch({ type: INITIALISE_QUIZ_ATTEMPT, payload: { quiz } });
  };

  const clearQuizAttempts = async () => {
    const { error } = await callMockServer({
      type: "delete",
      url: `${constructURL()}/attempt`,
    });
    if (!error) {
      return showToast("Cleared all previous attempts", "success");
    }
    showToast("Please login to perform the action", "error");
    navigate("/login");
  };

  return (
    <>
      <SimpleGrid columns={[1, 3]} gap={4} my={6} mx={{ base: 2, md: 6 }}>
        {quizzes.map((quiz) => {
          const { id, name, image, difficulty, type, totalQuestions } = quiz;
          return (
            <Box {...cardContentProps} key={id}>
              <Image src={image} alt={name} {...cardImageProps} />

              <Flex wrap="wrap" direction="column">
                <Text px={2} mt={2} fontSize={"lg"} fontWeight={"bold"}>
                  {name}
                </Text>
                <Text {...questionDisplayProps}>
                  {totalQuestions} Questions
                </Text>
                <Box>
                  <Tag textTransform="capitalize" {...labelProps}>
                    {difficulty}
                  </Tag>
                  <Tag textTransform="capitalize" {...labelProps}>
                    {type}
                  </Tag>
                </Box>
                <Link to={`/quizzes/${id}`} onClick={() => loadQuiz(quiz)}>
                  <Button mt={2} {...primaryButtonStyleProps}>
                    Attempt Quiz
                  </Button>
                </Link>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
      <Flex justify="center" w="100%">
        <Button
          onClick={clearQuizAttempts}
          mt={2}
          {...primaryButtonStyleProps}
          maxW="max"
        >
          Clear All Previous Quiz Attempts
        </Button>
      </Flex>
    </>
  );
}

export default QuizList;
