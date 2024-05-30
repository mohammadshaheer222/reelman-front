import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../../Server";
import { toast } from "react-toastify";

const ListInsta = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    await axios
      .get(`${server}/get-insta`)
      .then((res) => setData(res.data.insta))
      .catch((error) => toast.error(error.response.data.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!isValidInstagramLink(link)) {
      setError("Please enter a valid Instagram link.");
      return;
    }
    setError("");

    await axios
      .post(`${server}/create-insta`, { link })
      .then((res) => {
        setIsLoading(false);
        toast.success("Added Successfully!!!");
        window.location.reload();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const isValidInstagramLink = (link) => {
    const instagramRegex =
      /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/[a-zA-Z0-9_-]+\/?$/;
    return instagramRegex.test(link);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/delete-insta/${id}`)
      .then((res) => {
        alert("Are you want to delete this post?");
        fetchData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-6 px-14 py-44">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <div>
          <input
            className="px-8 py-2 outline-none"
            type="text"
            name="link"
            id="link"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            placeholder="Enter your link here.."
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div>
          <button type="submit" className="bg-blue-500 px-8 py-2 text-white active:scale-95 active:shadow-lg duration-100">
            {isLoading ? "Adding.." : "Add"}
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center items-center bg-white">
        {data.map((data) => (
          <div className="py-10" key={data._id}>
            <div
              key={data._id}
              className="  flex justify-center"
              style={{
                width: "228px",
                height: "200px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <iframe
                src={`${data.link}embed/`}
                title="Instagram Post"
                width="200"
                height="260"
                frameBorder="0"
                scrolling="no"
                style={{ position: "absolute", top: "-75px" }}
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={() => handleDelete(data._id)}
                className="bg-red-500 text-white w-1/2 active:scale-95 active:shadow-lg duration-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInsta;
