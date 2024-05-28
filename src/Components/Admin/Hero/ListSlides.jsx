import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../../Server";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ListSlides = () => {
  const navigate = useNavigate();
  const [heroAvatar, setHeroAvatar] = useState([]);

  const fetchHeroData = async () => {
    await axios
      .get(`${server}/get-slide`,{withCredentials: true})
      .then((res) => {
        setHeroAvatar(res.data.avatar);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  const handleHeroDelete = async (id) => {
    await axios
      .delete(`${server}/delete-slide/${id}`,{withCredentials: true})
      .then((res) => {
        alert("Are you want to delete this photo?");
        fetchHeroData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const handleHeroUpdateChange = async (id, event) => {
    const file = event.target.files[0];

    const config = {
      header: { "Content-Type": "multipart/form-data" },
    };
    const newForm = new FormData();
    newForm.append("file", file);

    await axios
      .patch(`${server}/update-slide/${id}`, newForm, config)
      .then((res) => {
        fetchHeroData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4 py-44">
      <Link to="/reelman-admin/add-slide">
        <button className="bg-blue-500 text-white px-6 py-2">Add Photos</button>
      </Link>
      <div className="flex flex-col justify-center items-center bg-gray-100 px-16 py-16">
        <h2 className="text-4xl">Home Section Photos</h2>
        <div className="flex justify-center items-center gap-4 md:max-w-lg xl:max-w-6xl 2xl:max-w-full">
          {heroAvatar.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {heroAvatar.map((hero, index) => (
                <div key={hero._id} className=" py-4 space-y-2">
                  <p>{index + 1}</p>
                  <img
                    className="w-24 h-24"
                    src={`http://localhost:2000/uploads/${hero.heroAvatar}`}
                    alt=""
                  />
                  <button
                    className="bg-red-500 text-white w-full"
                    onClick={() => handleHeroDelete(hero._id)}
                  >
                    Delete
                  </button>
                  <label
                    className="ml- flex items-center justify-center px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50"
                    htmlFor={`file-input-${hero._id}`}
                  >
                    <span>Update</span>
                    <input
                      type="file"
                      name="hero-avatar"
                      id={`file-input-${hero._id}`}
                      accept=".jpg,.jpeg,.heic,.png"
                      onChange={(event) =>
                        handleHeroUpdateChange(hero._id, event)
                      }
                      className="sr-only"
                    />
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className=" text-lg text-gray-500 text-center py-14">
              <p>No Photos in Your Database</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListSlides;
