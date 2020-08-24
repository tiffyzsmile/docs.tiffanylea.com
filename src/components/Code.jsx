import React from "react";

const styles = {
  padding: "16px 16px 0 16px",
  margin: "32px 0",
  backgroundColor: "#f6f8fa",
  overflow: "hidden", // to respect child element margin
};

const Code = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default Code;
