import { colors } from "../constants/colors";

const headerStyle = {
  backgroundColor: colors.primaryAppColor,
  display: "flex",
  height: "30px",
  justifyContent: "space-between",
  padding: "20px ",
};

const headerContent = {
  display: "flex",
  gap: "25px",
};

const headerLinkStyle = {
  textDecoration: "none",
  color: colors.headerSideTextColor,
  fontSize: 19,
  fontWeight: "bold",
};

const contentLinkStyle = {
  textDecoration: "none",
  color: colors.contentLinkTextColor,
  fontSize: 19,
  fontWeight: "bold",
};

const contentAlignment = {
  display: "flex",
  height: "90vh",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

export {
  headerStyle,
  headerContent,
  headerLinkStyle,
  contentLinkStyle,
  contentAlignment,
};
