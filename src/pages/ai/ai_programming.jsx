import React, { useEffect } from "react";
import Card from "../../components/card";
import {bard, GPT, blackbox} from "../@media"

const AiProgramming = () => {
  const cardsData = [
    {
      imgUrl: blackbox,
      Alt: "blackbox",
      Title: "BlackBox",
      Desc: "BLACKBOX is your AI-Powered Coding Assistant so you can {Code} 10X Faster and Better.",
      Url: "https://www.useblackbox.io/",
    },
    {
      imgUrl: GPT,
      Alt: "Chat-GPT",
      Title: "Chat GPT",
      Desc: "ChatGPT is an AI model developed by OpenAI that uses the GPT-3.5 architecture. Designed for natural language understanding and generation.",
      Url: "https://openai.com/chatgpt",
    },
    {
      imgUrl: bard,
      Alt: "bard-ai",
      Title: "Bard-Ai",
      Desc: "Bard is an AI-powered chatbot developed by Google, based initially on the LaMDA family of large language models and later the PaLM LLM.",
      Url: "https://bard.google.com/",
    },
  ];

  useEffect(() => {
    document.Title = "AiLabs - AI Programming";
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly items-center gap-3 pl-60 pt-8 pb-2">
      {cardsData.map((card, index) => (
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

export default AiProgramming;
