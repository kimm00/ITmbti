import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage"; 


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
    </Router>
  );
}

export default App;

