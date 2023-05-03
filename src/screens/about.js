import React from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import { contentAlignment, contentLinkStyle } from "../styles/styles";
import { app } from "../constants/appConstants";

const About = () => {
  return (
    <Layout>
      <div style={contentAlignment}>
        About Me
        <br />
        {app.user}
        <Link to="/" style={contentLinkStyle}>
          Go to Home
        </Link>
      </div>
    </Layout>
  );
};

export default About;
