import React, { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import MainContent from "./components/MainContent";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <IntroAnimation onComplete={handleIntroComplete} />}
      {showContent && <MainContent />}
    </>
  );
};

export default App;