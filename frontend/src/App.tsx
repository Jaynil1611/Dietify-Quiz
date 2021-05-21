import { Routes, Route } from "react-router";
import { Home, Navbar } from "./components";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
