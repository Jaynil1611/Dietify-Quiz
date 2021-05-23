import {
  Box,
  Flex,
  Image,
  Text,
  SimpleGrid,
  Button,
  Tag,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../contexts/quizContext";
import { Quiz, Quizzes } from "../../database";
import { INITIALISE_QUIZ_ATTEMPT } from "../../reducers";
import {
  cardContentProps,
  cardImageProps,
  labelProps,
  questionDisplayProps,
  primaryButtonStyleProps,
} from "../../utils";

function QuizList() {
  const { dispatch } = useQuiz();

  const loadQuiz = (quiz: Quiz) => {
    dispatch({ type: INITIALISE_QUIZ_ATTEMPT, payload: { quiz } });
  };

  return (
    <>
      <SimpleGrid columns={[1, 3]} gap={4} my={6} mx={{ base: 2, md: 6 }}>
        {Quizzes.map((quiz) => {
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
    </>
  );
}

export default QuizList;
