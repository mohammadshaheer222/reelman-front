const DetailsPhotos = ({ singleWedding }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 px-8 gap-4 pb-6">
      {singleWedding && singleWedding.weddingAvatar && singleWedding.weddingAvatar.map((image) => (
        <img src={`https://reelman-back.onrender.com/uploads/${image}`} alt="" loading="lazy" className="w-52 h-52 sm:w-60 sm:h-60 object-cover" />
      ))}
    </div>
  );
};

export default DetailsPhotos;


// "flex justify-center items-center flex-wrap gap-4 px-8 py-6 "