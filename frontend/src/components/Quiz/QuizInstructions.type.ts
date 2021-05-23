import { Quiz } from "../../database";

export type QuizInstructionsProps = {
  quiz: Quiz;
  setShowQuestions: (input: boolean) => void;
};
