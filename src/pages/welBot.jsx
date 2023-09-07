import React, { useEffect } from "react";

const WelBot = () => {
  useEffect(() => {
    document.title = "AiVerse - Bot";
  }, []);

  return (
    <div className="flex flex-col gap-3 pl-96 pt-40">
      wel bot
    </div>
  );
};

export default WelBot;
