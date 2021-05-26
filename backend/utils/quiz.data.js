const Categories = [
  {
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Food",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80",
    name: "Nutrition",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496163668521-39614a16b23f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    name: "Fitness",
  },
];

const Quiz1 = {
  score: 0,
  image:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  name: "Food & Drink Trivia",
  totalQuestions: 5,
  type: "Food",
  difficulty: "easy",
  questions: [
    {
      question: 'A "hot dog" is a colloquial term used for what food?',
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "Hamburger Helper",
          isRight: false,
        },
        {
          text: "Frankfurter",
          isRight: true,
        },
        {
          text: "Alpo",
          isRight: false,
        },
        {
          text: "Twinkie",
          isRight: false,
        },
      ],
    },
    {
      question: 'The "Buddha\'s hand" is a type of what?',
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "Fruit",
          isRight: true,
        },
        {
          text: "Fish Dish",
          isRight: false,
        },
        {
          text: "Vegetable",
          isRight: false,
        },
        {
          text: "Chicken Dish",
          isRight: false,
        },
      ],
    },
    {
      question:
        "Which treat has become synonymous with the celebration of Halloween?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "Cadbury Crème Egg",
          isRight: false,
        },
        {
          text: "Candy Canes",
          isRight: false,
        },
        {
          text: "M&M's",
          isRight: false,
        },
        {
          text: "Candy Corn",
          isRight: true,
        },
      ],
    },
    {
      question:
        "A snack made from marshmallows, graham crackers and chocolate is called what?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "S'more",
          isRight: false,
        },
        {
          text: "Zebra Snack",
          isRight: false,
        },
        {
          text: "Oreo",
          isRight: true,
        },
        {
          text: "Millionaire's Pie",
          isRight: false,
        },
      ],
    },
    {
      question: "What is the only edible food that is said to never spoils?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "Honey",
          isRight: true,
        },
        {
          text: "Rice",
          isRight: false,
        },
        {
          text: "Soy Sauce",
          isRight: false,
        },
        {
          text: "Salt",
          isRight: false,
        },
      ],
    },
  ],
};

const Quiz2 = {
  score: 0,
  image:
    "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80",
  name: "Nutrition Trivia",
  totalQuestions: 5,
  type: "Nutrition",
  difficulty: "easy",
  questions: [
    {
      question: "You should you eat fruits and vegetables because",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "They contain fiber, which helps keep your digestive system healthy",
          isRight: false,
        },
        {
          text: "They give you energy",
          isRight: false,
        },
        {
          text: "They contain vitamins and minerals that help you stay healthy",
          isRight: false,
        },
        {
          text: "All of the above",
          isRight: true,
        },
      ],
    },
    {
      question: `Vitamin A is important for good eyesight, helps your body fight infection, and keeps your skin and
      hair healthy. Which of the following foods have the most vitamin A?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "deep yellow or orange fruits and vegetables",
          isRight: true,
        },
        {
          text: "breads",
          isRight: false,
        },
        {
          text: "meats",
          isRight: false,
        },
        {
          text: "candy",
          isRight: false,
        },
      ],
    },
    {
      question: `This fruit is dried in the sun to make raisins,
      grows on a vine, and is a healthy snack. Which fruit is it?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "orange",
          isRight: false,
        },
        {
          text: "grape",
          isRight: true,
        },
        {
          text: "apple",
          isRight: false,
        },
        {
          text: "grapefruit",
          isRight: false,
        },
      ],
    },
    {
      question: `Vitamin C helps your body fight disease by maintaining a strong immune system. Which food has
      more vitamin C?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "milk",
          isRight: false,
        },
        {
          text: "broccoli",
          isRight: false,
        },
        {
          text: "bread",
          isRight: false,
        },
        {
          text: "oranges",
          isRight: true,
        },
      ],
    },
    {
      question: `Citrus fruits contain citric acid, also known as Vitamin C. Vitamin C is needed to keep the immune
      system strong. Which of the following is a citrus fruit?
      `,
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "grapefruit",
          isRight: true,
        },
        {
          text: "banana",
          isRight: false,
        },
        {
          text: "cantaloupe",
          isRight: false,
        },
        {
          text: "apple",
          isRight: false,
        },
      ],
    },
  ],
};

const Quiz3 = {
  score: 0,
  name: "Fitness Trivia",
  image:
    "https://images.unsplash.com/photo-1496163668521-39614a16b23f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  totalQuestions: 5,
  type: "Fitness",
  difficulty: "easy",
  questions: [
    {
      question: "When is aerobic exercise good for your heart?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "sometimes",
          isRight: false,
        },
        {
          text: "only when you get older",
          isRight: false,
        },
        {
          text: "always",
          isRight: true,
        },
        {
          text: "never",
          isRight: false,
        },
      ],
    },
    {
      question: "Which of the following are examples of an aerobic activity?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "jogging",
          isRight: false,
        },
        {
          text: "swimming",
          isRight: false,
        },
        {
          text: "jumping rope",
          isRight: false,
        },
        {
          text: "all of the above",
          isRight: true,
        },
      ],
    },
    {
      question:
        "Your heart is a major organ in your cardiovascular system that pumps your blood. How many chambers does your heart have?",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "one",
          isRight: false,
        },
        {
          text: "two",
          isRight: false,
        },
        {
          text: "three",
          isRight: false,
        },
        {
          text: "four",
          isRight: true,
        },
      ],
    },
    {
      question: "Cigarettes contain a very addictive drug called __________",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "tobacco",
          isRight: false,
        },
        {
          text: "nicotine",
          isRight: true,
        },
        {
          text: "fat",
          isRight: false,
        },
        {
          text: "water",
          isRight: false,
        },
      ],
    },
    {
      question:
        "The heart is a muscle that pumps blood. The average heart beats:",
      points: 10,
      negativePoints: 2,
      options: [
        {
          text: "10,000 times a day",
          isRight: false,
        },
        {
          text: "50,000 times a day",
          isRight: false,
        },
        {
          text: "100,000 times a day",
          isRight: true,
        },
        {
          text: "1 million times a day",
          isRight: false,
        },
      ],
    },
  ],
};

const Quizzes = [Quiz1, Quiz2, Quiz3];

module.exports = { Quizzes, Categories };
