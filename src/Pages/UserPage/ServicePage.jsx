import React, { useEffect, useState } from "react";
import Services from "../../Components/User/Services";
import Loader from "../../Components/Loader/Loader";

const ServicePage = () => {
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
        <Services />
      )}
    </div>
  );
};

export default ServicePage;
