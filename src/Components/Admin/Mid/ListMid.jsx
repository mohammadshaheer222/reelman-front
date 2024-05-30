import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../../../Server";
import { toast } from "react-toastify";

const ListMid = () => {
  const navigate = useNavigate();
  const [midAvatar, setMidAvatar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMidData = async () => {
    await axios
      .get(`${server}/get-mid`)
      .then((res) => {
        setMidAvatar(res.data.avatar);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchMidData();
  }, []);

  const handleMidUpdateChange = async (id, event) => {
    const file = event.target.files[0];
    setIsLoading(true);

    const config = {
      header: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();
    newForm.append("file", file);

    await axios
      .patch(`${server}/update-mid/${id}`, newForm, config)
      .then((res) => {
        setIsLoading(false);
        toast.success("Update Successfully");
        fetchMidData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const handleMidDelete = async (id) => {
    await axios
      .delete(`${server}/delete-mid/${id}`)
      .then((res) => {
        alert("Are you want to delete this photo?");
        fetchMidData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4 py-44">
      <Link to="/reelman-admin/add-mid">
        <button className="bg-blue-500 text-white px-6 py-2">Add Photos</button>
      </Link>
      <div className="flex flex-col justify-center items-center bg-gray-100 px-16 py-16">
        <h2 className="text-4xl">Middle Section Photos</h2>
        <div className="flex justify-center items-center gap-4 md:max-w-lg xl:max-w-6xl 2xl:max-w-full">
          {midAvatar.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {midAvatar.map((mid, index) => (
                <div key={mid._id} className=" py-4 space-y-2">
                  <p>{index + 1}</p>
                  <img
                    className="w-24 h-24"
                    src={`https://reelman-back.onrender.com/uploads/${mid.midAvatar}`}
                    alt=""
                  />
                  <button
                    className="bg-red-500 text-white w-full active:scale-95 active:shadow-lg duration-100 cursor-pointer"
                    onClick={() => handleMidDelete(mid._id)}
                  >
                    Delete
                  </button>
                  <label
                    className="ml- flex items-center justify-center px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50 active:scale-95 active:shadow-lg duration-100"
                    htmlFor={`file-input-${mid._id}`}
                  >
                    <span>{isLoading ? "Updating.." : "Update"}</span>
                    <input
                      type="file"
                      name="mid-avatar"
                      id={`file-input-${mid._id}`}
                      accept=".jpg,.jpeg,.heic,.png"
                      onChange={(event) =>
                        handleMidUpdateChange(mid._id, event)
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

export default ListMid;
