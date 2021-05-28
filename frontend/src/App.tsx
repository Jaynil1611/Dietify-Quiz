import { Routes, Route } from "react-router";
import { Home, Navbar, QuizList, Quiz, NotFound } from "./components";
import { useAxios } from "./server";
import "./styles.css";
import { ScrollToTop } from "./utils";

function App() {
  useAxios("quizzes", "quizzes");
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quizzes/:quizId" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
