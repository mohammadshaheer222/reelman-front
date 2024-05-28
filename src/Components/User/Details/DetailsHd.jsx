import React from "react";

const DetailsHd = ({ singleWedding }) => {
  return (
    <div className="px-8 space-y-4 py-4">
      <h1 className="text-4xl">
        {singleWedding.groom} and {singleWedding.bride}
      </h1>
      <p>{singleWedding.description}</p>
    </div>
  );
};

export default DetailsHd;
