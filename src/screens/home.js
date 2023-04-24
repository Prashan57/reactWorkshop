import React, { useState } from "react";
import Layout from "../layout/layout";

import { Link } from "react-router-dom";
import { contentAlignment, contentLinkStyle } from "../styles/styles";
import { message } from "../constants/messages";
const Home = () => {
  return (
    <Layout>
      <div style={contentAlignment}>
        {message.welcomeMessage}
        <br />
        <br />
        <Link to="/auth" style={contentLinkStyle}>
          Login
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
