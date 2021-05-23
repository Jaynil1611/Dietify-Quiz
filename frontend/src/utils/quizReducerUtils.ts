import { Option, Question, Quiz } from "../database";

export const getUpdatedOptions = (
  questions: Array<Question>,
  questionId: string,
  optionId: string
): Array<Question> => {
  return questions.map((question) => {
    if (question.id === questionId) {
      return {
        ...question,
        isAttempted: true,
        options: question.options.map((option: Option) => {
          return option.id === optionId
            ? { ...option, isSelected: true }
            : { ...option, isSelected: false };
        }),
      };
    }
    return question;
  });
};

export const getUpdatedScore = (
  quizAttempt: Quiz,
  questionId: string
): number => {
  const { questions, score } = quizAttempt;
  return questions.reduce(
    (finalScore, { id, options, negativePoints, points }) => {
      if (id === questionId) {
        return checkSelectedOption(options)
          ? score + points
          : score > negativePoints
          ? score - negativePoints
          : 0;
      }
      return finalScore;
    },
    0
  );
};

export const checkSelectedOption = (options: Array<Option>) => {
  return options.find(({ isRight, isSelected }) => isRight && isSelected);
};

export const getPoints = (
  options: Array<Option>,
  points: number,
  negativePoints: number
) => {
  return checkSelectedOption(options) ? points : negativePoints;
};
