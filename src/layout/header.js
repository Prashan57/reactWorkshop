import React, { useContext } from "react";
import { routes } from "../routes/routes";
import { Link } from "react-router-dom";

import { app } from "../constants/appConstants";
import { colors } from "../constants/colors";

import { headerContent, headerStyle, headerLinkStyle } from "../styles/styles";
import { useEmailContext } from "../context/emailContext";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { name } = useEmailContext();
  return (
    <div style={headerStyle}>
      <div>
        <Link to="/" style={headerLinkStyle}>
          {name}
          {app.user}
        </Link>
      </div>
      {isAuthenticated && (
        <div style={headerContent}>
          {routes
            .filter((route) => !!route.name)
            .map((each) => (
              <Link
                key={each.path}
                to={each.path}
                style={{
                  textDecoration: "none",
                  color: colors.headerSideTextColor,
                  fontSize: 17,
                  fontWeight: "inherit",
                }}
              >
                {each.name}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Header;
