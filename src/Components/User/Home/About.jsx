import parallax from "/src/assets/images/paral2.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../../Server";

const About = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    await axios
      .get(`${server}/get-details`)
      .then((res) => setDetails(res.data.details))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, fetchData());
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      {details.map((data) => (
        <div className="px-8 md:max-w-4xl lg:max-w-7xl h-full space-y-6 py-12 lg:pb-12 ">
          <div className="text-4xl lg:relative sm:text-6xl sm:text-center ">
            <h1 className="lg:absolute lg:top-24 lg:z-30 ">
              Reelman Productions
            </h1>
          </div>
          <div className="lg:flex lg:justify-center lg:items-center">
            <div className="pt-2 flex relative sm:justify-center gap-x-2 sm:gap-x-14 ">
              <div className=" lg:pt-60">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.image1}`}
                  className="about-img1 w-28 h-28 object-cover object-center sm:w-80 sm:h-80"
                  alt="image"
                />
              </div>
              <div className="hidden lg:block lg:max-w-md lg:pt-40 text-balance lg:text-lg">
                <p>{data.para1}</p>
                <p>{data.para2}</p>
              </div>
              <div className="absolute right-0 sm:static sm:pt-10 top-14 lg:static ">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.image2}`}
                  className="about-img2 w-28 h-28 object-cover object-center sm:w-80 sm:h-96"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="pt-16 sm:pt-0 block lg:hidden">
            <p>{data.para1}</p>
            <p>{data.para2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default About;
