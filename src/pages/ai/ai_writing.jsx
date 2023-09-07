import React, { useEffect } from "react";
import Card from "../../components/card";
import { Quilbot, PARAPHRASER, wordTune, reword } from "../@media";

const AiWriting = () => {
  const dataCardW = [
    {
      imgUrl: Quilbot,
      Alt: "Quilbot",
      Title: "Quilbot",
      Desc: "Paraphrasing tool is designed to ensure you use the right ones. With unlimited Custom modes and 8 predefined modes.",
      Url: "https://quillbot.com/"
    },
    {
      imgUrl: PARAPHRASER,
      Alt: "paraphaser",
      Title: "Paraphaser ",
      Desc: "Accurately paraphrase sentences, paragraphs, and essays using state-of-the-art technology.",
      Url: "https://www.paraphraser.io/"
    },
    {
      imgUrl: wordTune,
      Alt: "WordTune",
      Title: "WordTune",
      Desc: "Wordtune is built by AI21 Labs, founded in 2018 by AI luminaries. Advanced AI tools and language models that understand the context.",
      Url: "https://www.wordtune.com/"
    },
    {
      imgUrl: reword,
      Alt: "reword",
      Title: "Reword",
      Desc: "Reword helps your team collaborate ethically with AI, so that you can write outstanding articles for your readers.",
      Url: "https://reword.com/"
    }
  ];

  useEffect(() => {
    document.title = "AiLabs - AI Writing";
  }, []);
  return (
    <div className="flex flex-wrap justify-evenly items-center gap-3 pl-60 pt-8 pb-16">
      {dataCardW.map((card, index) => (
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

export default AiWriting;
