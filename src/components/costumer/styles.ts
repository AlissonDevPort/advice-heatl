import styled from "styled-components";

export const CostumerSection = styled.section`
  width: 100%;
  max-height: 750px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
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

export const IconContainerDefault = styled.button`
  margin-right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-size:1.1rem;
`;
export const PencilContainer = styled(IconContainerDefault)`
    color: white;
  &:hover {
    color: #004c98;
    transform: scale(1.2);
  }
`;
export const DelContainer = styled(IconContainerDefault)`
    color: white;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;