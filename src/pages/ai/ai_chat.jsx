import React, { useEffect } from "react";
import Card from "../../components/card";
import { cai, DeepAi } from "../@media";

const AiChat = () => {
  const dataChat = [
    {
      imgUrl: cai,
      Alt: "c-ai",
      Title: "Beta Character Ai",
      Desc: "Character.AI is bringing to life the science-fiction dream of open-ended conversations and collaborations with computers.",
      Url: "https://beta.character.ai/",
    },
    {
      imgUrl: DeepAi,
      Alt: "deep ai",
      Title: "Deep AI",
      Desc: "Artificially intelligent tools for naturally creative humans. DeepAI offers a suite of tools that use AI to enhance your creativity.",
      Url: "https://deepai.org/",
    }
  ];

  useEffect(() => {
    document.title = "AiLabs - AI Chat";
  }, []);
  return (
    <div className="flex flex-wrap justify-evenly items-center gap-3 pl-60 pt-8 pb-16">
      {dataChat.map((card, index) => (
        <Card
          key={index}
          imgUrl={card.imgUrl}
          Alt={card.Alt}
          Title={card.Title}
          Desc={card.Desc}
          Url={card.Url}
        />
      ))}
    </div>
  );
};

export default AiChat;
