import React, { useState, useEffect, Suspense, startTransition } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Ai from "./pages/ai";
import Error from "./pages/error";
import AiProgramming from "./pages/ai/ai_programming";
import AiWriting from "./pages/ai/ai_writing";
import AiImg from "./pages/ai/ai_img";
import AiChat from "./pages/ai/ai_chat";
import AiResearch from "./pages/ai/ai_research";
import About from "./pages/about";

const Loading = React.lazy(() => import("./pages/loading"));
const Home = React.lazy(() => import("./pages/home"));

function App() {

  // * set loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        setIsLoading(false);
      });
    }, 2000);
  }, []);


  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Ai */}
              <Route path="/ai/*" element={<Ai />}>
                <Route path="ai_programming" element={<AiProgramming />} />
                <Route path="ai_write" element={<AiWriting />} />
                <Route path="ai_img" element={<AiImg />} />
                <Route path="ai_research" element={<AiResearch />} />
                <Route path="ai_chat" element={<AiChat />} />
              </Route>
              {/* About */}
              <Route path="/about" element={<About/>}/>
              {/* error */}
              <Route path="*" element={<Error />} />
            </Routes>
          </>
        )}
      </Suspense>
    </Router>
  );
}

export default App;