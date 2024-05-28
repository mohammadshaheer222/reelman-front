import Slider from "react-slick";

const Review = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const reviews = [
    {
      name: "John",
      message:
        "I was really impressed by the fabric and the stitching,They were so nice that my girlfriend had me buy her a shirt",
    },
    {
      name: "Adeeb Don",
      message: "Uncomprimised product,I am very satisfied with this product",
    },
    {
      name: "Dain",
      message:
        "Extremely comfortable pants that you can wear bum around at home, with a decent shirt and head out",
    },
    {
      name: "Marry",
      message:
        "What a genuine piece,i love my new t-shirt.Going to wear them for my next occassion!! ",
    },
    {
      name: "Ravis",
      message: "Totally love it!I love the quality of pants",
    },
  ];
  return (
    <div className="py-4 px-8">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="text-center space-y-4" key={index}>
            <h1 className="text-lg">{review.message}</h1>
            <h1 className="italic font-light">-{review.name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
