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

  const fetchData = async () => {
    await axios
      .get(`${server}/get-slide`)
      .then((res) => {
        setCarousel(res.data.avatar);
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 6000,
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
