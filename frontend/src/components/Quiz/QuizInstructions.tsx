import {
  Button,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { QuizInstructionsProps } from "./QuizInstructions.type";
import { InfoIcon } from "@chakra-ui/icons";
import { primaryButtonStyleProps } from "../../utils";

function QuizInstructions(prop: QuizInstructionsProps) {
  const {
    setShowQuestions,
    quiz: { name, totalQuestions },
  } = prop;
  return (
    <>
      <Container
        m={"auto"}
        my={{ base: "1rem", md: "3rem" }}
        p={{ base: "1.3rem", md: "2rem" }}
        border={"1px"}
        borderColor={"gray.100"}
      >
        <Heading textAlign="center">{name}</Heading>
        <List spacing={6} mt={6}>
          <ListItem fontSize={"1rem"} fontWeight={"semibold"} color="gray.600">
            Few instructions to be known before starting the quiz
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color="green.500" />
            There are a total of {totalQuestions} questions in the quiz
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color="green.500" />
            Each question will carry 10 points for correct answer & 2 points
            will be deducted for incorrect answer
          </ListItem>
          <ListItem>
            <ListIcon as={InfoIcon} color="green.500" />
            You need to score atleast 25 points to pass the quiz
          </ListItem>
          <ListItem textAlign={"center"}>
            <Button
              onClick={() => setShowQuestions(true)}
              maxW={"min"}
              mt={2}
              {...primaryButtonStyleProps}
            >
              Start Quiz
            </Button>
          </ListItem>
        </List>
      </Container>
    </>
  );
}

export default QuizInstructions;
