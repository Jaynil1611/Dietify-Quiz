import { Routes, Route } from "react-router";
import {
  Home,
  Navbar,
  QuizList,
  Quiz,
  NotFound,
  PrivateRoute,
  Login,
  SignUp,
} from "./components";
import { useAxios } from "./server";
import "./styles.css";
import { ScrollToTop, setupAuthHeaderForServerCalls } from "./utils";

function App() {
  setupAuthHeaderForServerCalls(
    JSON.parse(localStorage.getItem("isUserLoggedIn")!)
  );
  useAxios("quizzes", "quizzes");
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <PrivateRoute path="/quizzes/:quizId" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
