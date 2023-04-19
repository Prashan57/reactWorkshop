import React from "react";
import Header from "./header";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
