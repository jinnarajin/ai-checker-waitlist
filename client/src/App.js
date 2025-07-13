import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./MainHome";
import WaitlistPage from "./WaitlistPage";
import AIChecker from "./AIChecker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/aichecker" element={<AIChecker />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
