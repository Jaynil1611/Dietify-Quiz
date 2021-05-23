import { Routes, Route } from "react-router";
import { Home, Navbar, QuizList, Quiz } from "./components";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/NotFound/ScrollToTop";
import "./styles.css";

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
