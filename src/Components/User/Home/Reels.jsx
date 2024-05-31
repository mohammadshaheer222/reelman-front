import { Background, Parallax } from "react-parallax";
import Marquee from "react-fast-marquee";
import video1 from "/src/assets/images/video/video1.gif";
import video2 from "/src/assets/images/video/video2.gif";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../../Server";

const Reels = () => {
  const videos = [
    {
      video: video1,
    },
    {
      video: video2,
    },
  ];

  const [wedding, setWedding] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(`${server}/get-wedding-mid`)
      .then((res) => {
        setWedding(res.data.wedding);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-6">
      {wedding.map(
        (data) =>
            <Link to={`/details-mid/${data._id}`} key={data._id}>
              <div className="relative">
                <Parallax
                  className="md:h-[100vh]"
                  strength={200}
                  style={{
                    minHeight: "90vh",
                    maxHeight: "90vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Background className="custom-bg w-screen">
                    <img
                      src={`https://reelman-back.onrender.com/uploads/${data.profile}`}
                      alt=""
                      className="h-[100vh] w-full object-cover object-center"
                      loading="lazy"
                    />
                  </Background>
                </Parallax>

                <div className="absolute top-0 w-full h-full flex justify-center items-end mix-blend-difference">
                  <Marquee speed={30} className="overflow-hidden">
                    <h1 className="text-8xl font-bold text-white">
                      {data.quote}
                    </h1>
                  </Marquee>
                </div>
              </div>
            </Link>
      )}
    </div>
  );
};

export default Reels;
