import React, { useEffect, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { server } from "../../../../Server";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddMid = () => {
  const navigate = useNavigate();
  const [midAvatar, setMidAvatar] = useState([]);
  const [fileSelected, setFileSelected] = useState(false);
 

  const handleMidAvatar = (event) => {
    const file = event.target.files;
    const fileArr = Array.from(file);
    const totalFiles = fileArr.length + midAvatar.length;

    if (totalFiles > 10) {
      toast.error("You can upload a maximum of 10 photos.");
      return;
    }
    
    setMidAvatar((prev) => [...prev, ...fileArr]);
    setFileSelected(true);
  };

  const handleDelete = (index) => {
    const updatedMidAvatar = midAvatar.filter((_, i) => i !== index);
    setMidAvatar(updatedMidAvatar);
    setFileSelected(updatedMidAvatar.length > 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fileSelected) {
      alert("Please select at least one file.");
      return;
    }

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();

    for (let i = 0; i < midAvatar.length; i++) {
      newForm.append("mid-avatar", midAvatar[i]);
    }

    await axios
      .post(`${server}/create-mid`, newForm, config)
      .then((res) => {
        toast.success("Uploaded Successfully!!!");
        setMidAvatar("");
      })
      .catch((error) => toast.error("You can upload a maximum of 10 photos ,Delete photos in your list"));
  };

  return (
    <div className="flex justify-center h-full w-full items-center py-44">
      <form
        className="space-y-6 w-[80%] sm:w-[50%]  flex flex-col items-center bg-gray-100 py-4 sm:py-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center w-[80%] items-center  ">
          <div className=" text-lg font-medium py-4">
            <h1 className="text-4xl text-center">Add Middle Section Photos</h1>
          </div>

          <label
            htmlFor="mid-avatar"
            className="flex flex-col justify-center h-full items-center"
          >
            <div className="py-6">
              <span className="bg-green-500 w-full text-white px-4 py-2 cursor-pointer ">
                Browse Your Photos
              </span>
              <input
                className="sr-only"
                type="file"
                name="mid-avatar"
                id="mid-avatar"
                accept=".jpg,.jpeg,.heic,.png,.mp4"
                onChange={handleMidAvatar}
                multiple
                required
              />
            </div>
          </label>

          <div className="flex justify-center">
            {midAvatar.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4 gap-x-6 ">
                {midAvatar.map((midImg, index) => (
                  <div className="flex flex-col gap-2">
                    <img
                      className="w-32 h-40"
                      src={URL.createObjectURL(midImg)}
                      alt={index}
                    />
                    <button
                      className="bg-red-500 text-white"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <MdAddToPhotos
                size={100}
                className=" cursor-pointer text-gray-500"
              />
            )}
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-[50%] bg-blue-500 text-white py-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddMid;
