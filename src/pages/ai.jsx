import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import AiProgramming from "./ai/ai_programming";
import AiWriting from "./ai/ai_writing";
import AiImg from './ai/ai_img'
import AiResearch from './ai/ai_research'
import AiChat from './ai/ai_chat' 
import SidebarAi from "../components/sidebar_ai";
import WelAi from "./welAi";
import Error from "./error";

const Ai = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "64px" }}></div>
      <div className="flex flex-1">
        <SidebarAi />

        <Routes>
          <Route path='/' element={<WelAi />} />
          <Route path="ai_programming" element={<AiProgramming />} />
          <Route path="ai_write" element={<AiWriting />} />
          <Route path="ai_img" element={<AiImg />} />
          <Route path="ai_research" element={<AiResearch />} />
          <Route path="ai_chat" element={<AiChat />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Ai;
