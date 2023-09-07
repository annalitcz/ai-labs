import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Home = () => {
  useEffect(() => {
    document.title = "AiLabs";
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "64px" }}></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center pt-60 text-5xl leading-5 font-bold tracking-wide lilita text-slate-300">
          A collection of useful AIs to facilitate your work.
        </h1>
        <Link
          className="w-40 text-center tracking-wide bg-slate-600 rounded-md mt-6 p-3 text-teal-50 hover:bg-slate-500"
          to={"ai"}
        >
          find Ai
        </Link>
      </div>
    </>
  );
};

export default Home;
