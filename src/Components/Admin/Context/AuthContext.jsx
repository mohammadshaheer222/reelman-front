import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { server } from "../../../../Server";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("token");
    if (savedUser) {
      setToken(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${server}/login`,
        { email, password },
        { withCredentials: true }
      );
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${server}/logout`, { withCredentials: true });
      setToken(null);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{token, login, logout }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
