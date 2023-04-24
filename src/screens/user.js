import React from "react";
import Layout from "../layout/layout";
import { useContext } from "react";
import { EmailContext } from "../context/emailContext";
import { contentAlignment } from "../styles/styles";

const User = () => {
  const { name, updateName, email, updateEmail } = useContext(EmailContext);
  return (
    <Layout>
      <div style={contentAlignment}>
        Email : {email} + User Name : {name}
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => updateEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
    </Layout>
  );
};

export default User;
