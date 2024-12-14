import styled from "styled-components";

export const DoctorSection = styled.section`
  width: 330px;
  max-height: 250px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
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

export const DoctorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #11171d;
  color: white;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const Doctor = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
