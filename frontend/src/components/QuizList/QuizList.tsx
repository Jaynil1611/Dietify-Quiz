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
import { Quizzes } from "../../database";
import {
  cardContentProps,
  cardImageProps,
  labelProps,
  questionDisplayProps,
  primaryButtonStyleProps,
} from "../../utils";

function QuizList() {
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
                <Link to={`/quizzes/${id}`}>
                  <Button as="a" mt={2} {...primaryButtonStyleProps}>
                    Start Quiz
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
