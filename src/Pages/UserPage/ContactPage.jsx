import { useEffect, useState } from "react";
import Contact from "../../Components/User/Contact";
import Loader from "../../Components/Loader/Loader";

const ContactPage = () => {
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
        <Contact />
      )}
    </div>
  );
};

export default ContactPage;
