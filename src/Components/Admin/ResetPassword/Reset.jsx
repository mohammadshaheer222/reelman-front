import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../../../../Server";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const Reset = () => {
  const { accessToken } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`${server}/reset-password/${accessToken}`, {password, confirmPass})
      .then((res) => {
        toast.success("Reset Password Successfully")
        navigate("/login")
        setPassword("");
        setConfirmPass("")
      })
      .catch((error) => toast.error(error.response.data.message));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col gap-6 w-full max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] bg-gray-100 py-24 px-8 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl">Reset Your Password</h1>
        <div className="relative flex flex-col gap-2">
          <input
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            className="px-3 py-2 bg-white outline-none"
            required
          />
          {visible ? (
            <AiOutlineEyeInvisible
              onClick={() => setVisible(false)}
              size={25}
              className={`absolute right-2 top-2 cursor-pointer text-gray-500 ${
                password ? "block" : "hidden"
              }`}
            />
          ) : (
            <AiOutlineEye
              onClick={() => setVisible(true)}
              size={25}
              className={`absolute right-2 top-2 cursor-pointer text-gray-500 ${
                password ? "block" : "hidden"
              }`}
            />
          )}
        </div>
        <div className="relative flex flex-col gap-2">
          <input
            type={visibleConfirm ? "text" : "password"}
            name="confirm-password"
            id="confirm-password"
            placeholder="confirm-password"
            autoComplete="confirm-password"
            onChange={(event) => setConfirmPass(event.target.value)}
            value={confirmPass}
            className="px-3 py-2 bg-white outline-none"
            required
          />
          {visibleConfirm ? (
            <AiOutlineEyeInvisible
              onClick={() => setVisibleConfirm(false)}
              size={25}
              className={`absolute right-2 top-2 cursor-pointer text-gray-500 ${
                confirmPass ? "block" : "hidden"
              }`}
            />
          ) : (
            <AiOutlineEye
              onClick={() => setVisibleConfirm(true)}
              size={25}
              className={`absolute right-2 top-2 cursor-pointer text-gray-500 ${
                confirmPass ? "block" : "hidden"
              }`}
            />
          )}
        </div>
        <div>
          <input
            type="submit"
            value="Reset"
            className="bg-black text-white w-full py-2 cursor-pointer active:scale-95 active:shadow-lg duration-100"
          />
        </div>
      </form>
    </div>
  );
};

export default Reset;
