import { useEffect, useState } from "react";
import { server } from "../../../../Server";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListWedding = () => {
  const navigate = useNavigate();
  const [weddingData, setWeddingData] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`${server}/get-wedding`, {
        withCredentials: true,
      })
      .then((res) => setWeddingData(res.data.wedding))
      .catch((error) => {
        console.log(error);
        // navigate("/login")
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/delete-wedding/${id}`)
      .then((res) => {
        alert("Are you want to delete this wedding?")
        fetchData();
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="py-20 h-screen overflow-auto px-4 md:px-2 text-center space-y-4">
      <Link to="/reelman-admin/add-wedding">
        <button className="bg-blue-500 text-white px-6 py-2">
          Add Wedding
        </button>
      </Link>
      <table className="w-full mx-auto border-2">
        <thead>
          <tr className="text-start py-12 bg-black text-white">
            <th className="p-2 border-2">Profile (Image)</th>
            <th className="p-2 border-2">Profile (Gif)</th>
            <th className="p-2 border-2">Cover</th>
            <th className="p-2 border-2">Images</th>
            <th className="p-2 border-2">Bride</th>
            <th className="p-2 border-2">Groom</th>
            <th className="p-2 border-2">Quote</th>
            <th className="p-2 border-2">Description</th>
            <th className="p-2 border-2"></th>
          </tr>
        </thead>
        <tbody>
          {weddingData.map((data) => (
            <tr key={data._id}rs>
              <td className="p-4 border border-black">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.profile}`}
                  alt="profile image"
                  width={50}
                  loading="lazy"
                />
              </td>
              <td className="p-4 border border-black">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.gif}`}
                  alt="profile image"
                  width={50}
                  loading="lazy"
                />
              </td>
              <td className="p-4 border border-black">
                <img
                  src={`https://reelman-back.onrender.com/uploads/${data.cover}`}
                  alt="cover image"
                  width={50}
                  loading="lazy"
                />
              </td>
              
              <td className="p-4 border border-black">
                <div>{data.bride}</div>
              </td>
              <td className="p-4 border border-black">
                <div>{data.groom}</div>
              </td>
              <td className="p-4 border border-black">
                <div>{data.quote}</div>
              </td>
              <td className="p-4 border border-black">
                <div>{data.description}</div>
              </td>
              <td className="p-4 border border-black">
                <div className="flex justify-center items-center gap-2 p-4 ">
                  <Link
                    to={`/reelman-admin/edit-wedding/${data._id}`}
                    className="bg-blue-500 text-white px-6 py-1 "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="bg-red-500 text-white px-6 py-1"
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

export default ListWedding;
