import About from "../../Components/User/Home/About";
import Hero from "../../Components/User/Home/Hero";
import Wedding from "../../Components/User/Home/Wedding";
import ParalFoto from "../../Components/User/Home/ParalFoto";
import Reels from "../../Components/User/Home/Reels";
import Instagram from "../../Components/User/Home/Instagram";
// import Services from "../../Components/User/Home/Services";
import MidSection from "../../Components/User/Home/MidSection";
// import Video from "../../Components/User/Home/Video";
import Review from "../../Components/User/Home/Reviews";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <Hero />
          <About />
          {/* <Services /> */}
          <MidSection />
          <Wedding />
          <Reels />
          {/* <Video /> */}
          <ParalFoto />
          <Instagram />
          <Review />
        </>
      )}
    </div>
  );
};

export default HomePage;
