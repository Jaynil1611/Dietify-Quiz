import { useQuiz } from "../../contexts/quizContext";
import {
  VStack,
  Heading,
  Text,
  Tag,
  SimpleGrid,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  checkSelectedOption,
  primaryButtonStyleProps,
  questionStyleProps,
} from "../../utils";
import { Option } from "../../database";
import OptionReview from "./OptionReview";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

function QuestionReview() {
  const {
    state: { quizAttempt },
  } = useQuiz();
  const { questions, totalQuestions } = quizAttempt!;
  const navigate = useNavigate();

  return (
    <>
      <SimpleGrid gap={6} textAlign={"center"} mb={8}>
        {questions.map((quizQuestion, index) => {
          const { id, question, isAttempted, options, points, negativePoints } =
            quizQuestion;
          return (
            <div key={id}>
              <VStack key={id} spacing={[3, 6]} mt={4}>
                <Text {...questionStyleProps}>
                  Question : {index + 1} / {totalQuestions}
                </Text>
                <Heading fontSize={"xl"} m={0}>
                  {question}
                </Heading>
                <Tag
                  textAlign={"center"}
                  p={4}
                  fontSize={"md"}
                  bgColor="gray.200"
                >
                  Points : {"  "}
                  {isAttempted ? getPoints(options, points, negativePoints) : 0}
                </Tag>
              </VStack>
              <OptionReview options={options} />
            </div>
          );
        })}
        <Box m={"auto"}>
          <Button
            onClick={() => navigate("/quizzes")}
            rightIcon={<ArrowForwardIcon />}
            {...primaryButtonStyleProps}
          >
            End Review
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
}

const getPoints = (
  options: Array<Option>,
  points: number,
  negativePoints: number
) => {
  return checkSelectedOption(options) ? points : negativePoints;
};

export default QuestionReview;
