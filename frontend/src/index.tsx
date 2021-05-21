import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuizContextProvider } from "./contexts";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
