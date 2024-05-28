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
        {/* <p className="heading text-center tracking-tight font-extralight block text-md md:text-lg capitalize">
        {wedding.quote}
          <br />
        <span className="uppercase font-medium">{wedding.bride}</span> and{" "}
        <span className="uppercase font-medium">{wedding.groom}</span>
      </p> */}
        <p className="capitalize font-medium text-lg py-2 ">
          {wedding.bride} and {wedding.groom}
        </p>
      </Link>
    </div>
  );
};

export default WeddingContent;
