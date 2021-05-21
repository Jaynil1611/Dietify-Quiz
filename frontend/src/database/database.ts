import { v4 as uuidv4 } from "uuid";
import { Category, Quiz } from "./quiz.type";

export const Categories: Array<Category> = [
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Food",
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80",
    name: "Nutrition",
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1496163668521-39614a16b23f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    name: "Fitness",
  },
];

const Quiz1: Quiz = {
  id: "101",
  score: 0,
  name: "Food & Drink Trivia",
  totalQuestions: 5,
  type: "Food",
  difficulty: "easy",
  questions: [
    {
      id: "q1",
      question: 'A "hot dog" is a colloquial term used for what food?',
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "Hamburger Helper",
          isRight: false,
        },
        {
          id: "o2",
          text: "Frankfurter",
          isRight: true,
        },
        {
          id: "o3",
          text: "Alpo",
          isRight: false,
        },
        {
          id: "o4",
          text: "Twinkie",
          isRight: false,
        },
      ],
    },
    {
      id: "q2",
      question: 'The "Buddha\'s hand" is a type of what?',
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "Fruit",
          isRight: true,
        },
        {
          id: "o2",
          text: "Fish Dish",
          isRight: false,
        },
        {
          id: "o3",
          text: "Vegetable",
          isRight: false,
        },
        {
          id: "o4",
          text: "Chicken Dish",
          isRight: false,
        },
      ],
    },
    {
      id: "q3",
      question:
        "Which treat has become synonymous with the celebration of Halloween?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "Cadbury Crème Egg",
          isRight: false,
        },
        {
          id: "o2",
          text: "Candy Canes",
          isRight: false,
        },
        {
          id: "o3",
          text: "M&M's",
          isRight: false,
        },
        {
          id: "o4",
          text: "Candy Corn",
          isRight: true,
        },
      ],
    },
    {
      id: "q4",
      question:
        "A snack made from marshmallows, graham crackers and chocolate is called what?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "S'more",
          isRight: false,
        },
        {
          id: "o2",
          text: "Zebra Snack",
          isRight: false,
        },
        {
          id: "o3",
          text: "Oreo",
          isRight: true,
        },
        {
          id: "o4",
          text: "Millionaire's Pie",
          isRight: false,
        },
      ],
    },
    {
      id: "q5",
      question: "What is the only edible food that is said to never spoils?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "Honey",
          isRight: true,
        },
        {
          id: "o2",
          text: "Rice",
          isRight: false,
        },
        {
          id: "o3",
          text: "Soy Sauce",
          isRight: false,
        },
        {
          id: "o4",
          text: "Salt",
          isRight: false,
        },
      ],
    },
  ],
};

const Quiz2: Quiz = {
  id: "102",
  score: 0,
  name: "Nutrition Trivia",
  totalQuestions: 5,
  type: "Nutrition",
  difficulty: "easy",
  questions: [
    {
      id: "q1",
      question: "You should you eat fruits and vegetables because",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "They contain fiber, which helps keep your digestive system healthy",
          isRight: false,
        },
        {
          id: "o2",
          text: "They give you energy",
          isRight: false,
        },
        {
          id: "o3",
          text: "They contain vitamins and minerals that help you stay healthy",
          isRight: false,
        },
        {
          id: "o4",
          text: "All of the above",
          isRight: true,
        },
      ],
    },
    {
      id: "q2",
      question: `Vitamin A is important for good eyesight, helps your body fight infection, and keeps your skin and
      hair healthy. Which of the following foods have the most vitamin A?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "deep yellow or orange fruits and vegetables",
          isRight: true,
        },
        {
          id: "o2",
          text: "breads",
          isRight: false,
        },
        {
          id: "o3",
          text: "meats",
          isRight: false,
        },
        {
          id: "o4",
          text: "meats",
          isRight: false,
        },
      ],
    },
    {
      id: "q3",
      question: `This fruit is dried in the sun to make raisins,
      grows on a vine, and is a healthy snack. Which fruit is it?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "orange",
          isRight: false,
        },
        {
          id: "o2",
          text: "grape",
          isRight: true,
        },
        {
          id: "o3",
          text: "apple",
          isRight: false,
        },
        {
          id: "o4",
          text: "grapefruit",
          isRight: false,
        },
      ],
    },
    {
      id: "q4",
      question: `Vitamin C helps your body fight disease by maintaining a strong immune system. Which food has
      more vitamin C?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "milk",
          isRight: false,
        },
        {
          id: "o2",
          text: "broccoli",
          isRight: false,
        },
        {
          id: "o3",
          text: "bread",
          isRight: false,
        },
        {
          id: "o4",
          text: "oranges",
          isRight: true,
        },
      ],
    },
    {
      id: "q5",
      question: `Citrus fruits contain citric acid, also known as Vitamin C. Vitamin C is needed to keep the immune
      system strong. Which of the following is a citrus fruit?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "grapefruit",
          isRight: true,
        },
        {
          id: "o2",
          text: "banana",
          isRight: false,
        },
        {
          id: "o3",
          text: "cantaloupe",
          isRight: false,
        },
        {
          id: "o4",
          text: "apple",
          isRight: false,
        },
      ],
    },
  ],
};

const Quiz3: Quiz = {
  id: "103",
  score: 0,
  name: "Fitness Trivia",
  totalQuestions: 5,
  type: "Fitness",
  difficulty: "easy",
  questions: [
    {
      id: "q1",
      question: "When is aerobic exercise good for your heart?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "sometimes",
          isRight: false,
        },
        {
          id: "o2",
          text: "only when you get older",
          isRight: false,
        },
        {
          id: "o3",
          text: "always",
          isRight: true,
        },
        {
          id: "o4",
          text: "never",
          isRight: false,
        },
      ],
    },
    {
      id: "q2",
      question: "Which of the following are examples of an aerobic activity?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "jogging",
          isRight: false,
        },
        {
          id: "o2",
          text: "swimming",
          isRight: false,
        },
        {
          id: "o3",
          text: "jumping rope",
          isRight: false,
        },
        {
          id: "o4",
          text: "all of the above",
          isRight: true,
        },
      ],
    },
    {
      id: "q3",
      question:
        "Your heart is a major organ in your cardiovascular system that pumps your blood. How many chambers does your heart have?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "one",
          isRight: false,
        },
        {
          id: "o2",
          text: "two",
          isRight: false,
        },
        {
          id: "o3",
          text: "three",
          isRight: false,
        },
        {
          id: "o4",
          text: "four",
          isRight: true,
        },
      ],
    },
    {
      id: "q4",
      question: "Cigarettes contain a very addictive drug called __________",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "tobacco",
          isRight: false,
        },
        {
          id: "o2",
          text: "nicotine",
          isRight: true,
        },
        {
          id: "o3",
          text: "fat",
          isRight: false,
        },
        {
          id: "o4",
          text: "water",
          isRight: false,
        },
      ],
    },
    {
      id: "q5",
      question:
        "The heart is a muscle that pumps blood. The average heart beats:",
      points: 10,
      negativePoints: 2,
      options: [
        {
          id: "o1",
          text: "10,000 times a day",
          isRight: false,
        },
        {
          id: "o2",
          text: "50,000 times a day",
          isRight: false,
        },
        {
          id: "o3",
          text: "100,000 times a day",
          isRight: true,
        },
        {
          id: "o4",
          text: "1 million times a day",
          isRight: false,
        },
      ],
    },
  ],
};

export const Quizzes: Array<Quiz> = [Quiz1, Quiz2, Quiz3];
