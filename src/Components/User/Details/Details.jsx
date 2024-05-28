import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "/src/assets/images/carousel/carousel1.jpg";
import image2 from "/src/assets/images/carousel/carousel4.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg";
import HeroContent from "../Home/HeroContent";
import DetailsHd from "./DetailsHd";
import { server } from "../../../../Server";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsPhotos from "./DetailsPhotos";

const Details = () => {
  const weddingCarousel = [
    { images: image2 },
    { images: image3 },
    { images: image1 },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const { weddingId } = useParams();
  const [singleWedding, setSingleWedding] = useState([]);

  const fetchSingleWedding = async () => {
    await axios
      .get(`${server}/single-wedding/${weddingId}`)
      .then((res) => setSingleWedding(res.data.wedding))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchSingleWedding();
  }, []);

  return (
    <div>
      <HeroContent images={singleWedding.cover} />
      <DetailsHd singleWedding={singleWedding} />
      <DetailsPhotos singleWedding={singleWedding} />
    </div>
  );
};
export default Details;
