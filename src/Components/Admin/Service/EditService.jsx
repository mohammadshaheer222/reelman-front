import axios from "axios";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { server } from "../../../../Server";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditService = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const fetchData = async () => {
    await axios
      .get(`${server}/single-service/${id}`)
      .then((res) => {
        setCategory(res.data.service.category);
        setDescription(res.data.service.description);
        setImage(res.data.service.image);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();
    newForm.append("category", category);
    newForm.append("description", description);
    newForm.append("image", image);

    axios
      .patch(`${server}/update-service/${id}`, newForm, config)
      .then((res) => {
        setIsLoading(false);
        toast.success("Updated Successfully!!");
        navigate("/reelman-admin/list-service");
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="h-full w-full flex justify-center py-20">
      <form
        className="space-y-6 sm:mx-auto sm:w-full sm:max-w-md px-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Category
          </label>
          <input
            className="bg-gray-100 outline-none px-4 py-1"
            type="text"
            onChange={(event) => setCategory(event.target.value)}
            name="category"
            id="category"
            value={category}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Description
          </label>
          <input
            className="bg-gray-100 outline-none px-4 py-1"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            name="description"
            id="description"
            value={description}
            required
          />
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="mt-2 flex flex-col items-center ">
            <label
              className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:scale-95 active:shadow-lg duration-100"
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
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {image ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={
                    image instanceof File
                      ? URL.createObjectURL(image)
                      : `https://reelman-back.onrender.com/uploads/${image}`
                  }
                  alt="image"
                />
              ) : (
                <RxAvatar className="h-24 w-24 text-gray-300" />
              )}
            </div>
          </div>
        </div>

        <input
          type="submit"
          value={isLoading ? "Updating.." : "Update"}
          className="bg-blue-500 text-white w-full py-1 cursor-pointer hover:bg-blue-600 active:bg-blue-400 active:scale-95 active:shadow-lg duration-100"
        />
      </form>
    </div>
  );
};

export default EditService;
