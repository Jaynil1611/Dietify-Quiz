export type Quiz = {
  id: string;
  userId?: string;
  score: number;
  image: string;
  name: string;
  totalQuestions: number;
  questions: Array<Question>;
  type: string;
  difficulty: string;
};

export type Question = {
  id: string;
  question: string;
  points: number;
  negativePoints?: number;
  options: Array<Option>;
};

export type Option = {
  id: string;
  text: string;
  isRight: boolean;
  isSelected?: boolean;
};

export type Category = {
  id: string;
  image: string;
  name: string;
};
