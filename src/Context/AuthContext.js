import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const userStorage = JSON.parse(localStorage.getItem("PROYECTO_VENTA.user")) || {};
  
    const [user, setUser] = useState({userStorage});

  function login(user, pass) {
    if (user === "codigo" && pass === "1234") {
      const authUser = {
        user: user,
        name: "Bienvenido Codigo",
      };
      localStorage.setItem("PROYECTO_VENTA.user",JSON.stringify(authUser));
      setUser(authUser);
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem("PROYECTO_VENTA.user");
    setUser({});
  }

  function isAuth() {
    return user.name ? true : false;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
