import { useState } from "react";
import axios from "axios";
import { server } from "../../../../Server";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddService = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();
    newForm.append("category", category);
    newForm.append("description", description);
    newForm.append("image", image);

    axios
      .post(`${server}/create-service`, newForm, config)
      .then((res) => {
        setIsLoading(false);
        toast.success("Submitted successfully!!");
        setCategory("");
        setDescription("");
        setImage("");
        navigate("/reelman-admin/list-service");
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
              name="category"
              id="category"
              value={category}
              placeholder="Category"
              className="w-full outline-none px-4 py-1"
              onChange={(event) => setCategory(event.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              placeholder="Description"
              className="w-full outline-none px-4 py-1"
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>

          <div className="mt-2 flex flex-col items-center ">
            <label
              className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              htmlFor="image"
            >
              <span className="text-center">Upload Your Image</span>
              <input
                type="file"
                name="image"
                id="image"
                accept=".jpg,.jpeg,.heic,.png"
                onChange={handleImageChange}
                className="sr-only"
                required
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {image ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={URL.createObjectURL(image)}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <RxAvatar className="h-24 w-24 text-gray-400" />
              )}
            </div>
          </div>

          <input
            type="submit"
            value={isLoading ? "Submitting.." : "Submit"}
            className="w-full bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 active:bg-blue-400 active:scale-95 active:shadow-lg duration-100"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
