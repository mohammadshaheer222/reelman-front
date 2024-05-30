import { useEffect, useState } from "react";
import Details from "../../Components/User/Details/Details";
import Loader from "../../Components/Loader/Loader";

const DetailsPage = () => {
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
        <Details />
      )}
    </div>
  );
};

export default DetailsPage;
