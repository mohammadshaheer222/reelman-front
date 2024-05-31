import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../../../../Server";

const ListService = () => {
  const [service, setService] = useState([]);
  console.log(service);

  const fetchData = async () => {
    await axios
      .get(`${server}/get-service`)
      .then((res) => setService(res.data.service))
      .catch((error) => console.log(error));
  };

  useEffect(() => {fetchData()}, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/delete-service/${id}`)
      .then((res) => {
        alert("Are you want to delete this wedding?");
        fetchData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="py-20 h-screen overflow-auto px-4 md:px-2 text-center space-y-4">
      <Link to="/reelman-admin/add-service">
        <button className="bg-blue-500 text-white px-6 py-2">
          Add Service
        </button>
      </Link>

      <table className="w-full mx-auto">
        <thead>
          <tr className="text-start py-12 bg-black text-white">
            <th className="p-2 border-2">Category</th>
            <th className="p-2 border-2">Description</th>
            <th className="p-2 border-2">Image</th>
            <th className="p-2 border-2"></th>
          </tr>
        </thead>

        <tbody className="border border-black">
          {service.map((data) => (
            <tr className="border border-black" key={data._id}>
              <td className="p-4 border border-black">{data.category}</td>
              <td className="p-4 border border-black">{data.description}</td>
              <td className="p-4">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.image}`}
                  alt="service image"
                  width={100}
                />
              </td>

              <td className="p-4 border border-black">
                <div className="flex justify-center items-center gap-2 p-4 ">
                  <Link
                    to={`/reelman-admin/edit-service/${data._id}`}
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

export default ListService;
