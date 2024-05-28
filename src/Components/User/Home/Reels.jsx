import { Background, Parallax } from "react-parallax";
import Marquee from "react-fast-marquee";
import video1 from "/src/assets/images/video/video1.gif";
import video2 from "/src/assets/images/video/video2.gif";
import { Link } from "react-router-dom";

const Reels = () => {
  const videos = [
    {
      video: video1,
    },
    {
      video: video2,
    },
  ];

  return (
    <div className="pt-6">
      {videos.map((video, index) => (
        <Link to="/details" key={index} >
          <div className="relative">
            <Parallax
              className="md:h-[100vh]"
              strength={500}
              style={{
                minHeight: "90vh",
                maxHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Background className="custom-bg w-screen">
                <img
                  src={video.video}
                  alt=""
                  className="h-[100vh] w-full object-cover object-center"
                  loading="lazy"
                />
              </Background>
            </Parallax>

            <div className="absolute top-0 w-full h-full flex justify-center items-end mix-blend-difference">
              <Marquee speed={30} className="overflow-hidden">
                <h1 className="text-8xl font-bold text-white">
                  Wedding Day Wedding Day
                </h1>
              </Marquee>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Reels;
