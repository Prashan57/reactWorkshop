import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const EmailContext = createContext();

export const useEmailContext = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateName = (n) => {
    setName(n);
  };

  const updateEmail = (e) => {
    setEmail(e);
  };

  return (
    <EmailContext.Provider value={{ name, updateName, email, updateEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
