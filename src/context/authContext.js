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

  const registerUser = ({ name, email, address, password }) => {
    const response = {};
    if (!password | !email | !address | !name) {
      response.error = "All Fields are empty";
      return response;
    }
    if (name.trim().split(" ").length < 2) {
      response.error = "Surname is missing";
      response.field = "name";
      return response;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      response.error = "Valid email is required";
      return response;
    }
    if (users.filter((user) => user.email === email).length > 0) {
      response.error = "User with the email address already exists";
      response.field = "email";
      return response;
    }
    setUsers((prev) => {
      const updatedUserArray = [
        {
          name,
          email,
          address,
          password,
          createdAt: Date.now(),
        },
        ...prev,
      ];

      const userArrayAsString = JSON.stringify(updatedUserArray);
      window.localStorage.setItem("users", userArrayAsString);
      return updatedUserArray;
    });

    response.success = true;
    return response;
  };

  const storedData = () => {
    console.log("Data Retrieval Triggered");
    try {
      const userListString = window.localStorage.getItem("users");

      if (!userListString) {
        const userArray = JSON.parse(userListString);
        console.log(userArray);
        setUsers(userArray);
      }
    } catch (e) {
      console.log(e);
    }
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
        storedData,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
