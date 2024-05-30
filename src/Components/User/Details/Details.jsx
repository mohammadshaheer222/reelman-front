import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroContent from "../Home/HeroContent";
import DetailsHd from "./DetailsHd";
import { server } from "../../../../Server";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsPhotos from "./DetailsPhotos";

const Details = () => {
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
      <div>
        <HeroContent images={singleWedding.cover} />
        <DetailsHd singleWedding={singleWedding} />
        <DetailsPhotos singleWedding={singleWedding} />
      </div>
    </div>
  );
};
export default Details;
