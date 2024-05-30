import { useEffect, useState } from "react";
import HeroAbout from "../../Components/User/About/HeroAbout";
import Team from "../../Components/User/About/Team";
import About from "../../Components/User/Home/About";
import Loader from "../../Components/Loader/Loader";

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <div>
          <HeroAbout />
          <About />
          <Team />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
