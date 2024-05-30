import { Parallax, Background } from "react-parallax";
import about from "/src/assets/images/about.jpg";
import { useEffect, useState } from "react";

const HeroAbout = () => {
  
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
            src={about}
            alt="Hero images"
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
        </Background>
      </Parallax>
    </div>
  );
};

export default HeroAbout;
