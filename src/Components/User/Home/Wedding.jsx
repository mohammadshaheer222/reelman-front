import WeddingContent from "./WeddingContent";
import axios from "axios";
import { server } from "../../../../Server";
import { useEffect, useState } from "react";

const Wedding = () => {
  const [latestWedding, setLatestWedding] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    // setIsLoading(true);
    await axios
      .get(`${server}/latest-wedding`)
      .then((res) => {
        setLatestWedding(res.data.latestWedding);
        // setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-8 w-full h-full ">
      {isLoading ? <h1 className="heading pb-4">Wedding Stories</h1> : null}
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full w-full gap-4 ">
          {latestWedding.map((wedding, index) => (
            <WeddingContent key={index} wedding={wedding} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wedding;
