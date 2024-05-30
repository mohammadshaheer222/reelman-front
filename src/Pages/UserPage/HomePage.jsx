import About from "../../Components/User/Home/About";
import Hero from "../../Components/User/Home/Hero";
import Wedding from "../../Components/User/Home/Wedding";
import ParalFoto from "../../Components/User/Home/ParalFoto";
import Reels from "../../Components/User/Home/Reels";
import Instagram from "../../Components/User/Home/Instagram";
import MidSection from "../../Components/User/Home/MidSection";
import Review from "../../Components/User/Home/Reviews";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <MidSection />
      <Wedding />
      <Reels />
      <ParalFoto />
      <Instagram />
      <Review />
    </div>
  );
};

export default HomePage;
