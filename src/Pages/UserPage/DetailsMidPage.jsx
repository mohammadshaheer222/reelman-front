import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import DetailsMid from "../../Components/User/Details/DetailsMid";

const DetailsMidPage = () => {
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
        <DetailsMid/>
      )}
    </div>
  );
};

export default DetailsMidPage;
