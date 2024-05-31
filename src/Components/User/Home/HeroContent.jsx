import { Parallax } from "react-parallax";

const HeroContent = ({ images }) => {
  return (
    <div>
      <Parallax
        bgImage={`http://localhost:2000/uploads/${images}`}
        strength={200}
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100vh",
        }}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Parallax>
    </div>
  );
};

export default HeroContent;
