import React, { useState } from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import { contentAlignment, contentLinkStyle } from "../styles/styles";

const Contact = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (value, key = "name") => {
    setLoginData((p) => {
      p[key] = value;
      return p;
    });
  };

  const updateSignupData = (value, key = "name") => {
    setSignupData({});
    // setSignupData()
  };
  return (
    <Layout>
      <div style={contentAlignment}>
        Contact Me
        <div>
          Login Form
          {!isSignup && (
            <form>
              <input type="text" placeholder="Email" name="Email" /> <br />
              <input type="password" placeholder="Password" name="Password" />
              <br />
              <button>Submit</button>
              <div
                onClick={() => {
                  setIsSignup(true);
                }}
              >
                Sign up if new
              </div>
            </form>
          )}
          {isSignup && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(signupData);
              }}
            >
              <input
                type="text"
                value={signupData.email}
                onChange={(e) => updateSignupData(e.target.value, "email")}
                placeholder="Email"
                name="Email"
              />{" "}
              <br />
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={signupData.name}
                onChange={(e) => updateSignupData(e.target.value)}
              />{" "}
              <br />
              <input
                type="text"
                placeholder="Address"
                name="Address"
                value={signupData.address}
                onChange={(e) => updateSignupData(e.target.value, "address")}
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Password"
                name="Password"
                value={signupData.password}
                onChange={(e) => updateSignupData(e.target.value, "password")}
              />
              <br />
              <button>Submit</button>
              <div onClick={() => setIsSignup(false)}>Login</div>
            </form>
          )}
        </div>
        )
        <Link to="/" style={contentLinkStyle}>
          Go to Home
        </Link>
      </div>
    </Layout>
  );
};

export default Contact;
