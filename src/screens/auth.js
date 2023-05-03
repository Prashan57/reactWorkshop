import React, { useContext, useState } from "react";
import Layout from "../layout/layout";
import { contentAlignment } from "../styles/styles";
import { AuthContext } from "../context/authContext";

const Auth = () => {
  const {
    loginData,
    setUsers,
    signUpData,
    isSignedUp,
    setIsSignedUp,
    users,
    addUsers,
    updateSignUpData,
    updateLoginData,
    authentication,
    isAuthenticated,
    setIsAuthenticated,
    registerUser,
    storedData,
  } = useContext(AuthContext);

  const [msg, setMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // //{ name, email, address, password }
    // registerUser(
    //   signUpData.name,
    //   signUpData.email,
    //   signUpData.address,
    //   signUpData.password
    // );
    addUsers({ signUpData });
    setMsg(false);
    const signUpDataString = JSON.stringify(users);
    window.localStorage.setItem("signUpData", signUpDataString);
    console.log("Data Pushed: ", signUpData);
  };

  
  const handleLogin = (e) => {
    e.preventDefault();

    authentication(loginData.email, loginData.password);
    console.log("Login Triggered:", loginData);
    if (users.length === 0) {
      console.log("No data exists");
      setMsg(true);
    }
  };

  return (
    <Layout>
      <div style={contentAlignment}>
        {console.log(users)}
        {!isSignedUp && (
          <form onSubmit={handleLogin}>
            <div style={{ color: "teal" }}>
              {!isAuthenticated && <h2>Login </h2>}
            </div>
            <div style={{ color: "green" }}>
              {isAuthenticated && <h2>Logged In </h2>}
              {isAuthenticated && (
                <button
                  type="button"
                  onClick={(e) => {
                    setUsers([]);
                    setIsAuthenticated(false);
                  }}
                >
                  Logout
                </button>
              )}
              <hr />
            </div>
            <div>
              Email :
              <br />
              <input
                type="text"
                name="email"
                required
                value={loginData.email}
                onChange={(e) => updateLoginData(e.target.value, "email")}
              ></input>
              <br />
              Password : <br />
              <input
                type="text"
                name="password"
                required
                value={loginData.password}
                onChange={(e) => {
                  updateLoginData(e.target.value, "password");
                }}
              ></input>
            </div>
            <br />
            <div>
              <button type="submit">Submit</button>
              <button onClick={() => setIsSignedUp(true)}>Sign Up</button>
            </div>

            <div style={{ color: "red" }}>
              {msg && <h3>No data exists currently</h3>}
            </div>
          </form>
        )}
        {isSignedUp && (
          <form onSubmit={handleSubmit}>
            <h2>Sign Up </h2>
            <hr />
            <br />
            <div>
              Email :{" "}
              <input
                name="email"
                type="text"
                value={signUpData.email}
                onChange={(e) => updateSignUpData(e.target.value, "email")}
              ></input>
              <br />
              Name :{" "}
              <input
                type="text"
                name="name"
                value={signUpData.name}
                onChange={(e) => updateSignUpData(e.target.value, "name")}
              />
              <br />
              Address :{" "}
              <input
                type="text"
                value={signUpData.address}
                onChange={(e) => updateSignUpData(e.target.value, "address")}
              />
              <br />
              Password :{" "}
              <input
                type="text"
                value={signUpData.password}
                onChange={(e) => updateSignUpData(e.target.value, "password")}
              />
            </div>
            <br />
            <div>
              <button type="submit">Submit</button>
              <button onClick={() => setIsSignedUp(false)}>Login</button>
            </div>
          </form>
        )}
        <hr />
        {/* Users Name Print  */}
        <div>
          {users.map((user) => {
            return <>--- {user.signUpData.name} ---</>;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
