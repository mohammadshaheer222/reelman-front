import axios from "axios";
import { createContext, useState } from "react";
import { server } from "../../../../Server";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${server}/login`,
        { email, password },
        { withCredentials: true }
      );
      if (response.data.success) {
        setIsAuthenticated(true);
        setUser(response.data.token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
