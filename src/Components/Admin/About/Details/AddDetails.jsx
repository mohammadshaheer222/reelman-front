import axios from "axios";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { server } from "../../../../../Server";
import { toast } from "react-toastify";

const AddDetails = () => {
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFirstImage = (event) => {
    const file = event.target.files[0];
    setImage1(file);
  };

  const handleSecondImage = (event) => {
    const file = event.target.files[0];
    setImage2(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();
    newForm.append("para1", para1);
    newForm.append("para2", para2);
    newForm.append("image1", image1);
    newForm.append("image2", image2);

    axios
      .post(`${server}/create-details`, newForm, config)
      .then((res) => {
        setIsLoading(false);
        toast.success("Submitted Successfully!!");
        setPara1("");
        setPara2("");
        setImage1("");
        setImage2("");
        navigate("/reelman-admin/list-about");
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="flex justify-center h-full w-full items-center py-44">
      <form
        className="space-y-6 w-[80%] sm:w-[50%]  flex flex-col items-center bg-gray-100 py-4 sm:py-8"
        onSubmit={handleSubmit}
      >
        <div className="w-[80%] space-y-4">
          <div className="w-full">
            <input
              type="text"
              name="para1"
              id="para1"
              value={para1}
              placeholder="Para 1"
              className="w-full outline-none px-4 py-1"
              onChange={(event) => setPara1(event.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              name="para2"
              id="para2"
              value={para2}
              placeholder="Para 2"
              className="w-full outline-none px-4 py-1"
              onChange={(event) => setPara2(event.target.value)}
              required
            />
          </div>

          <div className="mt-2 flex flex-col items-center ">
            <label
              className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              htmlFor="image1"
            >
              <span className="text-center">Upload Your first Image</span>
              <input
                type="file"
                name="image1"
                id="image1"
                accept=".jpg,.jpeg,.heic,.png"
                onChange={handleFirstImage}
                className="sr-only"
                required
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {image1 ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={URL.createObjectURL(image1)}
                  alt="image"
                  loading="lazy"
                />
              ) : (
                <RxAvatar className="h-24 w-24 text-gray-400" />
              )}
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center ">
            <label
              className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              htmlFor="image2"
            >
              <span className="text-center">Upload Your second Image</span>
              <input
                type="file"
                name="image2"
                id="image2"
                accept=".jpg,.jpeg,.heic,.png"
                onChange={handleSecondImage}
                className="sr-only"
                required
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {image2 ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={URL.createObjectURL(image2)}
                  alt="image"
                  loading="lazy"
                />
              ) : (
                <RxAvatar className="h-24 w-24 text-gray-400" />
              )}
            </div>
          </div>

          <input
            type="submit"
            value={isLoading ? "Submitting" : "Submit"}
            className="w-full bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 active:bg-blue-400 active:scale-95 active:shadow-lg duration-100"
          />
        </div>
      </form>
    </div>
  );
};

export default AddDetails;
