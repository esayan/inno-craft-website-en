import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import GamePrivacy from "./pages/GamePrivacy";
import QuizPage from "./pages/QuizPage";
import StackBuilderPage from "./pages/StackBuilderPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/gameprivacy" element={<GamePrivacy />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/stack-builder" element={<StackBuilderPage />} />
    </Routes>
  );
};

export default App;
