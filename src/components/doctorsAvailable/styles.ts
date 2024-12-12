import styled from "styled-components";

export const DoctorSection = styled.section`
  width: 100%;
  max-height: 250px;
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
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`;

export const DoctorContainer = styled.div`
  width: 320px;
  max-height: 100px;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  background-color: #ababab;
`;

export const Doctor = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 20px;
  align-items: center;
`;
