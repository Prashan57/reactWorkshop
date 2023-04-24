import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [signUpData, setSignUpData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    key: Date.now(),
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (value, key = "name") => {
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const updateSignUpData = (value, key = "name") => {
    setSignUpData({
      ...signUpData,
      [key]: value,
    });
  };

  const addUsers = (newUser) => {
    setUsers([...users, newUser]);
  };

  const newPage = () => {
    setIsAuthenticated(true);
    console.log("Authenticated");
  };
  const authentication = (userEmail, password) => {
    users.map((user) => {
      if (
        user.signUpData.email === userEmail &&
        user.signUpData.password === password
      ) {
        newPage();
      } else {
        setIsAuthenticated(false);
        alert("Invalid data");
        console.log("try again");
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedUp,
        setIsSignedUp,
        loginData,
        setLoginData,
        signUpData,
        setSignUpData,
        users,
        addUsers,
        updateLoginData,
        updateSignUpData,
        authentication,
        isAuthenticated,
        setUsers,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
