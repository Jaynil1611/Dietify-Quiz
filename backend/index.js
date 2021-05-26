const express = require("express");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
app.use(compression());
dotenv.config();

const { initializeDBConnection } = require("./db/db.connect");
const { storeQuizzes } = require("./utils/storeQuizzes");
const { createUser } = require("./utils/createUser");
const quizRouter = require("./routes/quiz.route");
const quizAttemptRouter = require("./routes/quizAttempt.route");

const { pathNotFoundHandler } = require("./middlewares/pathNotFoundHandler");
const { errorHandler } = require("./middlewares/errorHandler");

initializeDBConnection();
// createUser();
// storeQuizzes();

app.use("/quizzes", quizRouter);
app.use("/user/:userId/attempt", quizAttemptRouter);

app.get("/", (req, res) => {
  res.json("Welcome to Dietify Quiz");
});

app.use(pathNotFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started on port: ", PORT);
});
