import styled from "styled-components";

export const CostumerSection = styled.section`
  width: 100%;
  max-height: 70%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #d3d3d3;
    border-radius: 4px;
  }
`;

export const CostumerContainer = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  background-color: #11171d;
  color: white;
  padding: 5px 0px;
  justify-content:space-between;
`;

export const CostumerComponent = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 20px;
  align-items: center;

`;

export const CostumerIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right:10px;
  gap:20px;
`;
