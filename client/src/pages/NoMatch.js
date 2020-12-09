import React from "react";
import icon from "../assets/404trash.png";
function NoMatch() {
  const div404 = {
    margin: "auto",
    marginTop: "50px",
    width: "75%",
    textAlign: "center",
  };
  const textStyle = {
    margin: "20px",
  };
  const imageStyle = {
    height: "300px",
  };
  return (
    <div style={div404}>
      <h1 style={textStyle}>404 Not Found</h1>
      <img src={icon} alt="trash" style={imageStyle} />
      <h2 style={textStyle}>
        You won't find any <strong>treasure</strong> here!
      </h2>
    </div>
  );
}
export default NoMatch;
