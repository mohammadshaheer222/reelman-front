import axios from "axios";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { server } from "../../../../Server";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Wedding = () => {
  const navigate = useNavigate();
  const [groom, setGroom] = useState("");
  const [bride, setBride] = useState("");
  const [quote, setQuote] = useState("");
  const [description, setDescription] = useState("");
  const [weddingAvatar, setWeddingAvatar] = useState([]);
  const [profileAvatar, setProfileAvatar] = useState(null);
  const [gifAvatar, setGifAvatar] = useState(null);
  const [coverAvatar, setCoverAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    setProfileAvatar(file);
  };

  const handleGifChange = (event) => {
    const file = event.target.files[0];
    setGifAvatar(file);
  };

  const handleCoverChange = (event) => {
    setCoverAvatar(event.target.files[0]);
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const fileArr = Array.from(files);
    setWeddingAvatar((prev) => [...prev, ...fileArr]);
  };

  const handleDelete = (id) => {
    const updatedWeddingAvatar = [...weddingAvatar];
    updatedWeddingAvatar.splice(id, 1);
    setWeddingAvatar(updatedWeddingAvatar);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const newForm = new FormData();
    for (let i = 0; i < weddingAvatar.length; i++) {
      newForm.append("file", weddingAvatar[i]);
    }

    newForm.append("groom", groom);
    newForm.append("bride", bride);
    newForm.append("quote", quote);
    newForm.append("description", description);
    newForm.append("profile-avatar", profileAvatar);
    newForm.append("gif-avatar", gifAvatar);
    newForm.append("cover-avatar", coverAvatar);

    await axios
      .post(`${server}/create-wedding`, newForm, config)
      .then((res) => {
        setIsLoading(false);
        toast.success("Upload Successfully!!");
        navigate("/reelman-admin/list-wedding");
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
            Groom
          </label>
          <input
            className=" outline-none px-4 py-1"
            type="text"
            onChange={(event) => setGroom(event.target.value)}
            name="groom"
            id="groom"
            value={groom}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Bride
          </label>
          <input
            className=" outline-none px-4 py-1"
            type="text"
            onChange={(event) => setBride(event.target.value)}
            name="bride"
            id="bride"
            value={bride}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Quote
          </label>
          <input
            className=" outline-none px-4 py-1"
            type="text"
            onChange={(event) => setQuote(event.target.value)}
            name="quote"
            id="quote"
            value={quote}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg">
            Description
          </label>
          <input
            className=" outline-none px-4 py-1"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            name="description"
            id="description"
            value={description}
          />
        </div>

        <div className="flex justify-center items-center gap-6">
          {gifAvatar >= 0 && (
            <div className="mt-2 flex flex-col items-center ">
              <label
                className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:scale-95 active:shadow-lg duration-100"
                htmlFor="profile-avatar"
              >
                <span className="text-center">Upload Your Profile Photo</span>
                <input
                  type="file"
                  name="profile-avatar"
                  id="profile-avatar"
                  accept=".jpg,.jpeg,.heic,.png"
                  onChange={handleProfileChange}
                  className="sr-only"
                  required
                />
              </label>
              <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
                {profileAvatar ? (
                  <img
                    className="h-24 w-24 object-cover"
                    src={URL.createObjectURL(profileAvatar)}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <RxAvatar className="h-24 w-24 text-gray-400" />
                )}
              </div>
            </div>
          )}

          {profileAvatar >= 0 && (
            <div className="mt-2 flex flex-col items-center ">
              <label
                className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:shadow-lg active:scale-95 duration-100"
                htmlFor="gif-avatar"
              >
                <span className="text-center">
                  Upload Your Gif Profile Photo
                </span>
                <input
                  type="file"
                  name="gif-avatar"
                  id="gif-avatar"
                  accept=".jpg,.jpeg,.heic,.png"
                  onChange={handleGifChange}
                  className="sr-only"
                  required
                />
              </label>
              <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
                {gifAvatar ? (
                  <img
                    className="h-24 w-24 object-cover"
                    src={URL.createObjectURL(gifAvatar)}
                    alt=""
                    loading="lazy"
                  />
                ) : (
                  <RxAvatar className="h-24 w-24 text-gray-400" />
                )}
              </div>
            </div>
          )}

          <div className="mt-2 flex flex-col items-center">
            <label
              className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:scale-95 active:shadow-lg duration-100"
              htmlFor="cover-avatar"
            >
              <span className="text-center">Upload Your Cover Photo</span>
              <input
                type="file"
                name="cover-avatar"
                id="cover-avatar"
                accept=".jpg,.jpeg,.heic,.png"
                onChange={handleCoverChange}
                className="sr-only"
                required
              />
            </label>
            <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
              {coverAvatar ? (
                <img
                  className="h-24 w-24 object-cover"
                  src={URL.createObjectURL(coverAvatar)}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <RxAvatar className="h-24 w-24 text-gray-400" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center w-full">
          <label
            className="flex cursor-pointer items-center justify-center px-4 py-2 border border-gray-300  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full active:scale-95 active:shadow-lg duration-100"
            htmlFor="file-input"
          >
            <span>Upload Your Wedding photos</span>
            <input
              type="file"
              name="avatar"
              id="file-input"
              accept=".jpg,.jpeg,.heic,.png"
              onChange={handleFileInputChange}
              className="sr-only"
              multiple
              required
            />
          </label>
          <div className="pt-6 flex gap-4 flex-wrap justify-center items-center">
            {weddingAvatar.slice(0, 5).map((avatar, index) => (
              <div className="flex flex-col gap-2">
                <span
                  key={index}
                  className="inline-block h-24 w-24 overflow-hidden"
                >
                  <img
                    className="h-full w-full object-cover"
                    alt={`avatar-${index}`}
                    src={URL.createObjectURL(avatar)}
                    loading="lazy"
                  />
                </span>
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white active:scale-95 active:shadow-lg duration-100 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            ))}
            {weddingAvatar.length === 0 && (
              <RxAvatar className="h-24 w-24 text-gray-400" />
            )}
          </div>
        </div>
        <input
          type="submit"
          value={isLoading ? "Submitting..." : "Submit"}
          className="bg-blue-500 text-white w-full py-1 cursor-pointer hover:bg-blue-600 active:bg-blue-400 active:scale-95 active:shadow-lg duration-100"
        />
      </form>
    </div>
  );
};

export default Wedding;
