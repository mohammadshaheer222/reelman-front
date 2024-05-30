import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../../../../../Server";

const ListAbout = () => {
  const [details, setDetails] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`${server}/get-details`)
      .then((res) => setDetails(res.data.details))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/delete-details/${id}`)
      .then((res) => {
        alert("Are you want to delete this details?");
        fetchData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="py-20 h-screen overflow-auto px-4 md:px-2 text-center space-y-4">
      <Link to="/reelman-admin/add-about">
        <button className="bg-blue-500 text-white px-6 py-2">
          Add Details
        </button>
      </Link>

      <table className="w-full mx-auto border border-black">
        <thead>
          <tr className="text-start py-12 bg-black text-white">
            <th className="p-2">Para 1</th>
            <th className="p-2 border-2">Para 2</th>
            <th className="p-2 border-2">Image 1</th>
            <th className="p-2 border-2">Image 2</th>
            <th className="p-2"></th>
          </tr>
        </thead>

        <tbody>
          {details.map((data) => (
            <tr className="border border-black" key={data._id}>
              <td className="p-4 border border-black">{data.para1}</td>
              <td className="p-4 border border-black">{data.para2}</td>
              <td className="p-4 border border-black">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.image1}`}
                  alt=" image"
                  width={50}
                />
              </td>

              <td className="p-4 border border-black">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.image2}`}
                  alt=" image"
                  width={50}
                />
              </td>

              <td className="p-4 ">
                <div className="flex justify-center items-center gap-2 p-4 ">
                  <Link
                    to={`/reelman-admin/edit-about/${data._id}`}
                    className="bg-blue-500 text-white px-6 py-1 cursor-pointer active:scale-95 active:shadow-lg duration-100"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="bg-red-500 text-white px-6 py-1 cursor-pointer active:scale-95 active:shadow-lg duration-100"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAbout;
