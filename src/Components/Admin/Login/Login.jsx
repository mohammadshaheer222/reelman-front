import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await login(email, password);
      if (success) {
        toast.success("Login Successful!");
        setEmail("");
        setPassword("");
        setError("");
        navigate("/reelman-admin");
      } else {
        toast.error("Login Failed!");
        setError("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-6 w-full max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] bg-gray-100 py-24 px-8 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-medium">ReelMan Productions</h1>
        <div>
          <input
            className="px-4 py-2 outline-none w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="relative text-end">
          <input
            className="px-4 py-2 outline-none w-full"
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
          <Link to="/forgotten-password">
            <span className="text-underline text-sm cursor-pointer hover:text-gray-700">
              Lost your password?
            </span>
          </Link>
        </div>
        <div className="space-y-2">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="submit"
            value="Login"
            className="w-full bg-black text-white py-2 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
