import WeddingContent from "../Home/WeddingContent";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../../Server";

const WeddingMid = () => {
  const [wedding, setWedding] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(`${server}/get-wedding`)
      .then((res) => {
        setWedding(res.data.wedding);
        setIsLoading(false);
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
    <div className="px-8 w-full py-6">
      <h1 className="heading pb-4">Wedding Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full gap-4">
        {wedding.map((wedding, index) => (
          <WeddingContent key={index} wedding={wedding} />
        ))}
      </div>
    </div>
  );
};

export default WeddingMid;
