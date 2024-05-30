import { useEffect, useState } from "react";
import WeddingHome from "../../Components/User/Wedding/WeddingHome";
import WeddingMid from "../../Components/User/Wedding/WeddingMid";
import Loader from "../../Components/Loader/Loader";

const WeddingPage = () => {
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
          <WeddingHome />
          <WeddingMid />
        </div>
      )}
    </div>
  );
};

export default WeddingPage;
