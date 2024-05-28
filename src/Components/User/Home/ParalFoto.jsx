import { Background, Parallax } from "react-parallax";
import parallaxImage from "/src/assets/images/paral2.jpg";

const ParalFoto = () => {
  return (
    <div className="pb-4 pt-4 md:h-[90vh]">
      <Parallax
        className="md:h-full"
        strength={100}
        style={{
          minHeight: "50vh",
          maxHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Background className="custom-bg w-screen">
          <img
            src={parallaxImage}
            alt=""
            className="h-[100vh] w-full object-cover object-center"
            loading="lazy"
          />
        </Background>
      </Parallax>
    </div>
  );
};

export default ParalFoto;
