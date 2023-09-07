import React, { useEffect, useState, useMemo } from "react";
import Card from "../components/card";
import {Quilbot, PARAPHRASER, wordTune, reword, blackbox, GPT, bard, imgupscaler, StabelDiffusion, magicStudio, Pebblely, letsEnhance, claid, craiyon, cai, DeepAi, bing, you, leonardo, firefly, prosa} from "./@media"

// * fungsi untuk menampilkan array data card secara acak
const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const WelAi = () => {
  const [shuffledData, setShuffledData] = useState([]);
  const dataCard = useMemo(() => [
      {//quilbot
        imgUrl: Quilbot,
        Alt: "Quilbot",
        Title: "Quilbot",
        Desc: "Paraphrasing tool is designed to ensure you use the right ones. With unlimited Custom modes and 8 predefined modes.",
        Url: "https://quillbot.com/",
      },
      {//paraphraser
        imgUrl: PARAPHRASER,
        Alt: "paraphaser",
        Title: "Paraphaser ",
        Desc: "Accurately paraphrase sentences, paragraphs, and essays using state-of-the-art technology.",
        Url: "https://www.paraphraser.io/",
      },
      {//wordtune
        imgUrl: wordTune,
        Alt: "WordTune",
        Title: "WordTune",
        Desc: "Wordtune is built by AI21 Labs, founded in 2018 by AI luminaries. Advanced AI tools and language models that understand the context.",
        Url: "https://www.wordtune.com/",
      },
      {//reword
        imgUrl: reword,
        Alt: "reword",
        Title: "Reword",
        Desc: "Reword helps your team collaborate ethically with AI, so that you can write outstanding articles for your readers.",
        Url: "https://reword.com/",
      },
      {//blackbox
        imgUrl: blackbox,
        Alt: "blackbox",
        Title: "BlackBox",
        Desc: "BLACKBOX is your AI-Powered Coding Assistant so you can {Code} 10X Faster and Better.",
        Url: "https://www.useblackbox.io/",
      },
      {//gpt
        imgUrl: GPT,
        Alt: "Chat-GPT",
        Title: "Chat GPT",
        Desc: "ChatGPT is an AI model developed by OpenAI that uses the GPT-3.5 architecture. Designed for natural language understanding and generation.",
        Url: "https://openai.com/chatgpt",
      },
      {//bard
        imgUrl: bard,
        Alt: "bard-ai",
        Title: "Bard-Ai",
        Desc: "Bard is an AI-powered chatbot developed by Google, based initially on the LaMDA family of large language models and later the PaLM LLM.",
        Url: "https://bard.google.com/",
      },
      {//ImgUpscaler
        imgUrl: imgupscaler,
        Alt: "ImgUpscaler",
        Title: "ImgUpscaler",
        Desc: "Upscale and enhance your image by using the latest AI technology. Support batch process. Upscale multiple images as simple as TINYPNG compressing.",
        Url: "https://imgupscaler.com/",
      },
      {//StabelDiffusion
        imgUrl: StabelDiffusion,
        Alt: "StabelDiffusion",
        Title: "StabelDiffusion",
        Desc: "Generates detailed images from text prompts and can be applied to various tasks like inpainting, outpainting, and image-to-image translation.",
        Url: "https://colab.research.google.com/github/aikazu/vystmedia-sdwebui-collab/blob/main/Stable_Diffusion_Vystmedia.ipynb#scrollTo=A_u1lCHfMOTS",
      },
      {//Magic Studio
          imgUrl: magicStudio,
          Alt: "Magic Studio",
          Title:"Magic Studio",
          Desc: "Powered by AI, Created by You A magic wand for your pictures.",
          Url:"https://magicstudio.com/"
      },
      {//Pebblely
          imgUrl: Pebblely,
          Alt: "Pebblely",
          Title:"Pebblely",
          Desc: "Beautiful product photos in seconds, Create Instagram-worthy photos for any product.",
          Url: "https://pebblely.com/"
      },
      {//letsEnhance
          imgUrl: letsEnhance,
          Alt: "letsenhance",
          Title:"Letsenhance",
          Desc: "Increase image resolution, improve quality, and add clarity. Make photos look their best in one click & Generate captivating AI art in high quality.",
          Url: "https://letsenhance.io/"
      },
      {//claid
          imgUrl: claid,
          Alt: "claid",
          Title :"Claid",
          Desc: "Create beautiful converting content with AI, Automate end-to-end Image creation and boost your business using our suite of AI products.",
          Url: "https://claid.ai/"
      },
      {//craiyon
          imgUrl: craiyon,
          Alt: "craiyon",
          Title: "Craiyon",
          Desc: "Turn your words into wonderworks with Craiyon! Generate beautiful AI art with the world favorite new FREE AI image generator.",
          Url: "https://www.craiyon.com/"
      },
      {//cai
        imgUrl: cai,
        Alt: "c-ai",
        Title: "Beta Character Ai",
        Desc: "Character.AI is bringing to life the science-fiction dream of open-ended conversations and collaborations with computers.",
        Url: "https://beta.character.ai/",
      },
      {//DeepAi
        imgUrl: DeepAi,
        Alt: "deep ai",
        Title: "Deep AI",
        Desc: "Artificially intelligent tools for naturally creative humans. DeepAI offers a suite of tools that use AI to enhance your creativity.",
        Url: "https://deepai.org/",
      },
      {//bing
        imgUrl: bing,
        Alt: "Bing",
        Title: "Bing Ai",
        Desc: "Ask real questions. Get complete answers. Chat and create.",
        Url: "https://www.bing.com/new",
      },
      {//you
        imgUrl: you,
        Alt: "you",
        Title: "You Ai",
        Desc: "Search engine built on artificial intelligence that provides users with a customized search experience while keeping their data 100% private.",
        Url: "https://you.com/",
      },
      {//leonardo
        imgUrl: leonardo,
        Alt: "Leonardo",
        Title: "Leonardo Ai",
        Desc: "Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.",
        Url: "https://leonardo.ai/"
      },
      {//firefly
        imgUrl: firefly,
        Alt:"FireFly",
        Title:"Adobe FireFly",
        Desc: "Firefly is the new family of creative generative AI models coming to Adobe products, focusing initially on image and text effect generation.",
        Url: "https://www.adobe.com/sensei/generative-ai/firefly.html"
      },
      {//prosa
        imgUrl: prosa,
        Alt: "Prosa",
        Title: "Prosa",
        Desc : "Integrated Artificial Intelligence Solutions - Natural Language Processing (NLP), ranging from text analysis and conversational AI.",
        Url :"http://prosa.ai/"
      }
    ],
    []
  );
  useEffect(() => {
    document.title = "AiLabs - Ai";
    setShuffledData(shuffleArray(dataCard));
  }, [dataCard]);
  return (
    <div>
      <h1 className="text-center text-slate-200 font-bold text-2xl pl-64 pt-4">All Ai List</h1>
      <div className="flex flex-wrap justify-evenly items-center gap-3 pl-56 pt-8 pb-16">
        {shuffledData.map((card, index) => (
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
    </div>
  );
};

export default WelAi;
