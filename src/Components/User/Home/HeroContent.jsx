import { Background, Parallax } from "react-parallax";

const HeroContent = ({ images }) => {
  return (
    <div>
      <Parallax
        strength={500}
        style={{
          minHeight: "100vh",
          height: "auto",
          width: "100%",
        }}
      >
        <Background className="custom-bg w-screen h-screen">
          <img
            src={`https://reelman-back.onrender.com/uploads/${images}`}
            alt="Hero images"
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
        </Background>
      </Parallax>
    </div>
  );
};

export default HeroContent;
