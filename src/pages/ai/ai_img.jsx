import React, { useEffect } from "react";
import Card from "../../components/card";
import { imgupscaler, StabelDiffusion, magicStudio, Pebblely, letsEnhance, claid, craiyon, leonardo, firefly } from "../@media";

const AiImg = () => {

  const itemsImg = [
    {
      imgUrl: leonardo,
      Alt: 'Leonardo',
      Title: 'Leonardo Ai',
      Desc: 'Create production-quality visual assets for your projects with unprecedented quality, speed, and style-consistency.',
      Url: 'https://leonardo.ai/'
    },
    {
      imgUrl: imgupscaler,
      Alt: "ImgUpscaler",
      Title: "ImgUpscaler",
      Desc: "Upscale and enhance your image by using the latest AI technology. Support batch process. Upscale multiple images as simple as TINYPNG compressing.",
      Url: "https://imgupscaler.com/",
    },
    {
      imgUrl: StabelDiffusion,
      Alt: "StabelDiffusion",
      Title: "StabelDiffusion",
      Desc: "Generates detailed images from text prompts and can be applied to various tasks like inpainting, outpainting, and image-to-image translation.",
      Url: "https://colab.research.google.com/github/aikazu/vystmedia-sdwebui-collab/blob/main/Stable_Diffusion_Vystmedia.ipynb#scrollTo=A_u1lCHfMOTS",
    },
    {
        imgUrl: magicStudio,
        Alt: 'Magic Studio',
        Title:'Magic Studio',
        Desc: 'Powered by AI, Created by You A magic wand for your pictures.',
        Url:"https://magicstudio.com/"
    },
    {
        imgUrl: Pebblely,
        Alt: 'Pebblely',
        Title:'Pebblely',
        Desc: 'Beautiful product photos in seconds, Create Instagram-worthy photos for any product.',
        Url: 'https://pebblely.com/'
    },
    {
        imgUrl: letsEnhance,
        Alt: 'letsenhance',
        Title:'Letsenhance',
        Desc: 'Increase image resolution, improve quality, and add clarity. Make photos look their best in one click & Generate captivating AI art in high quality.',
        Url: 'https://letsenhance.io/'
    },
    {
        imgUrl: claid,
        Alt: 'claid',
        Title :'Claid',
        Desc: 'Create beautiful converting content with AI, Automate end-to-end Image creation and boost your business using our suite of AI products.',
        Url: 'https://claid.ai/'
    },
    {
        imgUrl: craiyon,
        Alt: 'craiyon',
        Title: 'Craiyon',
        Desc: 'Turn your words into wonderworks with Craiyon! Generate beautiful AI art with the world favorite new FREE AI image generator.',
        Url: 'https://www.craiyon.com/'
    },
    {//firefly
      imgUrl: firefly,
      Alt:"FireFly",
      Title:"Adobe FireFly",
      Desc: "Firefly is the new family of creative generative AI models coming to Adobe products, focusing initially on image and text effect generation.",
      Url: "https://www.adobe.com/sensei/generative-ai/firefly.html"
    },
  ];

  useEffect(() => {
    document.title = "AiLabs - AI Image";
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly items-center gap-2 pl-60 pt-8 pb-16">
      {itemsImg.map((card, index) => (
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

export default AiImg;
