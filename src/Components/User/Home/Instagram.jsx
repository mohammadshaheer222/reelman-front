import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../../Server";

const Instagram = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    await axios
      .get(`${server}/get-insta`)
      .then((res) => setData(res.data.insta))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-8">
      {isLoading ? (
        <h1 className="heading pb-4">Instagram</h1>
      ) : (
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full  pt-2 gap-4 ">
            {data.map((data) => (
              <div
                className="relative cursor-pointer group overlay  top-0 left-0 w-full h-full bg-white transition-opacity duration-500 hover:opacity-50"
                key={data._id}
              >
                <div
                  className="w-full h-96"
                  style={{
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <iframe
                    className="w-full"
                    src={`${data.link}embed/`}
                    title="Instagram Post"
                    height="455"
                    frameBorder="0"
                    scrolling="no"
                    // allowTransparency="true"
                    style={{ position: "absolute", top: "-75px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Instagram;
