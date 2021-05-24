import { Routes, Route } from "react-router";
import { Home, Navbar, QuizList, Quiz, NotFound } from "./components";
import "./styles.css";
import { ScrollToTop } from "./utils";

function App() {
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
