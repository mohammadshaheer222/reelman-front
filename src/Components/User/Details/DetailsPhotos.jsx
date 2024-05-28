const DetailsPhotos = ({ singleWedding }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4 px-8 py-6 ">
      {singleWedding && singleWedding.weddingAvatar && singleWedding.weddingAvatar.map((image) => (
        <img src={`https://reelman-back.onrender.com/uploads/${image}`} alt="" loading="lazy" className="w-60 h-60 object-cover" />
      ))}
    </div>
  );
};

export default DetailsPhotos;
