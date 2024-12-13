import React from "react";
import { DashContainer } from "./styles";
import Chart from "../chart/Chart";

const DashBoard:React.FC = () => {
  return (
    <>
      <p style={{ textAlign: "start", width: "100%", color: "white" }}>
        Quantidade de consultas por semanas do mês
      </p>
      <DashContainer>
        <Chart />
      </DashContainer>
    </>
  );
};

export default DashBoard;
