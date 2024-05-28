import axios from "axios";
import { useState } from "react";
import { server } from "../../../../Server";
import { toast } from "react-toastify";

const Forgotten = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    await axios
      .post(`${server}/forgotten-password`, { email })
      .then((res) => {
        toast.success(res.data.message);
        setLoading(false);
        setEmail("");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col gap-6 w-full max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] bg-gray-100 py-24 px-8 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl">Lost Your Password</h1>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className="px-3 py-2 bg-white outline-none"
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value={`${loading ? "Sending.." : "Send"}`}
            className="bg-black text-white w-full py-2 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Forgotten;
