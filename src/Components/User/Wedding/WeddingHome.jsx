import image1 from "/src/assets/images/carousel/carousel1.jpg";
import image2 from "/src/assets/images/carousel/carousel4.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg"
import weddingHero from "/src/assets/images/weddinghero.jpg"
import { Background, Parallax } from "react-parallax";

const WeddingHome = () => {
  const weddingCarousel = [
    { images: image2 },
    { images: image3 },
    { images: image1 },
  ];

  return (
      <div>
        <Parallax
          strength={200}
          style={{
            minHeight: "100vh",
            height: "auto",
            width: "100%",
          }}
        >
          <Background className="custom-bg w-screen h-screen">
            <img
              src={weddingHero}
              alt="Hero images"
              className="object-cover object-center w-full h-full"
              loading="lazy"
            />
          </Background>
        </Parallax>
      </div>
  );
};
export default WeddingHome;
