import React from "react";
import { Link } from "react-router-dom";

const WeddingContent = ({ wedding }) => {
  return (
    <div className="relative">
      <Link to={`/details/${wedding._id}`}>
        <div className="overflow-hidden">
          <img
            className="object-cover object-center h-[28rem] w-full hover:scale-105 transition-all duration-700"
            src={`https://reelman-back.onrender.com/uploads/${wedding.profile}`}
            alt="wedding photo"
            loading="lazy"
          />
        </div>
        <p></p>
        <p className="capitalize font-medium text-xl py-2 ">
          "{wedding.quote}-" <br />
          <span className="text-gray-700">{wedding.groom} and {wedding.bride}</span>
          
        </p>
      </Link>
    </div>
  );
};

export default WeddingContent;
