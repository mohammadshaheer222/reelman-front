import { FaInstagram } from "react-icons/fa6";
import insta1 from "/src/assets/images/carousel/carousel1.jpg";
import wedding2 from "/src/assets/images/work/gal-3.jpg";
import wedding3 from "/src/assets/images/wedding3.jpg";
import wedding4 from "/src/assets/images/wedding4.jpg";
import parallax from "/src/assets/images/paral2.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg";
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
                {/* <img
            className="hover:scale-105 transition-all duration-1000 object-cover w-64 h-36 md:w-96 md:h-96"
            src={img.images}
            alt=""
          /> */}
                <div
                  className="w-full h-96"
                  style={{
                    // width: "300px",
                    // height: "400px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <iframe
                    className="w-full"
                    src={`${data.link}embed/`}
                    title="Instagram Post"
                    // width="328"
                    height="455"
                    frameBorder="0"
                    scrolling="no"
                    // allowTransparency="true"
                    style={{ position: "absolute", top: "-75px" }}
                  />
                  {/* <div className="scale-0 group-hover:scale-100 duration-500 absolute top-0 flex justify-center items-center h-full w-full">
                <FaInstagram
                  size={20}
                  className=" text-white scale-125 hover:rotate-90 transition-all duration-500 md:w-52"
                />
              </div> */}
                </div>
                {/* <div className="overlay absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div> */}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <h1 className="heading pb-2">Instagram</h1> */}
    </div>
  );
};

export default Instagram;

{
  /* <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CWV-dYWPGnW/?utm_source=ig_embed" width={328} />
</div> */
}
