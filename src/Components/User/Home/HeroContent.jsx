// import { Background, Parallax } from "react-parallax";

// const HeroContent = ({ images }) => {
//   return (
//     <div>
//       <Parallax
//         strength={200}
//         style={{
//           minHeight: "100vh",
//           height: "auto",
//           width: "100%",
//         }}
//       >
//         <Background className="custom-bg w-screen h-screen">
//           <img
//             src={`https://reelman-back.onrender.com/uploads/${images}`}
//             alt="Hero images"
//             className="object-cover object-center w-full h-full"
//             loading="eager"
//           />
//         </Background>
//       </Parallax>
//     </div>
//   );
// };

// export default HeroContent;


import { Background, Parallax } from "react-parallax";
import { useState, useEffect } from "react";

const HeroContent = ({ images }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://reelman-back.onrender.com/uploads/${images}`);
        if (response.ok) {
          setImageSrc(`https://reelman-back.onrender.com/uploads/${images}`);
        } else {
          console.error("Failed to load image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [images]);

  return (
    <div>
      <Parallax
        strength={100} // Reduced strength for better performance
        style={{
          minHeight: "100vh",
          height: "auto",
          width: "100%",
        }}
      >
        <Background className="custom-bg w-screen h-screen">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Hero images"
              className="object-cover object-center w-full h-full"
              loading="lazy" // Changed to lazy loading for better performance
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p>Loading...</p> {/* Placeholder while the image loads */}
            </div>
          )}
        </Background>
      </Parallax>
    </div>
  );
};

export default HeroContent;

