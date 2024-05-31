import axios from "axios";
import { useState } from "react";
import { server } from "../../../../Server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MidSection = () => {
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(`${server}/get-mid`)
      .then((res) => {
        setCarousel(res.data.avatar);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useState(() => {
    fetchData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="py-4">
      <Slider {...settings}>
        {carousel.map((images) => (
          <div className="h-[90vh] w-screen" key={images._id}>
            <img
              src={`https://reelman-back.onrender.com/uploads/${images.midAvatar}`}
              alt="reelman photos"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MidSection;
