import React, { useState } from "react";
import Layout from "../layout/layout";

import "../input.css";
import { Link } from "react-router-dom";
import {
  contentAlignment,
  contentLinkStyle,
  tailWindButton,
} from "../styles/styles";
import { message } from "../constants/messages";

const Home = () => {
  return (
    <Layout>
      <div style={contentAlignment}>
        {message.welcomeMessage}
        <br />
        <br />
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
          <Link to="/auth" style={contentLinkStyle}>
            Login
          </Link>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
