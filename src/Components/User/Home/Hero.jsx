import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroContent from "./HeroContent";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../../Server";
import { toast } from "react-toastify";

const Hero = () => {
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(`${server}/get-slide`)
      .then((res) => {
        setCarousel(res.data.avatar);
        setIsLoading(false);
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  useEffect(() => {
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
    <div>
      <Slider {...settings}>
        {carousel.map((images) => (
          <HeroContent key={images._id} images={images.heroAvatar} />
        ))}
      </Slider>
    </div>
  );
};
export default Hero;
