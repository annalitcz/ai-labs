import React, { useEffect } from "react";
import Card from "../../components/card";
import { bard, bing, GPT, you } from "../@media";

const AiResearch = () => {
  const dataResearch = [
    {
      imgUrl: bard,
      Alt: "Bard",
      Title: "Bard Ai",
      Desc: "Bard is an AI-powered chatbot developed by Google, based initially on the LaMDA family of large language models and later the PaLM LLM.",
      Url: "https://bard.google.com/",
    },
    {
      imgUrl: GPT,
      Alt: "GPT",
      Title: "Chat GPT",
      Desc: "ChatGPT is an AI model developed by OpenAI that uses the GPT-3.5 architecture. Designed for natural language understanding and generation.",
      Url: "https://openai.com/chatgpt",
    },
    {
      imgUrl: bing,
      Alt: "Bing",
      Title: "Bing Ai",
      Desc: "Ask real questions. Get complete answers. Chat and create.",
      Url: "https://www.bing.com/new",
    },
    {
      imgUrl: you,
      Alt: "you",
      Title: "You Ai",
      Desc: "Search engine built on artificial intelligence that provides users with a customized search experience while keeping their data 100% private .",
      Url: "https://you.com/",
    },
  ];

  useEffect(() => {
    document.title = "AiLabs - AI Research";
  }, []);
  return (
    <div className="flex flex-wrap justify-evenly items-center gap-3 pl-60 pt-8 pb-2">
      {dataResearch.map((card, index) => (
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

export default AiResearch;
