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
        <Link to="/task" style={contentLinkStyle}>
          Add a Task
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
