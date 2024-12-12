import React from "react";
import { DashContainer } from "./styles";

const DashBoard = () => {
  return (
    <DashContainer>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "grey" }}
      ></div>
      <div>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        ></div>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
        ></div>
      </div>
    </DashContainer>
  );
};

export default DashBoard;
