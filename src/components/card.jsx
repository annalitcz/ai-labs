import React from "react";

const Card = ({ imgUrl, Alt, Title, Desc, Url }) => {
  return (
    <div className="w-500 h-440 rounded-lg shadow-md p-3 bg-slate-700">
      <img
        src={imgUrl}
        alt={Alt}
        className="w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-slate-50">{Title}</h3>
        <div className="w-full h-20 pl-1 pt-1">
          <p className="text-base text-slate-50">{Desc}</p>
        </div>
        <div className="pt-4">
          <a
            href={Url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-slate-500 font-semibold bg-slate-900 w-32 p-2 rounded hover:scale-105 duration-500"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
