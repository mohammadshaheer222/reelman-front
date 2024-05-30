import weddingHero from "/src/assets/images/weddinghero.jpg";
import { Background, Parallax } from "react-parallax";

const WeddingHome = () => {
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
