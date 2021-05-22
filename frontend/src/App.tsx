import { Routes, Route } from "react-router";
import { Home, Navbar, QuizList } from "./components";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
      </Routes>
    </div>
  );
}

export default App;
