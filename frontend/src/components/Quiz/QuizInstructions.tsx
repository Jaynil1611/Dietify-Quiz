import {
  Button,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { QuizInstructionsProps } from "./QuizInstructionsProps.type";
import { InfoIcon } from "@chakra-ui/icons";
import { primaryButtonStyleProps, constructURL } from "../../utils";
import { callMockServer } from "../../server";
import { showToast } from "../Toast/Toast";

function QuizInstructions(prop: QuizInstructionsProps) {
  const {
    setShowQuestions,
    quiz: { name, totalQuestions },
  } = prop;

  const showQuestions = async () => {
    const { error } = await callMockServer({
      type: "post",
      url: `${constructURL()}/attempt`,
      data: prop.quiz,
    });
    if (!error) {
      return setShowQuestions(true);
    }
    showToast(`You've exhausted your quiz attempt`, "error");
  };

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
          <ListItem>
            <ListIcon as={InfoIcon} color="green.500" />
            Maxiumum <b>1</b> quiz attempt is allowed
          </ListItem>
          <ListItem textAlign={"center"}>
            <Button
              onClick={showQuestions}
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
