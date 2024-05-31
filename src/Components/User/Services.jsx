import { Background, Parallax } from "react-parallax";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../Server";

const Services = () => {
  const [service, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    await axios
      .get(`${server}/get-service`)
      .then((res) => {
        setService(res.data.service);
      })
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
    <div>
      <div className="py-20 px-8">
        <h1 className="heading pb-4">Our Services</h1>
        {service.map((data) => (
          <div className="relative" key={data._id}>
            <Parallax
              className="md:h-[100vh]"
              strength={500}
              style={{
                minHeight: "90vh",
                maxHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Background className="custom-bg w-screen">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.image}`}
                  alt="service image"
                  className="h-[100vh] w-full object-cover object-center"
                  loading="eager"
                />
              </Background>
            </Parallax>

            <div className="absolute top-0 w-full h-full flex justify-center items-center sm:justify-start px-6 ">
              <div className="space-y-4 sm:max-w-2xl">
                <h1 className="text-4xl font-bold text-white">
                  {data.category}
                </h1>
                <p className="text-white">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
